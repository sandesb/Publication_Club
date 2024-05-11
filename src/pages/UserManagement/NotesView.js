
import { useEffect, useState} from "react";
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {getNotesView} from "../../service/user-management.service";
import { animated, useSpring } from '@react-spring/web'

    const NotesView = () => {
      const [styles, api] = useSpring(() => ({
        x: 10,
        rotateZ: 0,
        config: { tension: 20, friction: 80 }, // Physics settings for animation
      }));
    
      // Function to continuously animate the tumbleweed within a specific range
      const animateTumbleweed = () => {
        api.start({
          to: async (next) => {
            while (true) {
              // Roll to the right within the constrained range (500 pixels) with bounce effect
              await next({ x: 80, rotateZ: 360 });
              // Roll back to the left within the constrained range (0 pixels) with bounce effect
              await next({ x: 10, rotateZ: 0 });
            }
          },
          reset: true, // Reset animation when component unmounts
        });
      };
    
    
      React.useEffect(() => {
        animateTumbleweed(); // Start the continuous animation when component mounts
        return () => api.stop(); // Stop animation when component unmounts
      }, []); // Run effect only once on mount
    
      const { password } = useParams(); // Access the URL parameter (subject code)

      const [notes, setNotes] = useState([]);
    
      useEffect(() => {
        // Fetch notes data based on the subject code (password) from the URL
        getNotesView(password)
          .then((data) => {
            // Set the fetched notes data to state
            setNotes(data);
          })
          .catch((error) => {
            console.error('Error fetching notes:', error);
          });
      }, [password]); // Re-fetch notes when the subject code (password) changes
    
    return(
        <div className="maind">
        <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 mx-auto">
                            <h1 class="vcolor text-center">Semester-Wise Notes</h1>
                            <h2 class="newcolor text-center ">- Subject: {password} -</h2>
                            <div className="mb-4" style={{margin: '0 0 0 36%'}} >
            </div>
            </div>

                    </div>
                </div>
            </section>
            <h2 class="newcolor text-center ">- Please click on the numbers to open the PDF 📖-</h2>

         
    


            <div className="bookflex">

                   {notes.map((note, index) => (
                            <div key={index} 
                            className={`book-outline1 ${index === 0 ? 'first-book' : ''}`}>
                                {/* Assuming 'username' and 'password' are properties of each note */}
                                <a href={note.city}><p class="top1">{note.username}</p></a>{/* Displaying the username */}
                                <p class="half1">{note.email}</p> {/* Displaying the password */}
                            </div>
                            ))}           
            </div>

            <animated.div
      className="spring-box"
      style={{
        ...styles,
        cursor: 'pointer',
        position: 'absolute', // Ensure it stays positioned
        left: styles.x.interpolate((x) => `${x}%`), // Position based on x value
        transform: styles.rotateZ.interpolate((rotateZ) => `rotate(${rotateZ}deg)`), // Apply rotation
      }}
    />
            <img src="../../../shelf_wood.png" className="blur"></img>

            {/* <h2 class="newcolor text-center ">- Slides -</h2>

            <img src="../../shelf_wood.png" className="blur"></img> */}


            </div>

    )

}

export default NotesView;