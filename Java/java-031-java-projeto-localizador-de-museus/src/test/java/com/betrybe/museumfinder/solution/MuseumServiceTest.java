package com.betrybe.museumfinder.solution;

import com.betrybe.museumfinder.database.MuseumFakeDatabase;
import com.betrybe.museumfinder.exception.InvalidCoordinateException;
import com.betrybe.museumfinder.exception.MuseumNotFoundException;
import com.betrybe.museumfinder.model.Coordinate;
import com.betrybe.museumfinder.model.Museum;
import com.betrybe.museumfinder.service.MuseumService;
import com.betrybe.museumfinder.util.CoordinateUtil;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

public class MuseumServiceTest {

  @Mock
  private MuseumFakeDatabase museumFakeDatabase;

  @InjectMocks
  private MuseumService museumService;

  @BeforeEach
  void setUp() {
    MockitoAnnotations.openMocks(this);
  }

  @Test
  @DisplayName("Test getClosestMuseum with valid coordinate")
  void testGetClosestMuseumWithValidCoordinate() {
    Coordinate coordinate = new Coordinate(1.0, 2.0);
    Double maxDistance = 10.0;
    Museum museum = new Museum();

    when(museumFakeDatabase.getClosestMuseum(coordinate, maxDistance))
        .thenReturn(Optional.of(museum));

    Museum result = museumService.getClosestMuseum(coordinate, maxDistance);

  }

  @Test
  @DisplayName("Test getClosestMuseum with invalid coordinate")
  void testGetClosestMuseumWithInvalidCoordinate() {
    Coordinate coordinate = new Coordinate(1000.0, 2000.0);
    Double maxDistance = 10.0;

    assertThrows(InvalidCoordinateException.class,
        () -> museumService.getClosestMuseum(coordinate, maxDistance));
  }

}
