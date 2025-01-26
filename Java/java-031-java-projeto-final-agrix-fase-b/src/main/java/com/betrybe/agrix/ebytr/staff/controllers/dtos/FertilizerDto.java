package com.betrybe.agrix.ebytr.staff.controllers.dtos;

import com.betrybe.agrix.ebytr.staff.models.entity.Fertilizer;

/**
 * The type Fertilizer dto.
 */
public record FertilizerDto(Long id, String name, String brand, String composition) {
  public Fertilizer toFertilizer() {
    return new Fertilizer(id, name, brand, composition);
  }
}
