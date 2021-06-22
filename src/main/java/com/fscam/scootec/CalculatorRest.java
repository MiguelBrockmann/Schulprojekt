package com.fscam.scootec;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorRest {
    @GetMapping("calculate")
    public Price calculate(@RequestParam("distance") double distance) {
        Price price = new Price();
        price.setPrice(streckenBerechnung(distance));
        return price;
    }


    /**
     * Methode zur Berechnung des Preises zwischen zwei Punkten.
     *
     * @param startpunkt1
     * @param startpunkt2
     */
    public static double streckenBerechnung(double distance) {

        return distance * 0.67;
    }//statt sowas switch mit hamburg , eppendorf usw "1"
}
