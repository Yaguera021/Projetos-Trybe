package com.betrybe.agrix.models.repository;

import com.betrybe.agrix.models.entity.Farm;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The interface Farm repository.
 */
public interface FarmRepository extends JpaRepository<Farm, Long> {

}
