import {useState, useEffect} from "react";
const Filter = () => {

    let professions = ["Ui", "FD", "BD"];

    return(
        <div>
            <form>
                <label>
                    Profession
                </label>
                <select>

                    <option>Volvo</option>
                    {
                        professions.map((prof) =>(
                            <option>{prof}</option>
                        ))
                    }
                </select>
            </form>
        </div>
    )

}

export default Filter;