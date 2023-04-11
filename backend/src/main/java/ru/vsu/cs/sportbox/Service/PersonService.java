package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.PersonCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonLoginDto;
import ru.vsu.cs.sportbox.Responses.LoginResponse;
import ru.vsu.cs.sportbox.Responses.RegistrationResponse;

public interface PersonService {
    RegistrationResponse addNewPerson(PersonCreateDto personCreateDto);
    LoginResponse loginPerson(PersonLoginDto personLoginDto);
}



