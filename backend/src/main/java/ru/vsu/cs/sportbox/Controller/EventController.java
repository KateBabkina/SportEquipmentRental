package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Service.EventService;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/event")
@AllArgsConstructor
public class EventController {
    private EventService eventService;
    @GetMapping("/filter")
    public ResponseEntity<List<Event>> filterEvent(@RequestBody EventFilterDto eventFilterDto) {
        List<Event> events = eventService.filterEvent(eventFilterDto);

        return new ResponseEntity<>(events, HttpStatus.OK);
    }

    @GetMapping("/recommendation")
    public ResponseEntity<Set<Event>> getRecommendations(@RequestParam(value="booking_id") int bookingId) {
        Set<Event> events = eventService.getRecommendations(bookingId);

        return new ResponseEntity<>(events, HttpStatus.OK);
    }
}
