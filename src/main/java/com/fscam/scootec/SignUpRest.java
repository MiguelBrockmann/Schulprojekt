package com.fscam.scootec;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpRest {
    private final AccountRepository accountRepository;

    public SignUpRest(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @PostMapping("sign-up")
    public void createAccount(@RequestBody Account account) {
        accountRepository.save(account);

        System.out.println(account.getVorname());
    }
}