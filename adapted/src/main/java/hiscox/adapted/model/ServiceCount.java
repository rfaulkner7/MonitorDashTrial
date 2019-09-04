package hiscox.adapted.model;

public class ServiceCount {

    public ServiceCount(String b, long a) {
        name = b;
        number = a;
    }
    public long getNumber() {
        return number;
    }

    public void setNumber(long number) {
        this.number = number;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    String name;
    long number;
}
