package ru.vsu.cs.sportbox.Data.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class InventoryTypeFilterDto {
    private String inventoryType;
    private int minPrice;
    private int maxPrice;
    private String startDate;
    private String endDate;
}
