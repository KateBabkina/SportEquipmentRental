package ru.vsu.cs.sportbox.Data.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EventFilterDto {
    private String inventoryType;
    private String startDate;
    private String endDate;
}
