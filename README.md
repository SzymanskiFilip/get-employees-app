## get-employees-app
frontend: `localhost:3000` <br/>
backend: `localhost:8080` <br/>

### Database
To run the app you have to create a SQL Database.
You can configure the db connection in application.properties or just create a Database
called `get-employees` with a table called `employees` with the following columns: <br/>
<br/>
`id` auto increment on <br/>
`first_name` text <br/>
`last_name` text <br/>
`age` int <br/>
`profession` text <br/>
`status` tinyint (boolean) <br/>
