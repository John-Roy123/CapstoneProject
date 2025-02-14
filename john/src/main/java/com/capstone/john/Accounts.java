package com.capstone.john;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

@Entity
public class Accounts {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @jakarta.persistence.Id
    private Long id;
    private String username;
    private String password;
    private int topScore;
    private double averageScore;



    public Accounts(){}

    public Accounts(String username, String password, int topScore, double averageScore) {
        this.username = username;
        this.password = password;
        this.topScore = topScore;
        this.averageScore = averageScore;
    }

    public String getUsername() {
        return username;
    }
    public String getPassword() {
        return password;
    }
    public int getTopScore() {
        return topScore;
    }
    public double getAverageScore() {
        return averageScore;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    public void setTopScore(int topScore) {
        this.topScore = topScore;
    }
    public void setAverageScore(double averageScore) {
        this.averageScore = averageScore;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
