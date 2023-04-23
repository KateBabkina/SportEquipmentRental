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
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class PersonController {

    private PersonService personService;

    @PostMapping("/add")
    public ResponseEntity<PersonResponse> addNewPerson(@RequestBody PersonCreateDto personCreateDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse registrationResponse = personService.addNewPerson(personCreateDto);
        return new ResponseEntity<>(registrationResponse, httpStatus);
    }

    @GetMapping("/login")
    public ResponseEntity<PersonResponse> loginPerson(@RequestBody PersonLoginDto personLoginDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse loginResponse = personService.loginPerson(personLoginDto);
        return new ResponseEntity<>(loginResponse, httpStatus);
    }

    @GetMapping("/profile")
    public ResponseEntity<PersonResponse> getProfile(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse profileResponse = personService.getPersonById(id);
        return new ResponseEntity<>(profileResponse, httpStatus);
    }

    @GetMapping("/filter")
    public ResponseEntity<Person> filterPerson(@RequestBody PersonFilterDto personFilterDto) {
        HttpStatus httpStatus = HttpStatus.OK;
        Person person = personService.filterPerson(personFilterDto);
        return new ResponseEntity<>(person, httpStatus);
    }

    @GetMapping("/get_by_id")
    public ResponseEntity<PersonResponse> getPersonById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse personResponse = personService.getPersonById(id);
        return new ResponseEntity<>(personResponse, httpStatus);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<PersonResponse> deletePersonById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse personResponse = personService.deletePersonById(id);
        return new ResponseEntity<>(personResponse, httpStatus);
    }

    @PutMapping("/ban")
    public ResponseEntity<PersonResponse> banPerson(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse personResponse = personService.banPerson(id);
        return new ResponseEntity<>(personResponse, httpStatus);
    }

    @PutMapping("/unban")
    public ResponseEntity<PersonResponse> unbanPerson(@RequestParam(value="id") int id) {
        HttpStatus httpStatus = HttpStatus.OK;
        PersonResponse personResponse = personService.unbanPerson(id);
        return new ResponseEntity<>(personResponse, httpStatus);
    }
}
