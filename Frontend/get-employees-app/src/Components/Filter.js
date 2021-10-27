import {useState, useEffect} from "react";
const Filter = () => {

    let professions = ["UI Designer", "Frontend Developer", "Backend Developer"];

    return(
        <div>
            <form>
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
            </form>
        </div>
    )

}

export default Filter;