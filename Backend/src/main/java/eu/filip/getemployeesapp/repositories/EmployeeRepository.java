package eu.filip.getemployeesapp.repositories;

import eu.filip.getemployeesapp.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value = "SELECT * FROM employees WHERE profession = ?1", nativeQuery = true)
    List<Employee> findByProfession(String profession);

}
