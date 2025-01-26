package com.betrybe.agrix.controllers;

import com.betrybe.agrix.controllers.dtos.FertilizerDto;
import com.betrybe.agrix.models.entity.Fertilizer;
import com.betrybe.agrix.service.FertilizerService;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Fertilizer controller.
 */
@RestController
@RequestMapping("/fertilizers")
public class FertilizerController {

  private final FertilizerService fertilizerService;

  /**
   * Instantiates a new Fertilizer controller.
   *
   * @param fertilizerService the fertilizer service
   */
  @Autowired
  public FertilizerController(FertilizerService fertilizerService) {
    this.fertilizerService = fertilizerService;
  }

  /**
   * Create fertilizer response entity.
   *
   * @param fertilizerDto the fertilizer dto
   * @return the response entity
   */
  @PostMapping
  public ResponseEntity<FertilizerDto> createFertilizer(@RequestBody FertilizerDto fertilizerDto) {
    Fertilizer fertilizer = fertilizerDto.toFertilizer();
    Fertilizer createdFertilizer = fertilizerService.createFertilizer(fertilizer);
    FertilizerDto createdFertilizerDto = new FertilizerDto(
        createdFertilizer.getId(),
        createdFertilizer.getName(),
        createdFertilizer.getBrand(),
        createdFertilizer.getComposition());
    return ResponseEntity.status(HttpStatus.CREATED).body(createdFertilizerDto);
  }

  /**
   * Gets all fertilizers.
   *
   * @return the all fertilizers
   */
  @GetMapping
  @Secured("ADMIN")
  public ResponseEntity<List<FertilizerDto>> getAllFertilizers() {
    List<Fertilizer> fertilizers = fertilizerService.getAllFertilizers();
    List<FertilizerDto> fertilizerDtos = fertilizers.stream()
        .map(fertilizer -> new FertilizerDto(
            fertilizer.getId(),
            fertilizer.getName(),
            fertilizer.getBrand(),
            fertilizer.getComposition()
        ))
        .collect(Collectors.toList());
    return ResponseEntity.ok(fertilizerDtos);
  }

  /**
   * Gets fertilizer by id.
   *
   * @param id the id
   * @return the fertilizer by id
   */
  @GetMapping("/{id}")
  public ResponseEntity<?> getFertilizerById(@PathVariable Long id) {
    Optional<Fertilizer> optionalFertilizer = fertilizerService.getFertilizerById(id);

    if (optionalFertilizer.isEmpty()) {
      return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Fertilizante não encontrado!");
    }

    Fertilizer fertilizer = optionalFertilizer.get();
    FertilizerDto fertilizerDto = new FertilizerDto(
        fertilizer.getId(),
        fertilizer.getName(),
        fertilizer.getBrand(),
        fertilizer.getComposition());
    return ResponseEntity.status(HttpStatus.OK).body(fertilizerDto);
  }
}
