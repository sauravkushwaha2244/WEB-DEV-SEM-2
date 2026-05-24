package com.example.experiment_12;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository repo;

    // Add Employee
    public Employee addEmployee(Employee emp) {
        return repo.save(emp);
    }

    // Get All Employees
    public List<Employee> getEmployees() {
        return repo.findAll();
    }

    // Get Employee By ID
    public Employee getEmployeeById(int id) {
        return repo.findById(id).orElse(null);
    }

    // Update Employee
    public Employee updateEmployee(Employee emp) {
        return repo.save(emp);
    }

    // Delete Employee
    public void deleteEmployee(int id) {
        repo.deleteById(id);
    }
}