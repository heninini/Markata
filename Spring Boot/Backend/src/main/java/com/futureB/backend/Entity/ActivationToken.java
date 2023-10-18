package com.futureB.backend.Entity;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.UUID;

@Entity
@Table(name = "ActivationToken")
public class ActivationToken {
    @Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String confirmationToken;

    private LocalDate createdDate;

    @OneToOne
    private User user;

    public ActivationToken(User user) {
        this.confirmationToken = UUID.randomUUID().toString();
        this.createdDate = LocalDate.now();
        this.user = user;
    }

    public ActivationToken() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getConfirmationToken() {
        return confirmationToken;
    }

    public void setConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}