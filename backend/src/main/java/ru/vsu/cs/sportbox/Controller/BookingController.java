package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.BookingCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.BookingFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Booking;
import ru.vsu.cs.sportbox.Responses.BookingResponse;
import ru.vsu.cs.sportbox.Service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/api/booking")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class BookingController {
    private BookingService bookingService;

    @DeleteMapping("/cancel")
    public ResponseEntity<BookingResponse> deleteBookingById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        BookingResponse bookingDeleteResponse = bookingService.deleteBookingById(id);
        return new ResponseEntity<>(bookingDeleteResponse, httpStatus);
    }

    @PostMapping("/add")
    public ResponseEntity<BookingResponse> addNewBooking(@RequestBody BookingCreateDto bookingCreateDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        BookingResponse bookingCreateResponse = bookingService.addNewBooking(bookingCreateDto);
        return new ResponseEntity<>(bookingCreateResponse, httpStatus);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<BookingResponse> getBookingById(@RequestParam(value="id") int id) {
//        HttpStatus httpStatus;
        BookingResponse bookingGetResponse = bookingService.getBookingById(id);
//        if (bookingGetResponse.isStatus()) {
//            httpStatus = HttpStatus.OK;
//        } else {
//            httpStatus = HttpStatus.BAD_REQUEST;
//        }
        return new ResponseEntity<>(bookingGetResponse, HttpStatus.OK);
    }

    @PutMapping("/return")
    public ResponseEntity<BookingResponse> changeBooking(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        BookingResponse bookingReturnResponse = bookingService.returnBooking(id);
        return new ResponseEntity<>(bookingReturnResponse, httpStatus);
    }

    @GetMapping("/filter")
    public ResponseEntity<List<Booking>> filterBooking(@RequestBody BookingFilterDto bookingFilterDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        List<Booking> bookings = bookingService.filterBooking(bookingFilterDto);
        return new ResponseEntity<>(bookings, httpStatus);
    }
}
