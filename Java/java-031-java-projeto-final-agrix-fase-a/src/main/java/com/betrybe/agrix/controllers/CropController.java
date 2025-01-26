package com.betrybe.agrix.controllers;

import com.betrybe.agrix.controllers.dtos.CropDto;
import com.betrybe.agrix.models.entities.Crop;
import com.betrybe.agrix.services.CropService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Crop controller.
 */
@RestController
@RequestMapping("/crops")
public class CropController {
  private final CropService cropService;

  /**
   * Instantiates a new Crop controller.
   *
   * @param cropService the crop service
   */
  @Autowired
  public CropController(CropService cropService) {
    this.cropService = cropService;
  }


  /**
   * Gets all crops.
   *
   * @return the all crops
   */
  @GetMapping()
  public ResponseEntity<?> getAllCrops() {
    List<Crop> crops = cropService.getAllCrops();
    List<CropDto> cropDtos = crops.stream()
        .map(crop -> new CropDto(
            crop.getId(),
            crop.getName(),
            crop.getPlantedArea(),
            crop.getFarm().getId()))
        .collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(cropDtos);
  }

  /**
   * Gets crop by id.
   *
   * @param id the id
   * @return the crop by id
   */
  @GetMapping("/{id}")
  public ResponseEntity<?> getCropById(@PathVariable Integer id) {
    Optional<Crop> cropOptional = cropService.getCropById(id);

    if (cropOptional.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Plantação não encontrada!");
    }

    Crop crop = cropOptional.get();
    CropDto cropDto = new CropDto(
        crop.getId(),
        crop.getName(),
        crop.getPlantedArea(),
        crop.getFarm().getId()
    );
    return ResponseEntity.status(HttpStatus.OK).body(cropDto);
  }

}
