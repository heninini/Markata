package com.futureB.backend.Service;

import com.futureB.backend.Entity.User;
import com.futureB.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    public User activateUser(User user) {
        User userInDB = userRepository.findByEmailId(user.getEmailId());
        userInDB.setEnabled(true);
        //TODO delete the activation token entry after successful activation
        return userRepository.save(userInDB);
    }
}
