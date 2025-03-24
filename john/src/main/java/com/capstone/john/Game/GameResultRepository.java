package com.capstone.john.Game;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface GameResultRepository extends CrudRepository<game_result, Long> {
    game_result findGameById(Long id);
    List<game_result> findGameByAccountUsername(String username);
    public void deleteAllByAccountUsername(String userName);
    List<game_result> findTop10ByOrderByScoreDesc();
    Optional<game_result> findTopByAccountUsernameOrderByScoreDesc(String username);

    @Query("SELECT AVG(g.score) FROM game_result g WHERE g.accountUsername = :username")
    Double findAvgScoreByAccountUsername(@Param("username") String username);
}
