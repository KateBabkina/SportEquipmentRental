package ru.vsu.cs.sportbox.Controller;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.*;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Data.Model.Person;
import ru.vsu.cs.sportbox.Responses.*;
import ru.vsu.cs.sportbox.Service.PersonService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/person")
@AllArgsConstructor
public class PersonController {

    private PersonService personService;

    @PostMapping("/add")
    public ResponseEntity<PersonResponse> addNewPerson(@RequestBody PersonCreateDto personCreateDto) {
        HttpStatus httpStatus;
        PersonResponse registrationResponse = personService.addNewPerson(personCreateDto);
        if (registrationResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.CONFLICT;
        }
        return new ResponseEntity<>(registrationResponse, httpStatus);
    }

    @GetMapping("/login")
    public ResponseEntity<PersonResponse> loginPerson(@RequestBody PersonLoginDto personLoginDto) {
        HttpStatus httpStatus;
        PersonResponse loginResponse = personService.loginPerson(personLoginDto);
        if (loginResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(loginResponse, httpStatus);
    }

    @GetMapping("/profile")
    public ResponseEntity<PersonResponse> getProfile(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        PersonResponse profileResponse = personService.getPersonById(id);
        if (profileResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(profileResponse, httpStatus);
    }

    @GetMapping("/filter")
    public ResponseEntity<Person> filterPerson(@RequestBody PersonFilterDto personFilterDto) {
        Person person = personService.filterPerson(personFilterDto);
        return new ResponseEntity<>(person, HttpStatus.OK);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<PersonResponse> getPersonById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        PersonResponse personResponse = personService.getPersonById(id);
        if (personResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(personResponse, httpStatus);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<PersonResponse> deletePersonById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        PersonResponse personResponse = personService.deletePersonById(id);
        if (personResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(personResponse, httpStatus);
    }

    @PutMapping("/ban")
    public ResponseEntity<PersonResponse> banPerson(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        PersonResponse personResponse = personService.banPerson(id);
        if (personResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(personResponse, httpStatus);
    }

    @PutMapping("/unban")
    public ResponseEntity<PersonResponse> unbanPerson(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        PersonResponse personResponse = personService.unbanPerson(id);
        if (personResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.BAD_REQUEST;
        }
        return new ResponseEntity<>(personResponse, httpStatus);
    }
}
