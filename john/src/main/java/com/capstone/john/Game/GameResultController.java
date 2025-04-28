package com.capstone.john.Game;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class GameResultController {

    @Autowired
    private GameResultRepository gameResultRepository;
    //Posts new game to the database
    @PostMapping("/postGame")
    public game_result addGame(@RequestBody game_result gameResult) {
        return gameResultRepository.save(gameResult);
    }
    //Gets game by gameid
    @GetMapping("/getGame/{gameid}")
    public game_result getGame(@RequestBody game_result gameResult, @PathVariable long gameid) {
        return gameResultRepository.findGameById(gameid);
    }
    //Gets the top 10 games from the database -- equivalent to the query
    //SELECT * FROM game_result ORDER BY score desc LIMIT 10;
    @GetMapping("/getLeaderboard")
    public List<game_result> getLeaderboard() {
        return gameResultRepository.findTop10ByOrderByScoreDesc();
    }
    //Returns the largest score associated with a user in the database, defaults 0
    @GetMapping("/topScore/{username}")
    public int getTopScore(@PathVariable String username){

        if(gameResultRepository.findTopByAccountUsernameOrderByScoreDesc(username).isPresent()){
            return gameResultRepository.findTopByAccountUsernameOrderByScoreDesc(username).get().getScore();
        }
        else{
            return 0;
        }
    }
    //Returns the average of all scores associated with a user in the database
    @GetMapping("/averageScore/{username}")
    public Double getAverageScore(@PathVariable String username){
        Double avgScore = gameResultRepository.findAvgScoreByAccountUsername(username);
        return avgScore;
    }

    //Returns the different leaderboards depending on the tab selected by the user
    //Each gameResultRepository method is associated with its own SQL query
    @GetMapping("/getLeaderboard/add")
    public List<game_result> getLeaderboardAdd(){
        return gameResultRepository.getAddGameLeaderboard();
    }
    @GetMapping("getLeaderboard/mult")
    public List<game_result> getLeaderboardMult(){
        return gameResultRepository.getMultGameLeaderboard();
    }
    @GetMapping("getLeaderboard/divide")
    public List<game_result> getLeaderboardDivide(){
        return gameResultRepository.getDivideGameLeaderboard();
    }
    @GetMapping("getLeaderboard/sub")
    public List<game_result> getLeaderboardSub(){
        return gameResultRepository.getSubGameLeaderboard();
    }

}
