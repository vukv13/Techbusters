let database = [];

function handleFormSubmit(event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value;
    const lastName = document.getElementById("last_name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const disease = document.getElementById("disease").value;

    const newUser = {
        firstName,
        lastName,
        email,
        password,
        disease
    };

    database.push(newUser);

    displayDataInNewWindow();
}

function displayDataInNewWindow() {
    const newWindow = window.open("", "Database", "width=600,height=400");
    newWindow.document.write("<h2>User Data</h2>");
    newWindow.document.write("<table border='1'><tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th><th>Disease</th></tr>");
    
    database.forEach(user => {
        newWindow.document.write(`
            <tr>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>${user.disease}</td>
            </tr>
        `);
    });

    newWindow.document.write("</table>");
}

        function displayDataInNewWindow() {
            const newWindow = window.open("", "Database", "width=600,height=400");
            newWindow.document.write("<h2>User Data</h2>");
            
            newWindow.document.write(`
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin-top: 20px;
                        font-family: Arial, sans-serif;
                    }
    
                    th {
                        background-color: #3d348b;
                        color: white;
                        padding: 12px;
                        text-align: left;
                    }
    
                    td {
                        padding: 10px;
                        border-bottom: 1px solid #ddd;
                        text-align: left;
                    }
    
                    tr:nth-child(even) {
                        background-color: #f2f2f2;
                    }
    
                    tr:hover {
                        background-color: #ddd;
                    }
    
                    table, th, td {
                        border: 1px solid #ddd;
                    }
    
                    h2 {
                        text-align: center;
                        font-size: 2rem;
                        color: #3d348b;
                        margin-bottom: 20px;
                    }
                </style>
            `);
    
            newWindow.document.write("<table>");
            newWindow.document.write("<tr><th>First Name</th><th>Last Name</th><th>Email</th><th>Password</th><th>Disease</th></tr>");
            
            database.forEach(user => {
                newWindow.document.write(`
                    <tr>
                        <td>${user.firstName}</td>
                        <td>${user.lastName}</td>
                        <td>${user.email}</td>
                        <td>${user.password}</td>
                        <td>${user.disease}</td>
                    </tr>
                `);
            });
    
            newWindow.document.write("</table>");
        }