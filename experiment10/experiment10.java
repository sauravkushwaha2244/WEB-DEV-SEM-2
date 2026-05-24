package experiment10;

abstract class BankAccount {
    // Encapsulation
    private int accountNumber;
    private String accountHolderName;
    private double balance;

    // Constructor
    BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    // Getters
    public int getAccountNumber() {
        return accountNumber;
    }

    public String getAccountHolderName() {
        return accountHolderName;
    }

    public double getBalance() {
        return balance;
    }

    // Setter
    public void setBalance(double balance) {
        this.balance = balance;
    }

    // Deposit Method
    public void deposit(double amount) {
        balance = balance + amount;
        System.out.println("Amount Deposited: " + amount);
    }

    // Display Details
    public void displayDetails() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : " + balance);
    }

    // Abstraction
    abstract void calculateInterest();
}

// Savings Account Class
class SavingsAccount extends BankAccount {
    SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.05;
        System.out.println("Savings Account Interest : " + interest);
    }
}

// Current Account Class
class CurrentAccount extends BankAccount {
    CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    void calculateInterest() {
        double interest = getBalance() * 0.02;
        System.out.println("Current Account Interest : " + interest);
    }
}

// Main Class
public class experiment10 {
    public static void main(String[] args) {
        // Savings Account Object
        SavingsAccount s1 = new SavingsAccount(101, "Saurav Kumar", 5000);

        s1.deposit(2000);

        System.out.println("\nSavings Account Details");
        s1.displayDetails();
        s1.calculateInterest();

        // Current Account Object
        CurrentAccount c1 = new CurrentAccount(201, "Rahul Sharma", 8000);

        c1.deposit(3000);

        System.out.println("\nCurrent Account Details");
        c1.displayDetails();
        c1.calculateInterest();
    }
}