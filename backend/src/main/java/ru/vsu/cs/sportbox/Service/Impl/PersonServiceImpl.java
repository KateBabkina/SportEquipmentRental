package ru.vsu.cs.sportbox.Service.Impl;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.vsu.cs.sportbox.Data.Dto.PersonCreateDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonFilterDto;
import ru.vsu.cs.sportbox.Data.Dto.PersonLoginDto;
import ru.vsu.cs.sportbox.Data.Mapper.PersonMapper;
import ru.vsu.cs.sportbox.Data.Model.Person;
import ru.vsu.cs.sportbox.Data.Repository.PersonRepository;
import ru.vsu.cs.sportbox.Responses.LoginResponse;
import ru.vsu.cs.sportbox.Responses.ProfileResponse;
import ru.vsu.cs.sportbox.Responses.RegistrationResponse;
import ru.vsu.cs.sportbox.Service.PersonService;

import java.util.List;

@Service
@AllArgsConstructor
public class PersonServiceImpl implements PersonService {

    private PersonRepository personRepository;
    private PersonMapper personMapper;
    private PasswordEncoder passwordEncoder;
    @Override
    @Transactional
    public RegistrationResponse addNewPerson(PersonCreateDto personCreateDto){
        Person person = personMapper.personCreateDtoToPerson(personCreateDto);

        if (personRepository.existsByEmail(person.getEmail()))
            return new RegistrationResponse("К указанной почте уже привязан аккаунт.", false);

        personRepository.save(person);
        return new RegistrationResponse("Регистрация прошла успешно.", true);
    }

    @Override
    @Transactional
    public LoginResponse loginPerson(PersonLoginDto personLoginDto) {
        Person person = personRepository.findByEmail(personLoginDto.getEmail());
        if (person != null) {
            String rawPassword = personLoginDto.getPassword();
            String encodedPassword = person.getPassword();
            Boolean isPasswordRight = passwordEncoder.matches(rawPassword, encodedPassword);
            if (isPasswordRight) {
                return new LoginResponse("Авторизация прошла успешно.", true, person);
            } else {
                return new LoginResponse("Введен неверный пароль.", false, person);
            }
        } else {
            return new LoginResponse("Аккаунта с указанной почтой не существует.", false, null);
        }
    }

    @Override
    @Transactional
    public ProfileResponse getPersonById(int id) {
        Person person = personRepository.findById(id);
        if (person != null) {
            return new ProfileResponse("Пользователь успешно найден.", true, person);
        } else {
            return new ProfileResponse("Пользователя с указанным идентификатором не существует.", false, null);
        }
    }

    @Override
    @Transactional
    public Person filterPerson(PersonFilterDto personFilterDto) {
        Person person = personRepository.findByEmail(personFilterDto.getEmail());
        return person;
    }
}
