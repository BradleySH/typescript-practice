import java.util.Scanner;

public class ReturnStringArray {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);

    System.out.println("How many chores?");
    int num = scan.nextInt();
    scan.nextLine();
    String[] chores = new String[num];

    for (int i = 0; i < chores.length; i++) {
      try {
        System.out.println("What are your Chores?");
        chores[i] = scan.nextLine();
      } catch (Exception e) {
        System.out.println("failure");
      }
    }
    scan.close();
    System.out.println("Your list of chores: ");
    choresArray(chores);
  }

  public static void choresArray(String[] chores) {
    String delimiter = ",";

    for (int i = 0; i < chores.length; i++) {
      System.out.println(chores[i] + delimiter);
    }
  }
}

// TODO:
// 1) The method should accept as input a comma-delimited string with three
// values
// from a user.
// 2) The array should store each value in a different element.
// 3) Use Try..Catch error handling and print any failure messages, or print
// success from within method if execution is successful
// 4) Call the method from the main method of the program to demonstrate its
// functionality by looping through the array and printing the individual
// values.