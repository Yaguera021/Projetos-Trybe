package com.betrybe.agrix.controllers.dtos;

import com.betrybe.agrix.models.entity.Farm;

/**
 * The type Farm dto.
 */
public record FarmDto(Long id, String name, Double size) {

  public Farm toFarm() {
    return new Farm(id, name, size);
  }
}