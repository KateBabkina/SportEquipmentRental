package ru.vsu.cs.sportbox.Data.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import ru.vsu.cs.sportbox.Data.Model.Person;

@EnableJpaRepositories
@Repository
public interface PersonRepository extends JpaRepository<Person,Integer> {

    Person findByEmail(String email);

    boolean existsByEmail(String email);
}
