package ru.vsu.cs.sportbox.Responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.vsu.cs.sportbox.Data.Model.Booking;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class BookingResponse {
    private String message;
    private boolean status;
    private Booking booking;
}
