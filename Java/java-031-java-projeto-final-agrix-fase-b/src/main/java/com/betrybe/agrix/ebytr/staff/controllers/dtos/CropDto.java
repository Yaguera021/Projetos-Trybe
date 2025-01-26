package com.betrybe.agrix.ebytr.staff.controllers.dtos;


import com.betrybe.agrix.ebytr.staff.models.entity.Crop;
import java.time.LocalDate;

/**
 * The type Crop dto.
 */
public record CropDto(Integer id, String name, Double plantedArea, Long farmId,
                      LocalDate plantedDate, LocalDate harvestDate) {
  public Crop toCrop() {
    return new Crop(id, name, plantedArea, plantedDate, harvestDate);
  }
}