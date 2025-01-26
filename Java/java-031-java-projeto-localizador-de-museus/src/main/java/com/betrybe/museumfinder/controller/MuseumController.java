package com.betrybe.museumfinder.controller;

import com.betrybe.museumfinder.model.Coordinate;
import com.betrybe.museumfinder.model.Museum;
import com.betrybe.museumfinder.service.MuseumServiceInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * The type Museum controller.
 */
@RestController
@RequestMapping("/museums")
public class MuseumController {
  private final MuseumServiceInterface museumService;

  /**
   * Instantiates a new Museum controller.
   *
   * @param museumService the museum service
   */
  @Autowired
  public MuseumController(MuseumServiceInterface museumService) {
    this.museumService = museumService;
  }

  /**
   * Gets closest museum.
   *
   * @param latitude    the latitude
   * @param longitude   the longitude
   * @param maxDistance the max distance
   * @return the closest museum
   */
  @GetMapping("/closest")
  public ResponseEntity<Museum> getClosestMuseum(
      @RequestParam("lat") Double latitude,
      @RequestParam("lng") Double longitude,
      @RequestParam("max_dist_km") Double maxDistance) {

    Coordinate coordinate = new Coordinate(latitude, longitude);
    Museum closestMuseumDto = museumService.getClosestMuseum(coordinate, maxDistance);
    return ResponseEntity.status(HttpStatus.OK).body(closestMuseumDto);
  }

  @PostMapping
  public ResponseEntity<Museum> createMuseum(@RequestBody Museum museumDto) {
    Museum createMuseum = museumService.createMuseum(museumDto);
    return ResponseEntity.status(HttpStatus.CREATED).body(createMuseum);
  }
}
