package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.BookingCreateDto;
import ru.vsu.cs.sportbox.Responses.BookingCreateResponse;
import ru.vsu.cs.sportbox.Responses.BookingDeleteResponse;

public interface BookingService {
    BookingDeleteResponse deleteBookingById(int id);
    BookingCreateResponse addNewBooking(BookingCreateDto bookingCreateDto);
}
