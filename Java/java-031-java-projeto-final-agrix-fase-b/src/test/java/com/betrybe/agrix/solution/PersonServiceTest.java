package com.betrybe.agrix.solution;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.betrybe.agrix.ebytr.staff.models.entity.Person;
import com.betrybe.agrix.ebytr.staff.exception.PersonNotFoundException;
import com.betrybe.agrix.ebytr.staff.models.entity.repository.PersonRepository;
import com.betrybe.agrix.ebytr.staff.service.PersonService;
import java.util.Optional;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
public class PersonServiceTest {

  @Autowired
  PersonService personService;

  @MockBean
  PersonRepository personRepository;

  @Test
  public void testGetPersonById() {
    Person person = new Person();
    person.setId(21L);
    person.setUsername("Yaguera");

    when(personRepository.findById(eq(21L))).thenReturn(Optional.of(person));

    Person returnedPerson = personService.getPersonById(21L);

    assertEquals(person, returnedPerson);
    verify(personRepository).findById(21L);
  }

  @Test
  public void testGetPersonByUsername() {
    Person person = new Person();
    person.setId(21L);
    person.setUsername("Yaguera");

    when(personRepository.findByUsername(eq("Yaguera"))).thenReturn(Optional.of(person));

    Person returnedPerson = personService.getPersonByUsername("Yaguera");

    assertEquals(person, returnedPerson);
    verify(personRepository).findByUsername(eq("Yaguera"));
  }

  @Test
  public void testCreatePerson() {
    Person person = new Person();
    person.setId(21L);
    person.setUsername("Yaguera");

    when(personRepository.save(any(Person.class))).thenReturn(person);

    Person createdPerson = personService.create(person);

    assertEquals(person, createdPerson);
    verify(personRepository).save(eq(person));
  }

  @Test
  public void testPersonRetrievalNotFound() {
    when(personRepository.findById(any())).thenReturn(Optional.empty());

    assertThrows(PersonNotFoundException.class, () -> personService.getPersonById(456L));

    verify(personRepository).findById(eq(456L));
  }
}
