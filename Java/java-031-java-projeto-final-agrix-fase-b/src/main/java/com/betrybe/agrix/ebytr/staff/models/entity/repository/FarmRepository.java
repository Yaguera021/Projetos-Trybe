package com.betrybe.agrix.ebytr.staff.models.entity.repository;

import com.betrybe.agrix.ebytr.staff.models.entity.Farm;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * The interface Farm repository.
 */
public interface FarmRepository extends JpaRepository<Farm, Long> {

}
