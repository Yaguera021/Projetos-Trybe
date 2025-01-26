package com.betrybe.agrix.service;

import com.betrybe.agrix.models.entity.Farm;
import com.betrybe.agrix.models.repository.FarmRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type Farm service.
 */
@Service
public class FarmService {
  private final FarmRepository farmRepository;

  @Autowired
  public FarmService(FarmRepository farmRepository) {
    this.farmRepository = farmRepository;
  }

  public Farm insertFarm(Farm farm) {
    return farmRepository.save(farm);
  }

  public List<Farm> getAllFarms() {
    return farmRepository.findAll();
  }

  public Optional<Farm> getFarmById(Long id) {
    return farmRepository.findById(id);
  }


}