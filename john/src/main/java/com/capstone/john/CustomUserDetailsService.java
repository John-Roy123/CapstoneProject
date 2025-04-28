package com.capstone.john;

import com.capstone.john.accounts.AccountRepository;
import com.capstone.john.accounts.Accounts;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class CustomUserDetailsService implements UserDetailsService {
    private final AccountRepository accountRepository;
    private final PasswordEncoder passwordEncoder;

    public CustomUserDetailsService(AccountRepository accountRepository, PasswordEncoder passwordEncoder) {
        this.accountRepository = accountRepository;
        this.passwordEncoder = passwordEncoder;
    }
//Returns a user based on the supplied username
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Accounts user = accountRepository.findByUsername(username);

        return new User(user.getUsername(), user.getPassword(), Collections.singletonList(() -> user.getRole()));
    }
}
