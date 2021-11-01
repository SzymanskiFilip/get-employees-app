import Employee from "./Employee";

const Result = ({employees}) => {
    return(
        employees.map((employees) => (
            <Employee firstName={employees.first_name} lastName={employees.last_name}
                      age={employees.age} profession={employees.profession} status={employees.status}
                      key={employees.id}
            />
        ))
    )
}

export default Result;