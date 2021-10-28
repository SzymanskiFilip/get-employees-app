import {useState, useEffect} from "react";
import Employee from './Employee.js';
const Filter = () => {

    let professions = ["UI Designer", "Frontend Developer", "Backend Developer"];

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
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
            <Employee firstName="Filip" lastName="ezzz" age={17} status={true}/>
        </div>
    )

}

export default Filter;