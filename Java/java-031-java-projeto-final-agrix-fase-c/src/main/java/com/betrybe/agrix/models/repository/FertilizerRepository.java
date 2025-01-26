package com.betrybe.agrix.models.repository;

import com.betrybe.agrix.models.entity.Fertilizer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The interface Fertilizer repository.
 */
public interface FertilizerRepository extends JpaRepository<Fertilizer, Long> {

}
