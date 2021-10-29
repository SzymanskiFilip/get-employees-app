import {useState, useEffect} from "react";
import Employee from './Employee.js';
const Filter = () => {

    let professions = ["UI Designer", "Frontend Developer", "Backend Developer"];
    const [employees, setEmployees] = useState([]);

    async function requestEmployees(){
        const res = await fetch("/api/v1/repoTest");
        const json = await res.json();
        setEmployees(json);
        console.log(json);
    }

    useEffect(() => {
        requestEmployees();
    }, []);

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestEmployees();
            }}>
                <label>
                    Profession
                </label>
                <select>
                    <option value="" defaultValue disabled hidden>Choose Profession</option>
                    {
                        professions.map((p) =>(
                            <option>{p}</option>
                        ))
                    }
                </select>

                <br/>
                <label>
                    Already Hired
                </label>
                <input type="checkbox" value="status"/>
                <br/>
                <button>Search!</button>
            </form>

            {
                employees.map((empl) => (
                    <Employee firstName={empl.first_name} lastName={empl.last_name}
                              age={empl.age} profession={empl.profession} status={empl.status}
                              key={empl.id}
                    />
                ))
            }

        </div>
    )

}

export default Filter;