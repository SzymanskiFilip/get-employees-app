package eu.filip.getemployeesapp.controllers;

import eu.filip.getemployeesapp.entities.Employee;
import eu.filip.getemployeesapp.repositories.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/test")
public class TestController {

    private final EmployeeRepository repository;
    public TestController(EmployeeRepository repo){
        this.repository = repo;
    }

    @GetMapping("/test")
    String test(){
        return "Hello API!";
    }

    @GetMapping("/repoTest")
    List<Employee> repoTest(){
        return repository.findAll();
    }

    @GetMapping("/employee")
    List<Employee> employeesOf(@RequestParam String profession){
        return repository.findByProfession(profession);
    }
}
