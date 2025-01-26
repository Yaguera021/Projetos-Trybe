package com.betrybe.agrix.service;

import com.betrybe.agrix.models.entity.Crop;
import com.betrybe.agrix.models.entity.Farm;
import com.betrybe.agrix.models.repository.CropRepository;
import java.time.LocalDate;
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

  /**
   * Insert crop.
   *
   * @param farm        the farm
   * @param crop        the crop
   * @param plantedDate the planted date
   * @param harvestDate the harvest date
   * @return the crop
   */
  public Crop insertCrop(Farm farm, Crop crop, LocalDate plantedDate, LocalDate harvestDate) {
    crop.setFarm(farm);
    crop.setPlantedDate(plantedDate);
    crop.setHarvestDate(harvestDate);
    return cropRepository.save(crop);
  }

  public List<Crop> getCropsById(Farm farm) {
    return cropRepository.findByFarm(farm);
  }

  public Optional<Crop> getCropById(Long id) {
    return cropRepository.findById(id);
  }

  public List<Crop> getAllCrops() {
    return cropRepository.findAll();
  }

  public List<Crop> findByHarvestDateBetween(LocalDate start, LocalDate end) {
    return cropRepository.findByHarvestDateBetween(start, end);
  }
}