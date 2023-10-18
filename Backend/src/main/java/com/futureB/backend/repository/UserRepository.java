package com.futureB.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.futureB.backend.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{
        public User findByEmailId(String emailId);

//        public User findById(long Id);
//
//        public void deleteAll();
}
