import { useState, useEffect } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';

import axios from "axios";
import { getUserById } from "../../service/user-management.service";

const Detail = () => {
  const form = useRef();
  const { id } = useParams();
  const [user, setUser] = useState({
    username: "",
    email: "",
    age: "",
    city: "",
  });



  useEffect(() => {
    getUserById(id)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        alert("API server error");
        console.log(err);
      });
  }, [id]);


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_amewswf', 'template_fcuzlqg', form.current, {
        publicKey: 'NdTwZm4JtAmrpjKaj',
      })
      .then(
        () => {
          Swal.fire({
            title: `Email Sent to ${user.username}!`,
            position: "top-center",
  icon: "success",
  showConfirmButton: false,
  timer: 1500,
            
          });
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to update the image source with a random number between 1 and 7
function updateAvatarImage() {
    // Get a random number between 1 and 7
    const randomNumber = getRandomNumber(1, 6);

    // Construct the new image URL with the random number
    const imageUrl = `https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${randomNumber}-bg.webp`;

    // Get the image element by its ID
    const avatarImg = document.getElementById('avatarImg');

    // Update the src attribute of the image element
    if (avatarImg) {
        avatarImg.src = imageUrl;
    } else {
        console.error("Avatar image element not found.");
    }
}

// Call the updateAvatarImage function immediately when the script is encountered
updateAvatarImage();

// Call the updateAvatarImage function when the page is loaded or refreshed
  return (
    <div className="flex1">
      <section className="vh-100 profile-section">
        <div className="container py-5 h-100 profile-container">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-6 mb-4 mb-lg-0">
              <div className="card mb-3 profile-card">
                <div className="row g-0">
                  <div className="col-md-4 gradient-custom text-center text-white profile-avatar">
                    <img
                      id="avatarImg"
                      src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${getRandomNumber(
                        1,
                        6
                      )}-bg.webp`}
                      alt="Avatar"
                      className="img-fluid my-5 avatar-image"
                    />
                    <h5>{user.username}</h5>
                    <i className="far fa-edit mb-5"></i>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body p-4">
                      <h6>Information</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-12 mb-3">
                          <h6>Semester</h6>
                          <p className="text-muted">{user.sem}</p>
                          <form ref={form}  className="ifield"onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text"  className="ifield" name="username" value={user.username}/>
      <label>Email</label>
      <input type="email" className="ifield" name="email" value={user.email} />
      <label >Message</label>
      <input name="message"  className="ifield" value="Please prepare your speech for Sunday on any free topic. 9:30 AM, Monday. Thanks!"/>
      <br></br>
      <input type="submit" value="Send" />
    </form>
                          {/* <button className="btn btn-primary" onClick={sendEmail}>
                            Send Email
                          </button> */}
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Age</h6>
                          <p className="text-muted">{user.age}</p>
                        </div>
                      </div>
                      <h6>City</h6>
                      <hr className="mt-0 mb-4" />
                      <div className="row pt-1">
                        <div className="col-6 mb-3">
                          <h6>Permanent</h6>
                          <p className="text-muted">{user.city}</p>
                        </div>
                        <div className="col-6 mb-3">
                          <h6>Secondary</h6>
                          <p className="text-muted">N.A</p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-start">
                        <a href="#!">
                          <i className="fab fa-facebook-f fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-twitter fa-lg me-3"></i>
                        </a>
                        <a href="#!">
                          <i className="fab fa-instagram fa-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Detail;
