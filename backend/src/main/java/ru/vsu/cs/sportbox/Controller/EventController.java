package ru.vsu.cs.sportbox.Controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.*;
import ru.vsu.cs.sportbox.Data.Model.Event;
import ru.vsu.cs.sportbox.Responses.*;
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

    @PostMapping("/add")
    public ResponseEntity<EventCreateResponse> addNewEvent(@RequestBody EventCreateDto eventCreateDto) {
        HttpStatus httpStatus;
        EventCreateResponse eventCreateResponse = eventService.addNewEvent(eventCreateDto);
        if (eventCreateResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(eventCreateResponse, httpStatus);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<EventGetResponse> getEventById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        EventGetResponse eventGetResponse = eventService.getEventById(id);
        if (eventGetResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(eventGetResponse, httpStatus);
    }

    @PutMapping("/change")
    public ResponseEntity<EventChangeResponse> changeEvent(@RequestParam(value="id") int id, @RequestBody EventChangeDto eventChangeDto) {
        HttpStatus httpStatus;
        EventChangeResponse eventChangeResponse = eventService.changeEvent(id, eventChangeDto);
        if (eventChangeResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(eventChangeResponse, httpStatus);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<EventDeleteResponse> deleteEventById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        EventDeleteResponse eventDeleteResponse = eventService.deleteEventById(id);
        if (eventDeleteResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(eventDeleteResponse, httpStatus);
    }
}
