package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.EventChangeDto;
import ru.vsu.cs.sportbox.Data.Dto.EventCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Responses.EventChangeResponse;
import ru.vsu.cs.sportbox.Responses.EventCreateResponse;
import ru.vsu.cs.sportbox.Responses.EventDeleteResponse;
import ru.vsu.cs.sportbox.Responses.EventGetResponse;

import java.util.List;
import java.util.Set;

public interface EventService {
    List<Event> filterEvent(EventFilterDto eventFilterDto);

    Set<Event> getRecommendations(int bookingId);

    EventCreateResponse addNewEvent(EventCreateDto eventCreateDto);

    EventGetResponse getEventById(int id);

    EventChangeResponse changeEvent(int id, EventChangeDto eventChangeDto);

    EventDeleteResponse deleteEventById(int id);
}
