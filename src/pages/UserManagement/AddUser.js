import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { addUser, getUserById, updateUser, db } from "../../service/user-management.service";

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
        alert(newUser.username);
        try {
        await addUser(userData)
          .then(() => {
            console.log('New user added successfully');
            navigate('/');
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

  return (
    <div className="flex5 form-m">
      <form className="form" onSubmit={saveForm}>
        <h2>{id ? 'Edit User' : 'Add New User'}</h2>
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
          <i className="fa fa-calendar">📅</i>
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
            <i className="fa fa-map-marker">📞</i>
          </div>
          {isSubmitted && !user.city.trim() && <span className="danger">City is required</span>}
        </div>

        <div className="tright">
          <button type="submit" className="btn-margin button1">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
