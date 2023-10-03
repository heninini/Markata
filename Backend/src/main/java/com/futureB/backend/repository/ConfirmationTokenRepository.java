package com.futureB.backend.repository;

import com.futureB.backend.Entity.ConfirmationToken;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationTokenRepository extends JpaRepository<ConfirmationToken, Integer> {
    ConfirmationToken findConfirmationTokenByConfirmationToken(String confirmationToken);
}
