package com.fscam.scootec;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpRest {
    @PostMapping("sign-up")
    public void createAccount(Account account) {

    }
}