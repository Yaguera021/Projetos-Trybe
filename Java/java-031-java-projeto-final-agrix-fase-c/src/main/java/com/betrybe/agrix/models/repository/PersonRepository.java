package com.betrybe.agrix.models.repository;

import com.betrybe.agrix.models.entity.Person;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Person JPA repository.
 */
@Repository
public interface PersonRepository extends JpaRepository<Person, Long> {

  Optional<Person> findByUsername(String username);
}
