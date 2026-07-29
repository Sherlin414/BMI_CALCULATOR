public class BMI {
    public static void main(String[] args) {

        double weight = 70;
        double height = 1.75;

        double bmi = weight / (height * height);

        System.out.printf("BMI = %.2f\n", bmi);

        if (bmi < 18.5)
            System.out.println("Underweight");
        else if (bmi < 25)
            System.out.println("Normal Weight");
        else if (bmi < 30)
            System.out.println("Overweight");
        else
            System.out.println("Obese");
    }
}
