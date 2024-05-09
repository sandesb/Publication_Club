import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addNotes, getUserById, updateUser, db } from "../../service/user-management.service";
import Swal from 'sweetalert2';

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

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    const fileName = file.name; // Extract the file name
    setUser({ ...user, city: `\\${fileName}` }); // Update the city in user state with the file name
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
        await addNotes(userData)
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

 

    

  

    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation using regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // var parser = require('simple-excel-to-json');
  // var doc = parser.parseXls2Json('./example/sample.xlsx');

  const [selectedFile, setSelectedFile] = useState(null);

  


  return (
    <div className="flex5 form-m">
      <form className="form" onSubmit={saveForm}>
        <h2>{id ? 'Edit User' : 'Add Notes'}</h2>
        <div className="form-group">
          <label htmlFor="username">Subject Name:</label>
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
        <label htmlFor="password">Chapter No.</label>
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
          <label htmlFor="email">Chapter Name:</label>
          <div className="relative">
            <input
              type="text"
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
            <option value="4">6th Semester</option>
            <option value="5">7th Semester</option>

          </select>
          {isSubmitted && !user.sem.trim() && <span className="danger">Semester is required</span>}
        </div>

        <div className="form-group">
          <label htmlFor="city">Others:</label>
          <div className="relative">
            <input
              type="file"
              name="city"
            //   value={`\\${user.city}`} 
              onChange={handleFileChange}
              className="form-control"
            />
            <i className="fa fa-map-marker">📍</i>

          </div>
          {isSubmitted && !user.city.trim() && <span className="danger">City is required</span>}
        </div>

        <div className="tright">
          <button type="submit" className="btn-margin button1">Save
          
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default AddUser;
