package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Data.Model.Inventory;

import java.util.List;

public interface EventService {
    List<Event> filterEvent(EventFilterDto eventFilterDto);

    List<Event> getRecommendations(int bookingId);
}
