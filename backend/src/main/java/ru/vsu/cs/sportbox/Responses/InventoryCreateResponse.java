package ru.vsu.cs.sportbox.Responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.vsu.cs.sportbox.Data.Model.Booking;
import ru.vsu.cs.sportbox.Data.Model.Inventory;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class InventoryCreateResponse {
    private String message;
    private boolean status;
    private Inventory inventory;
}
