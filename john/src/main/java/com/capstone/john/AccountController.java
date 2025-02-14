package com.capstone.john;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/users")
    public Accounts createAccount(@RequestBody Accounts account) {
        return accountRepository.save(account);
    }

    @GetMapping("/users")
    public List<Accounts> getAllAccounts(){
        return accountRepository.findAll();
    }

    @GetMapping("/topScore/{username}")
    public int getTopScore(@PathVariable String username){
        return accountRepository.findByUsername(username).getTopScore();
    }
    @PutMapping("/topScore/{username}/{score}")
    public int putTopScore(@PathVariable String username, @PathVariable String score){
        int newScore = Integer.parseInt(score);
        accountRepository.findByUsername(username).setTopScore(newScore);
        return newScore;
    }

}
