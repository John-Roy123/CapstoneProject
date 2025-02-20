package com.capstone.john.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameResultController {

    @Autowired
    private GameResultRepository gameResultRepository;

    @PostMapping("/addgame")
    public game_result addGame(@RequestBody game_result gameResult) {
        return gameResultRepository.save(gameResult);
    }

}
