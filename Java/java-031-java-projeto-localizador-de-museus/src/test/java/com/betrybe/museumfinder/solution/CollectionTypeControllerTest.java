package com.betrybe.museumfinder.solution;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.betrybe.museumfinder.dto.CollectionTypeCount;
import com.betrybe.museumfinder.model.Museum;
import com.betrybe.museumfinder.service.CollectionTypeService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
public class CollectionTypeControllerTest {

  @Autowired
  MockMvc mockMvc;

  @Test
  @DisplayName("Should return status 200 - ok")
   void statusOk() throws Exception {

    String url = "/collections/count/arqueologia";

    mockMvc.perform(get(url))
        .andExpect(status().isOk());
  }

  @Test
  @DisplayName("Test endpoint Get /museums/{id}")
   void getMethod() throws Exception {

    String url = "/collections/count/arqueologia";

    mockMvc.perform(get(url))
        .andExpect(status().isOk())
        .andExpect(jsonPath("$.collectionTypes").isArray())
        .andExpect(jsonPath("$.coala").doesNotExist());
    }

}
