import {useState, useEffect} from "react";
import Employee from './Employee.js';
const Filter = () => {

    let professions = ["UI Designer", "Frontend Developer", "Backend Developer"];
    const [employees, setEmployees] = useState('');

    async function requestEmployees(){
        const res = await fetch("/api/v1/repoTest");
        const json = await res.json();
        setEmployees(json);
        console.log(employees);
    }

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
                    <option value="" selected disabled hidden>Choose Profession</option>
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
                employees.map((e) => (
                    <Employee firstName={e.first_name} lastName={e.last_name} age={e.age} profession={e.profession}/>
                ))
            }

        </div>
    )

}

export default Filter;