import {useState, useEffect} from "react";
import Result from './Result.js';
const Filter = () => {

    const [professions, setProfessions] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [chosenProfession, setChosenProfession] = useState("All");


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
        if(chosenProfession === 'All'){
            requestEmployees();
        }
        const res = await fetch("/api/v1/employee?profession="+chosenProfession);
        const json = await res.json();
        console.log(json);
        setEmployees(json);
    }


    function handleSelection(e){
        console.log(e.target.value);
        setChosenProfession(e.target.value);
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
                    Already Hired
                </label>
                <input type="checkbox" value="status" className="form-child"/>
                <button className="form-child">Search!</button>
            </form>

            <div className="employees-wrapper">
                {
                    <Result employees={employees}/>
                }
            </div>

        </div>
    )

}

export default Filter;