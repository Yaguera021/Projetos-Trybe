package com.betrybe.agrix.controllers.dtos;


import com.betrybe.agrix.models.entity.Crop;
import java.time.LocalDate;

/**
 * The type Crop dto.
 */
public record CropDto(Long id, String name, Double plantedArea, Long farmId,
                      LocalDate plantedDate, LocalDate harvestDate) {
  public Crop toCrop() {
    return new Crop(id, name, plantedArea, plantedDate, harvestDate);
  }
}