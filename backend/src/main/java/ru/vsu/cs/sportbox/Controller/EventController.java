package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.vsu.cs.sportbox.Data.Dto.EventFilterDto;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Service.EventService;

import java.util.List;

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
}
