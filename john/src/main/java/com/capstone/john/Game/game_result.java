package com.capstone.john.Game;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;

@Entity
public class game_result {
    @Getter
    @Setter
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Setter
    @Getter
    private String accountUsername;
    @Setter
    @Getter
    private Date gameDate;
    @Setter
    @Getter
    private int score;
    @Getter
    @Setter
    private String gameMode;

    public game_result() {

    }

    
    public game_result(String accountUsername, Date gameDate, int score, String gameMode) {
        this.accountUsername = accountUsername;
        this.gameDate = gameDate;
        this.score = score;
        this.gameMode = gameMode;
    }


}
