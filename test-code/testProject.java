
import java.util.Scanner;

class Main {

  public static void main(String[] args) {
    getColors();
  }

  public static void getColors() {
    Scanner input = new Scanner(System.in);

    for (int i = 0; i < 3; i++) {

      try {
        System.out.println("Please enter a color: ");
        String colors = input.nextLine();
        System.out.println("Success!  Your colors were: " + colors);

      } catch (Exception e) {
        System.out.println("Failure");
      }

    }
    input.close();
  }

}

// The method should print the contents of the user input and return a string
// value to the calling method indicating "Success" or "Failure" based on the
// program flow through the try..catch error handling