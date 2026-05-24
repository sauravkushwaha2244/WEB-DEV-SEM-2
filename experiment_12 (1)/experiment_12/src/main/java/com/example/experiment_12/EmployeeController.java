package com.example.experiment_12;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService service;

    // POST
    @PostMapping("/employees")
    public Employee addEmployee(@RequestBody Employee emp) {
        return service.addEmployee(emp);
    }

    // GET ALL
    @GetMapping("/employees")
    public List<Employee> getEmployees() {
        return service.getEmployees();
    }

    // GET BY ID
    @GetMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable int id) {
        return service.getEmployeeById(id);
    }

    // UPDATE
    @PutMapping("/employees")
    public Employee updateEmployee(@RequestBody Employee emp) {
        return service.updateEmployee(emp);
    }

    // DELETE
    @DeleteMapping("/employees/{id}")
    public String deleteEmployee(@PathVariable int id) {
        service.deleteEmployee(id);
        return "Employee Deleted Successfully";
    }
}