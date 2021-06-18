package com.fscam.scootec;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorRest {
    @GetMapping("calculate")
    public int calculate(@RequestParam("distance") int distance) {
        return distance * 2;
    }
}
