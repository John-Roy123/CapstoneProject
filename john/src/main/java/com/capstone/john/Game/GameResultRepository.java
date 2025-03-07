package com.capstone.john.Game;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GameResultRepository extends CrudRepository<game_result, Long> {
    game_result findGameById(Long id);
    List<game_result> findGameByAccountUsername(String username);
    public void deleteAllByAccountUsername(String userName);
    List<game_result> findTop10ByOrderByScoreDesc();
}
