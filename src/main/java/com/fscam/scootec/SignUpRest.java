package com.fscam.scootec;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SignUpRest {
    @PostMapping("sign-up")
    public void createAccount(@RequestBody Account account) {
        System.out.println(account.getVorname());
    }
}