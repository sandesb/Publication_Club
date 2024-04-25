import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser, getUserById, updateUser, db } from "../../service/user-management.service";
import Swal from 'sweetalert2';
import XLSX from 'xlsx';
import { addUsersFromExcel } from '../../service/user-management.service'; // Import the new API service function

const AddUser = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    sem: "", // This will hold numeric value (1, 2, 3, 4) for semester
    city: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load user data if editing existing user (using id from URL params)
  useEffect(() => {
    if (id) {
      getUserById(id)
        .then((item) => {
          setUser({
            username: item.username,
            password: item.password,
            email: item.email,
            sem: item.sem,
            city: item.city,
          });
        })
        .catch((err) => {
          console.log("API server error:", err);
          alert("API server error");
        });
    }
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const saveForm = async (event) => {
    event.preventDefault();
  
    if (validateForm()) {
      const userData = { ...user, sem: parseInt(user.sem, 10) }; // Convert sem to integer
  
      if (id) {
        // Update existing user
        updateUser(id, userData)
          .then(() => {
            console.log('User updated successfully');
            navigate('/');
          })
          .catch((err) => {
            console.error('Update error:', err);
            alert('SERVER ERROR');
          });
      } else {
        // Add new user
        const newUser = { ...userData, id: uuidv4() };
        Swal.fire({
          title: `${user.username} added to ${user.sem}!`,
          position: "top-center",
icon: "success",
showConfirmButton: false,
timer: 1500,
          
        });
        try {
        await addUser(userData)
          .then(() => {
            console.log('New user added successfully');
            // const outputDiv = document.getElementById('output');
            // outputDiv.textContent = JSON.stringify(userData, null, 2);
            // navigate('/');
          })
          .catch((err) => {
            console.error('Add user error:', err);
            alert('SERVER ERROR');
          });
      }catch (error) {
        console.error('Error adding user:', error);
        alert('Failed to add user. Please try again.'); // Display error message
      }
    }
  }
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {
      username: "",
      password: "",
      email: "",
      sem: "",
      city: "",
    };

    if (!user.username.trim()) {
      errors.username = 'Username is required';
      isValid = false;
    }

    if (!user.email.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(user.email.trim())) {
      errors.email = 'Email is not valid';
      isValid = false;
    }

    if (!user.sem.trim()) {
      errors.sem = 'Semester is required';
      isValid = false;
    }

    if (!user.city.trim()) {
      errors.city = 'City is required';
      isValid = false;
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // var parser = require('simple-excel-to-json');
  // var doc = parser.parseXls2Json('./example/sample.xlsx');



  async function convertExcelToJson() {
      const fileInput = document.getElementById('fileInput');
      const file = fileInput.files[0];
  
      if (file) {
          const reader = new FileReader();
  
          reader.onload = async function(event) {
              const data = event.target.result;
              const workbook = XLSX.read(data, { type: 'binary' });
              const sheetName = workbook.SheetNames[0];
              const sheet = workbook.Sheets[sheetName];
  
              // Convert sheet to array of objects
            const jsonDataArray = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Prepare to store successful posts
            const successfulPosts = [];

            // Loop through each object in the jsonDataArray (skip the first row)
            for (let i = 1; i < jsonDataArray.length; i++) {
                const row = jsonDataArray[i];

                // Parse sem value to integer, default to 0 if empty or non-numeric
                const sem = parseInt(row[3]) || 0;

                // Construct a JSON object for the current row
                const jsonObject = {
                    "username": row[0] || "",   // Assuming column A (index 0) is for username
                    "password": row[1] || "",   // Assuming column B (index 1) is for password
                    "email": row[2] || "",      // Assuming column C (index 2) is for email
                    "sem": sem,                 // Use parsed sem value
                    "city": row[4] || ""        // Assuming column E (index 4) is for city
                };

                try {
                    // Call addUsersFromExcel to post each JSON object to server individually

                    await addUsersFromExcel(jsonObject);


                    successfulPosts.push(jsonObject); // Track successful posts
                    const numberOfStudents = successfulPosts.length;

                    Swal.fire({
                      title: `Congratulations. ${numberOfStudents} students added!`,
                      position: "top-center",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
                      
                    });
                } catch (error) {
                    console.error('Error posting user data:', error);
                    // Handle error if post request fails
                }
            }

            console.log('Successful posts:', successfulPosts);
            console.log('Users data from Excel processed successfully');
        };

        reader.readAsBinaryString(file);
    }
}

  return (
    <div className="flex5 form-m">
      <form className="form" onSubmit={saveForm}>
        <h2>{id ? 'Edit User' : 'Add New Speaker'}</h2>
        <div className="form-group">
          <label htmlFor="username">Full Name:</label>
          <div className="relative">
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-user">👦</i>
          </div>
          {isSubmitted && !user.username.trim() && <span className="danger">Username is required</span>}
        </div>

        <div className="form-group">
        <label htmlFor="password">Matric No.</label>
        <div className="relative">
            <input
              type="text"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-lock">🔒</i>
          </div>
          </div>


        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <div className="relative">
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-envelope">📧</i>
          </div>
          {isSubmitted && !user.email.trim() && <span className="danger">Email is required</span>}
          {isSubmitted && user.email.trim() && !isValidEmail(user.email.trim()) && <span className="danger">Email is not valid</span>}
        </div>

        <div className="form-group">
          <label htmlFor="semester">Semester:</label>
          <select
            name="sem"
            value={user.sem}
            onChange={handleInputChange}
            className="form-control"
          >
            <option value="">Select Semester</option>
            <option value="1">1st Semester</option>
            <option value="2">2nd Semester</option>
            <option value="3">3rd Semester</option>
            <option value="4">4th Semester</option>
          </select>
          {isSubmitted && !user.sem.trim() && <span className="danger">Semester is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <div className="relative">
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleInputChange}
              className="form-control"
            />
            <i className="fa fa-map-marker">📍</i>
          </div>
          {isSubmitted && !user.city.trim() && <span className="danger">City is required</span>}
        </div>

        <div className="tright">
          <button type="submit" className="btn-margin button1">Save
          
          </button>
          <hr></hr>
          <div className="bulky">
            <p className="bulkytext">Wanna upload an <span className="ex">Excel</span> file instead?</p>
          <button className="btn-margin buttonS"><a href="sample.xlsx" download> Download Sample</a></button>
          </div>
          <input type="file" id="fileInput"/>
          <button  onClick={convertExcelToJson}  className="btn-margin button1">Bulk Upload</button>
          <div id="output"></div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
