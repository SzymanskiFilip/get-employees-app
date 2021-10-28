const Employee = (props) => {
    return(
      <div>
          <h3>{props.firstName} {props.lastName}, {props.age}</h3>
          <h1>{props.profession}</h1>
          <h3>
              {props.status ? 'Already Hired' : 'looking for a job'}
          </h3>
      </div>
    );
}

export default Employee;