package com.betrybe.agrix.controllers.dtos;

import com.betrybe.agrix.models.entity.Person;
import com.betrybe.agrix.security.Role;

/**
 * The type Person create dto.
 */
public record PersonCreateDto(String username, String password, String role) {
  public Person toEntity() {
    Role newRole = Role.valueOf(role);
    return new Person(null, username, password, newRole);
  }
}
