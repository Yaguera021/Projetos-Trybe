package com.betrybe.agrix.ebytr.staff.models.entity.repository;

import com.betrybe.agrix.ebytr.staff.models.entity.Fertilizer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The interface Fertilizer repository.
 */
public interface FertilizerRepository extends JpaRepository<Fertilizer, Long> {

}
