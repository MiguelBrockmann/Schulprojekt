import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;
import java.sql.*;
import java.sql.DriverManager;


public class App {
    private final static double price = 0.67;

    public static void main(String[] args){


        Scanner sc = new Scanner(System.in);
        System.out.println("enter your startpoint and your endpoint in km pls");
        System.out.println("startpoint");
        double strecke1= sc.nextDouble();
        System.out.println("endpoint");
        double strecke2= sc.nextDouble();
        double preis = streckenBerechnung(strecke1,strecke2);


        System.out.println("the cost will be" + " " + preis + " $");

        try {

            Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/schule","miggione1","Kaktus06!");
            Statement myStmt = myConn.createStatement();
            String sql ="insert into employees " + "(Lastname, firstname)" + " values ('Brown', 'Daivid')";
            myStmt.executeUpdate(sql);
            System.out.println("insert complete");
            /*Statement myStmt = myConn.createStatement();
            ResultSet myRs = myStmt.executeQuery("select * from employees");
            while (myRs.next()){
                System.out.println(myRs.getString("Lastname"));
            }*/
        } catch (Exception exc){
            exc.printStackTrace();
        }
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
    }//statt sowas switch mit hamburg , eppendowrf usw "1"
}

//switch(ort) {
  //  case 1: eppendorf m();
    //case 2: st pauli_
      //  }


//json erstellen für aike 