package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.BookingCreateDto;
import ru.vsu.cs.sportbox.Responses.BookingResponse;

public interface BookingService {
    BookingResponse deleteBookingById(int id);
    BookingResponse addNewBooking(BookingCreateDto bookingCreateDto);

    BookingResponse getBookingById(int id);

    BookingResponse returnBooking(int id);
}
