package com.futureB.backend.controller;

import com.futureB.backend.Entity.ConfirmationToken;
import com.futureB.backend.Entity.User;
import com.futureB.backend.Service.EmailService;
import com.futureB.backend.dto.UserDto;
import com.futureB.backend.repository.ConfirmationTokenRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.futureB.backend.Service.UserService;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequiredArgsConstructor
public class AuthController {
    @Autowired
    private final UserService userService;
    @Autowired
    private final ModelMapper modelMapper;
    @Autowired
    private final ConfirmationTokenRepository confirmationTokenRepository;
    @Autowired
    private final EmailService emailService;



    // handler method to handle home page request
    @GetMapping("/index")
    public String home(){
        return "index";
    }

    // handler method to handle login request
    @GetMapping("/login")
    public String login(){
        return "login";
    }

    // handler method to handle user registration form request
    @GetMapping("/register")
    public String showRegistrationForm(Model model){
        // create model object to store form data
        UserDto user = new UserDto();
        model.addAttribute("user", user);
        return "register";
    }

    // handler method to handle user registration form submit request
    @PostMapping("/register/save")
    public String registration(@Valid @ModelAttribute("user") UserDto userDto,
                               BindingResult result,
                               Model model){
        User existingUser = userService.findUserByEmail(userDto.getEmail());

        if(existingUser != null && existingUser.getEmail() != null && !existingUser.getEmail().isEmpty()){
            result.rejectValue("email", null,
                    "There is already an account registered with the same email");
        }

        if(result.hasErrors()){
            model.addAttribute("user", userDto);
            return "/register";
        }

        userService.saveUser(userDto);

        User userInDB = userService.findUserByEmail(userDto.getEmail());

        ConfirmationToken confirmationToken = new ConfirmationToken(userInDB);
        confirmationTokenRepository.save(confirmationToken);
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(userDto.getEmail());
        simpleMailMessage.setSubject("Complete Registration");
        simpleMailMessage.setFrom("futurebproject@gmail.com");
        simpleMailMessage.setText("To confirm your account, please click here : "
                +"http://localhost:8080/confirm-account?token="+confirmationToken.getConfirmationToken());

        emailService.sendEmail(simpleMailMessage);



        return "redirect:/register?success";
    }

    @GetMapping("/confirm-account")
    public String activateAccount(@RequestParam(name = "token") String token){
        ConfirmationToken confirmationToken = confirmationTokenRepository.findConfirmationTokenByConfirmationToken(token);
        if(confirmationToken != null){
            User user = userService.findUserByEmail(confirmationToken.getUser().getEmail());
            user.setEnabled(true);
            userService.saveUser(user);
            return "You may try to login now";
        }
        else return "Not authorized";
    }

    // handler method to handle list of users
    @GetMapping("/users")
    public String users(Model model){
        List<UserDto> users = userService.findAllUsers();
        model.addAttribute("users", users);
        return "users";
    }


}