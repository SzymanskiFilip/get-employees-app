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
                <label className="form-child">
                    Profession
                </label>
                <select className="form-child">
                    <option value="" defaultValue disabled hidden>Choose Profession</option>
                    {
                        professions.map((p) =>(
                            <option>{p}</option>
                        ))
                    }
                </select>

                <label className="form-child">
                    Already Hired
                </label>
                <input type="checkbox" value="status" className="form-child"/>
                <button className="form-child">Search!</button>
            </form>

            <div className="employees-wrapper">
                {
                    employees.map((empl) => (
                        <Employee firstName={empl.first_name} lastName={empl.last_name}
                                  age={empl.age} profession={empl.profession} status={empl.status}
                                  key={empl.id}
                        />
                    ))
                }
            </div>
            //TODO: Fix css

        </div>
    )

}

export default Filter;