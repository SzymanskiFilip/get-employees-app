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

    @GetMapping("employee")
    String employeesOf(@RequestParam String profession){
        return "profession: " + profession;
        //this is working, employee is the endpoint and the request param is /employee?profession=x
        //TODO: Implement in the Employees controller with the custom query
    }
}
