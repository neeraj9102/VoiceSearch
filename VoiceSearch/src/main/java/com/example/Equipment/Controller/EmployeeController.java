package com.example.Equipment.Controller;

import com.example.Equipment.Model.Employee;
import com.example.Equipment.Service.EmployeeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")  // Allow all origins

//@CrossOrigin(origins = "http://localhost:8084")  // Allow communication from frontend
@RequestMapping("/api/employees")
public class EmployeeController {


    private EmployeeService employeeService;
    public EmployeeController(EmployeeService employeeService){
        this.employeeService=employeeService;
    }

    @GetMapping("/search")
    public List<Employee> searchEmployee(@RequestParam String name) {
        List<Employee> employees = employeeService.searchEmployeeByName(name);
        return employees;

    }

}
