package ru.vsu.cs.sportbox.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Data.Model.InventoryType;
import ru.vsu.cs.sportbox.Data.Repository.EventRepository;
import ru.vsu.cs.sportbox.Data.Repository.InventoryRepository;
import ru.vsu.cs.sportbox.Service.EventService;
import ru.vsu.cs.sportbox.Specification.EventSpecification;
import ru.vsu.cs.sportbox.Specification.InventoryTypeSpecification;

import java.util.List;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {
    private EventRepository eventRepository;

    @Override
    @Transactional
    public List<Event> filterEvent(EventFilterDto eventFilterDto) {
        return eventRepository.findAll(EventSpecification.getEventByInventoryAndDate(eventFilterDto));
    }
}
