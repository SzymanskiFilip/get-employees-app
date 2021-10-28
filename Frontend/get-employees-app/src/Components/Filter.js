import {useState, useEffect} from "react";
import Employee from './Employee.js';
const Filter = () => {

    let professions = ["UI Designer", "Frontend Developer", "Backend Developer"];

    async function requestEmployees(){
        const res = await fetch("/api/v1/repoTest");
        const json = await res.json();
        console.log(json);

        //TODO: Fix localhost API connection
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


        </div>
    )

}

export default Filter;