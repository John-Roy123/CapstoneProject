package com.capstone.john.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @PostMapping("/newAccount")
    public Accounts createAccount(@RequestBody Accounts account) {
        return accountRepository.save(account);
    }

    @GetMapping("/users")
    public List<Accounts> getAllAccounts(){
        return accountRepository.findAll();
    }

    @GetMapping("/users/{username}")
    public Accounts getAccount(@PathVariable String username) {
        return accountRepository.findByUsername(username);
    }
    @GetMapping("/users/{username}/password")
    public String getAccountPassword(@PathVariable String username) {
        return accountRepository.findByUsername(username).getPassword();
    }
    @GetMapping("/users/{username}/exists")
    public ResponseEntity<Boolean> existsAccount(@PathVariable String username) {
        boolean toReturn = accountRepository.findByUsername(username) != null;
        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/topScore/{username}")
    public int getTopScore(@PathVariable String username){
        return accountRepository.findByUsername(username).getTopScore();
    }
    @PutMapping ("/topScore/{username}/{score}")
    public int putTopScore(@PathVariable String username, @PathVariable String score){
        int newScore = Integer.parseInt(score);
        accountRepository.findByUsername(username).setTopScore(newScore);
        accountRepository.save(accountRepository.findByUsername(username));
        return newScore;
    }
    @DeleteMapping("/wipeallusers")
    public String deleteAllUsers(){
        accountRepository.deleteAll();
        return "All users deleted";
    }



}
