import {useState, useEffect} from "react";
import Result from './Result.js';
import AddNewForm from './AddNewForm.js';
const Filter = () => {

    const [professions, setProfessions] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [chosenProfession, setChosenProfession] = useState("All");
    const [status, setStatus] = useState(true);
    const [addFormToggle, setAddFormToggle] = useState(true);


    async function requestEmployees(){
        const res = await fetch("/api/v1/allEmployees");
        const json = await res.json();
        console.log(json)
        setEmployees(json);
    }

    async function requestProfessions(){
        const res = await fetch("api/v1/professions");
        const json = await res.json();
        setProfessions(json);
    }

    async function requestByProfession(){
        if(chosenProfession === "All"){
            requestEmployees();
        }
        const res = await fetch("/api/v1/employee?profession="+chosenProfession+"&status="+status);
        const json = await res.json();
        console.log(json);
        setEmployees(json);
    }

    function handleSelection(e){
        console.log(e.target.value);
        setChosenProfession(e.target.value);
    }

    function handleStatusSelect(e){
        let checked = !e.target.checked;
        console.log(status);
        setStatus(checked);
    }

    function handleFormToggle(){
        if(addFormToggle === false){
            setAddFormToggle(true);
        } else{
            setAddFormToggle(false);
        }
        console.log(addFormToggle);
    }

    useEffect(()=>{
        requestEmployees();
        requestProfessions();
    }, []);

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestByProfession();
            }}>
                <label className="form-child">
                    Profession
                </label>
                <select className="form-child"
                        onChange={handleSelection}
                        onBlur={handleSelection}>
                    <option defaultValue>All</option>
                    {
                        professions.map((p) =>(
                            <option value={p} key={professions.indexOf(p)}
                            >{p}</option>
                        ))
                    }
                </select>

                <label className="form-child">
                    Looking for a job:
                </label>
                {
                    chosenProfession !== "All" ? <input type="checkbox" value="status" className="form-child"
                    onChange={handleStatusSelect}/> : <p></p>
                }

                <button className="form-child">Search!</button>
                <h5 className="add-text" onClick={handleFormToggle}>Or add new Employees!</h5>

                <AddNewForm />

            </form>

            <div className="employees-wrapper">
                {
                    employees.length === 0 ? <h1>No results found</h1> :
                    <Result employees={employees}/>
                }
            </div>

        </div>
    )

}

export default Filter;