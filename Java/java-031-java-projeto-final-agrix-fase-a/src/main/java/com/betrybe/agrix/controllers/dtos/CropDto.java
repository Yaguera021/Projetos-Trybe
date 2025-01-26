package com.betrybe.agrix.controllers.dtos;

import com.betrybe.agrix.models.entities.Crop;

/**
 * The type Crop dto.
 */
public record CropDto(Integer id, String name, Double plantedArea, Long farmId) {
  public Crop toCrop() {
    return new Crop(id, name, plantedArea);
  }
}
