package com.futureB.backend.repository;

import com.futureB.backend.Entity.ActivationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ActivationTokenRepo extends JpaRepository<ActivationToken, Integer> {
    ActivationToken findActivationTokenByConfirmationToken(String confirmationToken);

    void deleteAll();
}
