package com.futureB.backend.service;

import com.futureB.backend.Service.EmailService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;


@ExtendWith(MockitoExtension.class)
public class EmailServiceTest {
    @Mock
    private JavaMailSender javaMailSender;
    @InjectMocks
    private EmailService emailService;

    @Test
    public  void sendEmail_verify(){
//      arranage
        String toEmail = "abc@gmail.com";
        String fromEmail = "futurebproject@gmail.com";
        String subject = "Test Subject";
        String body = "Test Body";

//        act
        emailService.sendEmail(toEmail, fromEmail, subject, body);
        SimpleMailMessage expectedMessage = new SimpleMailMessage();
        expectedMessage.setTo(toEmail);
        expectedMessage.setFrom(fromEmail);
        expectedMessage.setSubject(subject);
        expectedMessage.setText(body);

        // assert
        Mockito.verify(
                        javaMailSender,
                        Mockito.times(1))
                .send(expectedMessage);
    }
}
