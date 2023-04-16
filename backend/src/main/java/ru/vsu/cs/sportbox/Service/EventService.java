package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;

import java.util.List;
import java.util.Set;

public interface EventService {
    List<Event> filterEvent(EventFilterDto eventFilterDto);

    Set<Event> getRecommendations(int bookingId);
}
