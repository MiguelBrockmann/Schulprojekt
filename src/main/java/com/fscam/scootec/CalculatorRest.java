package com.fscam.scootec;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorRest {
    @GetMapping("calculate")
    public Price calculate(@RequestParam("distance") int distance) {
        Price price = new Price();
        price.setPrice(distance * 2);
        return price;
    }
}
