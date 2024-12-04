package com.example.Equipment.Service;

import com.example.Equipment.Model.Employee;
import com.example.Equipment.Repository.EmployeeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {


    private EmployeeRepository employeeRepository;
    public EmployeeService(EmployeeRepository employeeRepository){
        this.employeeRepository=employeeRepository;
    }

    public List<Employee> searchEmployeeByName(String name) {
        return employeeRepository.findByNameContainingIgnoreCase(name);
    }

}
