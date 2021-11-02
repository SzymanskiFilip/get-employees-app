import {useState} from 'react';

const AddNewForm = () => {

    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [age, setAge] = useState(0);
    const [profession, setProfession] = useState("");
    const [employmentStatus, setEmploymentStatus] = useState(false);

    const handleSubmit = () =>{
        const newEmployee = {
            first_name: name,
            last_name: lastName,
            age: parseInt(age),
            profession: profession,
            status: employmentStatus
        }
        fetch("api/v1/employee", {
            
        });
    }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
            }
            }>
            <label>Name:</label>
            <input required type="text" name="name"
                   onChange={(e) => setName(e.target.value)}/>
            <label>Last Name:</label>
            <input required type="text" name="last_name"
                   onChange={(e) => setLastName(e.target.value)}/>
            <label>Age:</label>
            <input required type="number" name="age"
                    onChange={(e) => setAge(e.target.value)}/>
            <label>Profession:</label>
            <input required type="text" name="profession"
                   onChange={(e) => setProfession(e.target.value)}/>
            <label>Employment Status:</label>
            <input required type="checkbox" id="bigger-checkbox" name="employment_status"
                   onChange={(e) => setEmploymentStatus(e.target.checked)}/>
            <button type="submit">Submit</button>
        </form>
    );
}

export default AddNewForm;