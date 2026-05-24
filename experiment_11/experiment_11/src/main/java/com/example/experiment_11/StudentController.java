package com.example.experiment_11;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(101, "Saurav Kumar", "CSE");
    }

    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }
}