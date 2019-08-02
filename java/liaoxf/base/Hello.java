import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
        // int n = 100;
        // int sum = (1 + n) * n / 2;
        // System.out.println(sum);
        // System.out.println(1.0 / 10);
        // System.out.println(1 - 9.0 / 10);
        // System.out.println((int) -12.7);
        // double d = 2.6;
        // System.out.println((int) (d + 0.5));
        // double a = 1.0;
        // double b = 3.0;
        // double c = -4.0;
        // double r1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        // double r2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        // System.out.println(r1);
        // System.out.println(r2);
        // int n1 = 'A';
        // int n2 = '中';
        // System.out.println(n1);
        // System.out.println(n2);
        // char c3 = '\u0041';
        // char c4 = '\u4e2d';
        // System.out.println(c3 + " " + c4);
        // int a = 72;
        // int b = 105;
        // int c = 65281;
        // String s = "" + (char) a + (char) b + (char) c;
        // System.out.println(s);
        // System.out.printf("%.2f\n", 3.121221);
        // int n = 12345000;
        // System.out.printf("n=%d, hex=%08x\n", n, n);
        // Scanner scanner = new Scanner(System.in);
        // System.out.print("prev score:");
        // float pScore = scanner.nextInt();
        // System.out.print("this score:");
        // float tScore = scanner.nextInt();
        // float f = (tScore - pScore) / pScore * 100;
        // System.out.printf("%.2f%%\n", f);
        // String s1 = "hello";
        // String s2 = "HELLO".toLowerCase();
        // System.out.printf("%s,%s\n", s1, s2);
        // System.out.println(s1 == s2);
        // System.out.println(s1.equals(s2));
        // int sum = 0;
        // int n = 0;
        // while (n <= 100) {
        // n++;
        // sum = sum + n;
        // }
        // System.out.println(sum);
        // int sum = 0;
        // int n = 20;
        // int m = 21;
        // while (n <= m) {
        // sum += n++;
        // }
        // System.out.println(sum);
        double pi = 0;
        int flag = 1;
        for (double i = 0; i < 10000000; i += 1) {
            pi = pi + 4 * (1 / (2 * i + 1) * flag);
            flag *= -1;
        }
        System.out.println(pi);
    }
}
