package com.betrybe.agrix.ebytr.staff.models.entity.repository;

import com.betrybe.agrix.ebytr.staff.models.entity.Crop;
import com.betrybe.agrix.ebytr.staff.models.entity.Farm;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * The interface Crop repository.
 */
@Repository
public interface CropRepository extends JpaRepository<Crop, Integer> {

  List<Crop> findByFarm(Farm farm);

  @Query
  List<Crop> findByHarvestDateBetween(LocalDate start, LocalDate end);
}