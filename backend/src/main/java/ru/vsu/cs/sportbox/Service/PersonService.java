package ru.vsu.cs.sportbox.Service;

import ru.vsu.cs.sportbox.Data.Dto.PersonCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonLoginDto;
import ru.vsu.cs.sportbox.Data.Model.Person;
import ru.vsu.cs.sportbox.Responses.LoginResponse;
import ru.vsu.cs.sportbox.Responses.ProfileResponse;
import ru.vsu.cs.sportbox.Responses.RegistrationResponse;

import java.util.List;

public interface PersonService {
    RegistrationResponse addNewPerson(PersonCreateDto personCreateDto);
    LoginResponse loginPerson(PersonLoginDto personLoginDto);
    ProfileResponse getPersonById(int id);

    Person filterPerson(PersonFilterDto personFilterDto);
}



