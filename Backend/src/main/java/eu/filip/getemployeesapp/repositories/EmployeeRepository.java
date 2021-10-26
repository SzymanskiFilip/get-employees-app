package eu.filip.getemployeesapp.repositories;

import eu.filip.getemployeesapp.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
