
import { useEffect, useState} from "react";
import { useParams, Link } from 'react-router-dom';
import {getNotesView} from "../../service/user-management.service";

    const NotesView = () => {

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

            <img src="../../../shelf_wood.png" className="blur"></img>

            {/* <h2 class="newcolor text-center ">- Slides -</h2>

            <img src="../../shelf_wood.png" className="blur"></img> */}


            </div>

    )

}

export default NotesView;