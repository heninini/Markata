package com.futureB.backend.Service;

import com.futureB.backend.Entity.ActivationToken;
import com.futureB.backend.Entity.User;
import com.futureB.backend.repository.ActivationTokenRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ActivationTokenService {
    private final ActivationTokenRepo activationTokenRepo;
    public ActivationToken createAndPersistActivationToken(User newRegisterdUser) {
        ActivationToken activationToken = new ActivationToken(newRegisterdUser);
        return activationTokenRepo.save(activationToken);
    }
}
