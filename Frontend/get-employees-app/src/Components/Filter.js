import {useState, useEffect} from "react";
import Employee from './Employee.js';
const Filter = () => {

    const [professions, setProfessions] = useState([]);
    const [employees, setEmployees] = useState([]);



    async function requestEmployees(){
        const res = await fetch("/api/v1/allEmployees");
        const json = await res.json();
        setEmployees(json);
        console.log(json);
    }

    async function requestProfessions(){
        const res = await fetch("api/v1/professions");
        const json = await res.json();
        setProfessions(json);
        console.log(json);
    }

    useEffect(()=>{
        requestEmployees();
        requestProfessions();
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
                    <option value="" defaultValue disabled>Choose Profession</option>
                    {
                        professions.map((p) =>(
                            <option value={p} key={professions.indexOf(p)}>{p}</option>
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

        </div>
    )

}

export default Filter;