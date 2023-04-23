package ru.vsu.cs.sportbox.Controller;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.InventoryFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonLoginDto;
import ru.vsu.cs.sportbox.Data.Model.Inventory;
import ru.vsu.cs.sportbox.Data.Model.Person;
import ru.vsu.cs.sportbox.Responses.LoginResponse;
import ru.vsu.cs.sportbox.Responses.ProfileResponse;
import ru.vsu.cs.sportbox.Responses.RegistrationResponse;
import ru.vsu.cs.sportbox.Service.PersonService;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/person")
@AllArgsConstructor
public class PersonController {

    private PersonService personService;

    @PostMapping("/add")
    public ResponseEntity<RegistrationResponse> addNewPerson(@RequestBody PersonCreateDto personCreateDto) {
        HttpStatus httpStatus;
        RegistrationResponse registrationResponse = personService.addNewPerson(personCreateDto);
        if (registrationResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.CONFLICT;
        }
        return new ResponseEntity<>(registrationResponse, httpStatus);
    }

    @GetMapping("/login")
    public ResponseEntity<LoginResponse> loginPerson(@RequestBody PersonLoginDto personLoginDto) {
        HttpStatus httpStatus;
        LoginResponse loginResponse = personService.loginPerson(personLoginDto);
        if (loginResponse.isStatus()) {
            httpStatus = HttpStatus.OK;
        } else {
            httpStatus = HttpStatus.UNAUTHORIZED;
        }
        return new ResponseEntity<>(loginResponse, httpStatus);
    }

    @GetMapping("/profile")
    public ResponseEntity<ProfileResponse> getPersonById(@RequestParam(value="id") int id) {
        HttpStatus httpStatus;
        ProfileResponse profileResponse = personService.getPersonById(id);
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
}
