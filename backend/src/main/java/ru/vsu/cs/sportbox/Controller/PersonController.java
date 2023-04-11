package ru.vsu.cs.sportbox.Controller;


import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.vsu.cs.sportbox.Data.Dto.PersonCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonLoginDto;
import ru.vsu.cs.sportbox.Responses.LoginResponse;
import ru.vsu.cs.sportbox.Responses.RegistrationResponse;
import ru.vsu.cs.sportbox.Service.PersonService;

@RestController
@RequestMapping("/api/person")
@AllArgsConstructor
public class PersonController {

    private PersonService personService;

    @PostMapping("/add")
    public ResponseEntity<RegistrationResponse> addNewPerson(@RequestBody PersonCreateDto personCreateDto) {
        RegistrationResponse registrationResponse = personService.addNewPerson(personCreateDto);
        if (registrationResponse.isStatus()) {
            return new ResponseEntity<>(registrationResponse, HttpStatus.OK);
        }
        return new ResponseEntity<>(registrationResponse, HttpStatus.CONFLICT);
    }

    @GetMapping("/login")
    public ResponseEntity<LoginResponse> loginPerson(@RequestBody PersonLoginDto personLoginDto) {
        LoginResponse loginResponse = personService.loginPerson(personLoginDto);
        if (loginResponse.isStatus()) {
            return new ResponseEntity<>(loginResponse, HttpStatus.OK);
        }
        return new ResponseEntity<>(loginResponse, HttpStatus.UNAUTHORIZED);
    }
}
