package ru.vsu.cs.sportbox.Data.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BookingFilterDto {
    private int id;
    private String email;
    private String date;
}
