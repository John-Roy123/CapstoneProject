package com.capstone.john.Game;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.sql.Date;

@Entity
public class game_result {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String accountUsername;
    private Date gameDate;
    private int score;

    public game_result() {

    }

    
    public game_result(String accountUsername, Date gameDate, int score) {
        this.accountUsername = accountUsername;
        this.gameDate = gameDate;
        this.score = score;
    }


    public void setgameDate(Date gameDate) {
        this.gameDate = gameDate;
    }
    public void setScore(int score) {
        this.score = score;
    }
    public void setAccountUsername(String accountUsername) {
        this.accountUsername = accountUsername;
    }

    public String getAccountUsername() {
        return accountUsername;
    }
    public Date getgameDate() {
        return gameDate;
    }
    public int getScore() {
        return score;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
