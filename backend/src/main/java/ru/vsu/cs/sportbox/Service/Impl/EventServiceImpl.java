package ru.vsu.cs.sportbox.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Data.Repository.BookingRepository;
import ru.vsu.cs.sportbox.Data.Repository.EventRepository;
import ru.vsu.cs.sportbox.Service.EventService;
import ru.vsu.cs.sportbox.Specification.EventSpecification;

import java.util.List;
import java.util.Set;

@Service
@AllArgsConstructor
public class EventServiceImpl implements EventService {
    private EventRepository eventRepository;
    private BookingRepository bookingRepository;

    @Override
    @Transactional
    public List<Event> filterEvent(EventFilterDto eventFilterDto) {
        return eventRepository.findAll(EventSpecification.getEventByInventoryAndDate(eventFilterDto));
    }

    @Override
    @Transactional
    public Set<Event> getRecommendations(int bookingId) {
        return bookingRepository.findById(bookingId).getEvents();
    }
}
