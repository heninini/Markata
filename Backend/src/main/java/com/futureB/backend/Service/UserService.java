package com.futureB.backend.Service;

import com.futureB.backend.Entity.User;
import com.futureB.backend.dto.UserDto;

import java.util.List;


public interface UserService {
    void saveUser(UserDto userDto);
    User saveUser(User user);

    User findUserByEmail(String email);

    List<UserDto> findAllUsers();
}
