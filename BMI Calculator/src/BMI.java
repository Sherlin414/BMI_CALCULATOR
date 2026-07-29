import java.util.Scanner;

public class BMI {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("===== BMI Calculator =====");

        System.out.print("Enter your weight (kg): ");
        double weight = sc.nextDouble();

        System.out.print("Enter your height (m): ");
        double height = sc.nextDouble();

        double bmi = weight / (height * height);

        System.out.printf("\nYour BMI is: %.2f\n", bmi);

        if (bmi < 18.5) {
            System.out.println("Category: Underweight");
        } else if (bmi >= 18.5 && bmi < 25) {
            System.out.println("Category: Normal Weight");
        } else if (bmi >= 25 && bmi < 30) {
            System.out.println("Category: Overweight");
        } else {
            System.out.println("Category: Obese");
        }

        sc.close();
    }
}