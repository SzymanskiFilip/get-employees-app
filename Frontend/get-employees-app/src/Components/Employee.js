const Employee = (props) => {
    return(
      <div>
          <h1>{props.firstName} {props.lastName}, {props.age}</h1>
          <h3>{props.profession}</h3>
          <h3>
              {props.status ? 'Already Hired' : 'looking for a job'}
          </h3>
      </div>
    );
}

export default Employee;