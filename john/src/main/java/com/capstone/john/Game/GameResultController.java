package com.capstone.john.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameResultController {

    @Autowired
    private GameResultRepository gameResultRepository;

    @PostMapping("/postGame")
    public game_result addGame(@RequestBody game_result gameResult) {
        return gameResultRepository.save(gameResult);
    }

    @GetMapping("/getGame/{gameid}")
    public game_result getGame(@RequestBody game_result gameResult, @PathVariable long gameid) {
        return gameResultRepository.findGameById(gameid);
    }
    @GetMapping("/getLeaderboard")
    public List<game_result> getLeaderboard() {
        return gameResultRepository.findTop10ByOrderByScoreDesc();
    }
    @GetMapping("/topScore/{username}")
    public int getTopScore(@PathVariable String username){

        if(gameResultRepository.findTopByAccountUsernameOrderByScoreDesc(username).isPresent()){
            return gameResultRepository.findTopByAccountUsernameOrderByScoreDesc(username).get().getScore();
        }
        else{
            return -1;
        }
    }
    @GetMapping("/averageScore/{username}")
    public Double getAverageScore(@PathVariable String username){
        Double avgScore = gameResultRepository.findAvgScoreByAccountUsername(username);
        return avgScore;
    }
}
