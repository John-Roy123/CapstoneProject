package com.capstone.john.Game;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.sql.Date;

@Entity
public class game_result {
    @Id
    private Long id;
    private String accountUsername;
    //private Leaderboard leaderboard;
    private Date date;
    private int score;

    public game_result() {}
    public game_result(String accountUsername, Date date, int score) {
        this.accountUsername = accountUsername;
        this.date = date;
        this.score = score;
    }

    public void setDate(Date date) {
        this.date = date;
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
    public Date getDate() {
        return date;
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
