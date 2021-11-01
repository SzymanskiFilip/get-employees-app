## get-employees-app
frontend: `localhost:3000` <br/>
backend: `localhost:8080` <br/>

### Database
To run the app you have to create a SQL Database.
You can configure the db connection in application.properties or just create a Database
called `get-employees` with a table called `employees` with the following columns: 
`id` auto increment on
`first_name` text
`last_name` text
`age` int
`profession` text
`status` tinyint (boolean)
