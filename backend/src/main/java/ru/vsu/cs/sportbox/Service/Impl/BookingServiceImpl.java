package ru.vsu.cs.sportbox.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.vsu.cs.sportbox.Data.Dto.BookingCreateDto;
import ru.vsu.cs.sportbox.Data.Mapper.BookingMapper;
import ru.vsu.cs.sportbox.Data.Model.Booking;
import ru.vsu.cs.sportbox.Data.Repository.BookingRepository;
import ru.vsu.cs.sportbox.Responses.BookingCreateResponse;
import ru.vsu.cs.sportbox.Responses.BookingDeleteResponse;
import ru.vsu.cs.sportbox.Service.BookingService;

import java.util.Date;

@Service
@AllArgsConstructor
public class BookingServiceImpl implements BookingService {
    private BookingRepository bookingRepository;
    private BookingMapper bookingMapper;

    @Override
    @Transactional
    public BookingDeleteResponse deleteBookingById(int id) {
        Booking booking = bookingRepository.findById(id);
        if (booking != null) {
            Date curentDate = new Date();

            if (booking.getStartDate().after(curentDate)) {
                bookingRepository.removeBookingById(id);
                return new BookingDeleteResponse("Отмена заказа прошла успешно.", true, booking);
            } else {
                return new BookingDeleteResponse("Отменить заказ невозможно, время аренды уже наступило.", false, booking);
            }
        } else {
            return new BookingDeleteResponse("Заказа с указанным идентификатором не существует.", false, null);
        }
    }

    @Override
    @Transactional
    public BookingCreateResponse addNewBooking(BookingCreateDto bookingCreateDto) {
        Booking booking = bookingMapper.bookingCreateDtoToBooking(bookingCreateDto);
        if (booking == null) {
            return new BookingCreateResponse("Нет свободного инвентаря с указанными параметрами.", false, null);
        }
        Booking savedBooking = bookingRepository.save(booking);
        return new BookingCreateResponse("Заказ был успешно оформлен.", true, savedBooking);

    }
}
