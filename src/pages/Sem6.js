import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { getSem6Notes} from "../service/user-management.service";


const Sem6 = () =>{

    const [notes, setNotes] = useState([]);
  
        useEffect(() => {
          // Fetch notes data when component mounts
          getSem6Notes()
            .then((data) => {
              // Set the fetched notes data to state
              setNotes(data);
            })
            .catch((error) => {
              console.error('Error fetching notes:', error);
            });
        }, []); // Empty dependency array ensures this effect runs once on mount
      
       
        return(
          <div className="component-1">
                          <h2 class="newcolor text-center ">- Semester 6 -</h2>

                              <div className="bookflex">

                              <img src="../dunussy.png" className="bookf"></img>

                      {/* Map over notes array to render each note dynamically */}
                          {notes.map((note, index) => (
                      <Link key={index} to={`/pages/UserManagement/NotesView/${note.password}`} className="book-outline">
                      {/* Render each book outline as a Link */}
                          <p className="top">{note.password}</p>
                          <p className="half">{note.username}</p>
                      </Link>
                      ))}
                  </div>

                          <img src="../shelf_wood.png" className="blur"></img>
                          </div>
  )
}
export default Sem6;