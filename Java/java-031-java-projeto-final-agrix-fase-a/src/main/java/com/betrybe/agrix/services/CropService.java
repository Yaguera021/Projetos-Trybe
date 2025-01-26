package com.betrybe.agrix.services;

import com.betrybe.agrix.models.entities.Crop;
import com.betrybe.agrix.models.entities.Farm;
import com.betrybe.agrix.models.repositories.CropRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * The type Crop service.
 */
@Service
public class CropService {
  private final CropRepository cropRepository;

  @Autowired
  public CropService(CropRepository cropRepository) {
    this.cropRepository = cropRepository;
  }

  public Crop insertCrop(Farm farm, Crop crop) {
    crop.setFarm(farm);
    return cropRepository.save(crop);
  }

  public List<Crop> getCropsById(Farm farm) {
    return cropRepository.findByFarm(farm);
  }

  public List<Crop> getAllCrops() {
    return cropRepository.findAll();
  }

  public Optional<Crop> getCropById(Integer id) {
    return cropRepository.findById(id);
  }
}
