package com.betrybe.agrix.controllers;


import com.betrybe.agrix.controllers.dtos.PersonCreateDto;
import com.betrybe.agrix.controllers.dtos.PersonDto;
import com.betrybe.agrix.models.entity.Person;
import com.betrybe.agrix.service.PersonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Person Controller.
 */

@RestController
@RequestMapping("/persons")
public class PersonController {
  private final PersonService personService;

  public PersonController(PersonService personService) {
    this.personService = personService;
  }

  /**
   * Create person response entity.
   *
   * @param personCreateDto the person dto
   * @return the response entity
   */
  @PostMapping
  public ResponseEntity<PersonDto> createPerson(@RequestBody PersonCreateDto personCreateDto) {
    Person person = personService.create(personCreateDto.toEntity());
    PersonDto createdPerson = new PersonDto(person.getId(),
        person.getUsername(), person.getRole());
    return ResponseEntity.status(HttpStatus.CREATED).body(createdPerson);
  }
}