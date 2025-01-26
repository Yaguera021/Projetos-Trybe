package com.betrybe.museumfinder.solution;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.betrybe.museumfinder.database.MuseumFakeDatabase;
import com.betrybe.museumfinder.dto.CollectionTypeCount;
import com.betrybe.museumfinder.service.CollectionTypeService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

@SpringBootTest
@DisplayName("CollectionTypeService Tests")
public class CollectionTypeServiceTest {
  @MockBean
  MuseumFakeDatabase museumFakeDatabase;

  @Autowired
  CollectionTypeService collectionTypeService;


  @Test
  @DisplayName("Test countByCollectionTypes method")
  public void testCountByCollectionTypes() {
    Mockito.when(museumFakeDatabase.countByCollectionType("arqueologia")).thenReturn(600L);

    CollectionTypeCount result = collectionTypeService.countByCollectionTypes("arqueologia");

    assertEquals(1, result.collectionTypes().length);
    assertEquals(600L, result.count());

  }
}
