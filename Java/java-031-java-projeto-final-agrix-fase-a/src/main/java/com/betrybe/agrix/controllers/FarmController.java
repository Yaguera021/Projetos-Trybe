package com.betrybe.agrix.controllers;

import com.betrybe.agrix.controllers.dtos.CropDto;
import com.betrybe.agrix.controllers.dtos.FarmDto;
import com.betrybe.agrix.controllers.dtos.ResponseDto;
import com.betrybe.agrix.models.entities.Crop;
import com.betrybe.agrix.models.entities.Farm;
import com.betrybe.agrix.services.CropService;
import com.betrybe.agrix.services.FarmService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Farm controller.
 */
@RestController
@RequestMapping("/farms")
public class FarmController {

  private final FarmService farmService;
  private final CropService cropService;

  @Autowired
  public FarmController(FarmService farmService, CropService cropService) {
    this.farmService = farmService;
    this.cropService = cropService;
  }

  @PostMapping()
  public ResponseEntity<Farm> createFarm(@RequestBody FarmDto farmDto) {
    Farm newFarm = farmService.insertFarm(farmDto.toFarm());
    return new ResponseEntity<>(newFarm, HttpStatus.CREATED);
  }

  /**
   * Gets all farms.
   *
   * @return the all farms
   */
  @GetMapping()
  public List<FarmDto> getAllFarms() {
    List<Farm> allFarms = farmService.getAllFarms();
    return allFarms.stream()
        .map((farm) -> new FarmDto(
            farm.getId(),
            farm.getName(),
            farm.getSize()))
        .collect(Collectors.toList());
  }

  /**
   * Gets farm by id.
   *
   * @param id the id
   * @return the farm by id
   */
  @GetMapping("/{id}")
  public ResponseEntity<?> getFarmById(@PathVariable Long id) {
    Optional<Farm> optionalFarm = farmService.getFarmById(id);

    if (optionalFarm.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fazenda não encontrada!");
    }

    FarmDto farmDto = new FarmDto(optionalFarm.get().getId(), optionalFarm.get().getName(),
        optionalFarm.get().getSize());
    return ResponseEntity.status(HttpStatus.OK).body(farmDto);
  }

  /**
   * Create crop response entity.
   *
   * @param farmId  the farm id
   * @param cropDto the crop dto
   * @return the response entity
   */
  @PostMapping("/{farmId}/crops")
  public ResponseEntity<?> createCrop(@PathVariable Long farmId, @RequestBody CropDto cropDto) {
    Optional<Farm> farmOptional = farmService.getFarmById(farmId);

    if (farmOptional.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fazenda não encontrada!");
    }

    Farm farm = farmOptional.get();
    Crop newCrop = cropService.insertCrop(farm, cropDto.toCrop());

    CropDto cropResponseDto = new CropDto(newCrop.getId(), newCrop.getName(),
        newCrop.getPlantedArea(), farmId);
    return ResponseEntity.status(HttpStatus.CREATED).body(cropResponseDto);
  }

  /**
   * Gets crops by farm id.
   *
   * @param farmId the farm id
   * @return the crops by farm id
   */
  @GetMapping("/{farmId}/crops")
  public ResponseEntity<?> getCropsByFarmId(@PathVariable Long farmId) {
    Optional<Farm> farmOptional = farmService.getFarmById(farmId);

    if (farmOptional.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fazenda não encontrada!");
    }

    List<Crop> crops = cropService.getCropsById(farmOptional.get());
    List<CropDto> cropDtos = crops.stream()
        .map(crop -> new CropDto(crop.getId(), crop.getName(), crop.getPlantedArea(), farmId))
        .collect(Collectors.toList());

    return ResponseEntity.status(HttpStatus.OK).body(cropDtos);
  }




}