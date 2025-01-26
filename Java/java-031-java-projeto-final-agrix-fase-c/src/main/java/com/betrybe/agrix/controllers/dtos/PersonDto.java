package com.betrybe.agrix.controllers.dtos;

import com.betrybe.agrix.models.entity.Person;
import com.betrybe.agrix.security.Role;

/**
 * The type Person dto.
 */
public record PersonDto(Long id, String username, Role role) {
  public static PersonDto fromEntity(Person person) {
    return new PersonDto(person.getId(), person.getUsername(), person.getRole());
  }
}
