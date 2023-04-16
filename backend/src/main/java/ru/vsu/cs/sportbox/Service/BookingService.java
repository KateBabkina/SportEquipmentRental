package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Responses.BookingDeleteResponse;

public interface BookingService {
    BookingDeleteResponse deleteBookingById(int id);
}
