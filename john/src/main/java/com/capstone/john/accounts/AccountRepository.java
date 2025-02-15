package com.capstone.john.accounts;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Accounts, String> {
    Accounts findByUsername(String username);
    List<Accounts> findAll();
    void deleteByUsername(String username);

}
