package com.futureB.backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

import java.time.LocalDate;
import java.util.UUID;

@Entity
public class ConfirmationToken {
    @Id @GeneratedValue
    private int id;

    private String confirmationToken;

    private LocalDate createdDate;

    @OneToOne
    private User user;

    public ConfirmationToken(User user) {
        this.confirmationToken = UUID.randomUUID().toString();
        this.createdDate = LocalDate.now();
        this.user = user;
    }

    public ConfirmationToken() {
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
