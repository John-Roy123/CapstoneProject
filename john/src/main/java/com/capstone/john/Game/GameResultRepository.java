package com.capstone.john.Game;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameResultRepository extends CrudRepository<game_result, Long> {
    public game_result findByGameId(long gameId);
    public List<game_result> getAllGames(String gameName);
    public void deleteGamesByUser(String userName);
}
