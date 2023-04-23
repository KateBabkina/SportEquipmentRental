package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.BookingCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.BookingFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Booking;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Responses.BookingResponse;
import ru.vsu.cs.sportbox.Service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
@AllArgsConstructor
public class BookingController {
    private BookingService bookingService;

    @DeleteMapping("/cancel")
    public ResponseEntity<BookingResponse> deleteBookingById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        BookingResponse bookingDeleteResponse = bookingService.deleteBookingById(id);
        if (bookingDeleteResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(bookingDeleteResponse, httpStatus);
    }

    @PostMapping("/add")
    public ResponseEntity<BookingResponse> addNewBooking(@RequestBody BookingCreateDto bookingCreateDto) {
        HttpStatus httpStatus;
        BookingResponse bookingCreateResponse = bookingService.addNewBooking(bookingCreateDto);
        if (bookingCreateResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.CONFLICT;
        }
        return new ResponseEntity<>(bookingCreateResponse, httpStatus);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<BookingResponse> getBookingById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        BookingResponse bookingGetResponse = bookingService.getBookingById(id);
        if (bookingGetResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(bookingGetResponse, httpStatus);
    }

    @PutMapping("/return")
    public ResponseEntity<BookingResponse> changeBooking(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        BookingResponse bookingReturnResponse = bookingService.returnBooking(id);
        if (bookingReturnResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(bookingReturnResponse, httpStatus);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Booking>> filterBooking(@RequestBody BookingFilterDto bookingFilterDto) {
        List<Booking> bookings = bookingService.filterBooking(bookingFilterDto);

        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
}
