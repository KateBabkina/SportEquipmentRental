package ru.vsu.cs.sportbox.Data.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingCreateDto {
    private int personId;
    private int inventoryTypeId;
    private String startDate;
    private String endDate;
    private int size;
}
