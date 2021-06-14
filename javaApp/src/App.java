import java.util.Scanner;

public class App {
    private final static double price = 0.67;

    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        System.out.println("enter your startpoint and your endpoint in km pls");
        System.out.println("startpoint");
        double strecke1= sc.nextDouble();
        System.out.println("endpoint");
        double strecke2= sc.nextDouble();
        double preis= streckenBerechnung(strecke1,strecke2);
        System.out.println("the cost will be" + " " + preis + " $");
    }

    /**
     * Methode zur Berechnung des Preises zwischen zwei Punkten.
     * @param startpunkt1
     * @param startpunkt2
     */
    public static double streckenBerechnung(double startpunkt1, double startpunkt2)   {
        double strecke = startpunkt1 + startpunkt2;
        double preis = strecke * price;
        return  preis;
    }
}


