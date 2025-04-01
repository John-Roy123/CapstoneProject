package com.capstone.john.accounts;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    //Saves a new account into the database
    @PostMapping("/newAccount")
    public ResponseEntity<Map<String, String>> registerUser(@RequestBody Accounts account) {
        Map<String, String> response = new HashMap<>();
        if(accountRepository.findByUsername(account.getUsername()) == null) {
            Accounts newAcc = new Accounts();
            newAcc.setUsername(account.getUsername());
            newAcc.setPassword(passwordEncoder.encode(account.getPassword()));
            newAcc.setRole("ROLE_USER");
            accountRepository.save(newAcc);
            response.put("status", "success");
            response.put("message", "Account created");
            return ResponseEntity.ok(response);
        }
        response.put("status", "error");
        response.put("message", "Username already exists");
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }
    //Returns all accounts listed in database
    @GetMapping("/users")
    public List<Accounts> getAllAccounts(){
        return accountRepository.findAll();
    }
    //Returns the account for a given username
    @GetMapping("/users/{username}")
    public Accounts getAccount(@PathVariable String username) {
        return accountRepository.findByUsername(username);
    }
    //Returns the password of a given account
    @GetMapping("/users/{username}/password")
    public String getAccountPassword(@PathVariable String username) {
        return accountRepository.findByUsername(username).getPassword();
    }
    //Returns a boolean determining whether a given user exists
    @GetMapping("/users/{username}/exists")
    public ResponseEntity<Boolean> existsAccount(@PathVariable String username) {
        boolean toReturn = accountRepository.findByUsername(username) != null;
        return ResponseEntity.ok(toReturn);
    }

    //Posts a new top score to an Accounts db table
    @PutMapping ("/topScore/{username}/{score}")
    public int putTopScore(@PathVariable String username, @PathVariable String score){
        int newScore = Integer.parseInt(score);
        accountRepository.findByUsername(username).setTopScore(newScore);
        accountRepository.save(accountRepository.findByUsername(username));
        return newScore;
    }




}
