
public class Main {
    public static void main(String[] args) {
        new Person("小明");
        System.out.println(Person.getCount());
        new Person("小红");
        System.out.println(Person.getCount());
        new Person("小军");
        System.out.println(Person.getCount());
    }
}

class Person {
    public String name;
    public static int count;

    public Person(String name) {
        this.name = name;
        count++;
    }

    public static int getCount() {
        return count;
    }
}