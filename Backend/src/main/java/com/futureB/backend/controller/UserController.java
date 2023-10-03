package com.futureB.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.futureB.backend.Entity.User;
import com.futureB.backend.repository.UserRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	// get all Users
	@GetMapping("/Users")
	public List<User> getAllUsers(){
		return userRepository.findAll();
	}

	// create User rest api
// send the Json in this form
//	{
//		"firstName": "asdfasdfas",
//			"lastName": "mm",
//			"emailId": "amir@gmail.com",
//			"password": "123123123",
//			"year" : "1",
//			"month" : "2",
//			"date" : "1"
//	}

	@PostMapping("/users")
	public ResponseEntity<String> createUser(@RequestBody User user) {
		// log
		//System.out.println("\n" + User + "\n");
		System.out.println(userRepository.findByEmailId(user.getEmailId()) + "\n");
		if(userRepository.findByEmailId(user.getEmailId())==null){
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			userRepository.save(user);
			return ResponseEntity.ok("Successful registration");
		}
		return ResponseEntity.status(409).body("User Already Exist. FirstName:" + user.getFirstName());

	}
	
	// get User by id rest api
//	@GetMapping("/Users/{emailid}")
//	public ResponseEntity<User> getUserByEmailId(@PathVariable String emailId) {
//		User user = userRepository.findByEmailId(emailId).orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + emailId));
////				orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + emailId));
//		return ResponseEntity.ok(user);
//	}
//
	// update User rest api
//	Not needed but here for future functionality
//	@PutMapping("/Users/{id}")
//	public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
//		User user = userRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
//
//		user.setFirstName(userDetails.getFirstName());
//		user.setLastName(userDetails.getLastName());
//		user.setEmailId(userDetails.getEmailId());
//
//		User updatedUser = userRepository.save(user);
//		return ResponseEntity.ok(updatedUser);
//	}
	
	// delete User rest api
	// not needed but here for future functionality
//	@DeleteMapping("/Users/{id}")
//	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
//		User user = userRepository.findById(id)
//				.orElseThrow(() -> new ResourceNotFoundException("User not exist with id :" + id));
//
//		userRepository.delete(user);
//		Map<String, Boolean> response = new HashMap<>();
//		response.put("deleted", Boolean.TRUE);
//		return ResponseEntity.ok(response);
//	}
	
	
}
