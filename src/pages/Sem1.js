import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import {getSem1Notes} from "../service/user-management.service";
import Tumbleweed from "./Tumbleweed";

const Sem1 = () =>{

    const [notes, setNotes] = useState([]);
  
        useEffect(() => {
          // Fetch notes data when component mounts
          getSem1Notes()
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
                            <h2 class="newcolor text-center ">- Semester 1 -</h2>

                                <div className="bookflex">

                        {/* Map over notes array to render each note dynamically */}
                            {notes.map((note, index) => (
                        <Link key={index} to={`/pages/UserManagement/NotesView/${note.password}`} 
                        className={`book-outline ${index === 0 ? 'first-book' : ''}`}>
                        {/* Render each book outline as a Link */}
                            <p className="top">{note.password}</p>
                            <p className="half">{note.username}</p>
                        </Link>
                        ))}
                    </div>
                    <Tumbleweed/>
                            <img src="../shelf_wood.png" className="blur"></img>
                            </div>
    )
}

export default Sem1;