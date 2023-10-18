package com.futureB.backend.repository;

import com.futureB.backend.Entity.Terms;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TermsRepository extends JpaRepository<Terms, String> {
    Terms findById(Long id);
}
