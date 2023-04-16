package ru.vsu.cs.sportbox.Data.Mapper;

import io.micrometer.common.util.StringUtils;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.vsu.cs.sportbox.Data.Dto.BookingCreateDto;
import ru.vsu.cs.sportbox.Data.Model.Booking;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Data.Model.InventoryType;
import ru.vsu.cs.sportbox.Data.Repository.BookingRepository;
import ru.vsu.cs.sportbox.Data.Repository.InventoryRepository;
import ru.vsu.cs.sportbox.Data.Repository.InventoryTypeRepository;
import ru.vsu.cs.sportbox.Data.Repository.PersonRepository;
import ru.vsu.cs.sportbox.Specification.InventoryTypeSpecification;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
@AllArgsConstructor
public class BookingMapper {
    private BookingRepository bookingRepository;
    private PersonRepository personRepository;
    private InventoryTypeRepository inventoryTypeRepository;
    private InventoryRepository inventoryRepository;

    @Transactional
    public Booking bookingCreateDtoToBooking (BookingCreateDto bookingCreateDto){
        Booking booking = new Booking();

        Date sDate;
        Date eDate;
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            sDate = format.parse(bookingCreateDto.getStartDate());
            eDate = format.parse(bookingCreateDto.getEndDate());
        } catch (ParseException e) {
            throw new RuntimeException(e);
        }

        booking.setStartDate(sDate);
        booking.setEndDate(eDate);
        booking.setDebt(0.);
        booking.setPerson(personRepository.findById(bookingCreateDto.getPersonId()));

        InventoryType inventoryType = inventoryTypeRepository.findById(bookingCreateDto.getInventoryTypeId());
        double priceForDay = inventoryType.getPrice();
        Instant sDateInstant = sDate.toInstant();
        Instant eDateInstant = eDate.toInstant();
        long days = ChronoUnit.DAYS.between(sDateInstant,eDateInstant);
        booking.setPrice(priceForDay * days);


        List<Inventory> inventories;
        if (!inventoryType.getIsSizable()) {
            inventories = inventoryRepository.findByInventoryType(inventoryType);
        } else {
            inventories = inventoryRepository.findByInventoryTypeAndSize(inventoryType, bookingCreateDto.getSize());
        }

        boolean notFree;
        for (Inventory inventory : inventories) {
            notFree = false;
            for (Booking currentBooking : inventory.getBookings()) {
                if (sDate.equals(currentBooking.getStartDate()) || eDate.equals(currentBooking.getEndDate())
                        || sDate.before(currentBooking.getStartDate()) && eDate.after(currentBooking.getEndDate())
                        || sDate.after(currentBooking.getStartDate()) && eDate.before(currentBooking.getEndDate())) {
                    notFree = true;
                }
            }
            if (!notFree){
                booking.setInventory(inventory);
                return booking;
            }
        }


        return null;
    }
}
