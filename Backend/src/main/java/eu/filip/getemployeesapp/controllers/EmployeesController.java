package eu.filip.getemployeesapp.controllers;

import eu.filip.getemployeesapp.entities.Employee;
import eu.filip.getemployeesapp.repositories.EmployeeRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/")
public class EmployeesController {
    private final EmployeeRepository repository;
    public EmployeesController(EmployeeRepository repo){this.repository = repo;}

    @GetMapping("/allEmployees")
    List<Employee> allEmployees(){
        return repository.findAll();
    }

    @GetMapping("/employee")
    List<Employee> employeesOf(@PathVariable("profession") String profession){
        return repository.findByProfession(profession);
    }


}