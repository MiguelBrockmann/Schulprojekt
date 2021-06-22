package com.fscam.scootec;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class SignUpRest {
    @PostMapping("createAccount")
    public void createAccount(Account account) {

    }
}