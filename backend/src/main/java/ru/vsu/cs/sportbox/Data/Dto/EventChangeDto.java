package ru.vsu.cs.sportbox.Data.Dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EventChangeDto {
    private String name;
    private double price;
    private String description;
    private String startDate;
    private String endDate;
    private String inventoryType;
}
