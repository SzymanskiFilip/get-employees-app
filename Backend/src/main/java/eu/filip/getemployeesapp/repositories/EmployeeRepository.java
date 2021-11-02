package eu.filip.getemployeesapp.repositories;

import eu.filip.getemployeesapp.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query(value = "SELECT * FROM employees WHERE profession = ?1", nativeQuery = true)
    List<Employee> findByProfession(String profession);

    @Query(value = "SELECT DISTINCT profession FROM employees", nativeQuery = true)
    List<String> findAllProfessions();

    @Query(value = "SELECT * FROM employees WHERE profession = ?1 AND status = ?2", nativeQuery = true)
    List<Employee> findByProfessionAndStatus(String profession, boolean status);

    @Query(value= "INSERT INTO employees (first_name, last_name, age, profession, status) VALUES (?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    Employee saveEmployee(String first_name, String last_name, int age, String profession, boolean status);
}
