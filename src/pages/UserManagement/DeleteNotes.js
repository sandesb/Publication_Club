import { useState } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import Body from "../theme/Body";
import { deleteNotes } from "../../service/user-management.service";

const Delete = () =>{
    const navigate = useNavigate();
    const { values } = useParams();


const {id}=useParams();
console.log(id);
const {semesterKey}=useParams();



const [user, setUser] = useState({
    username:"",
    email:"",
    age:"",
    city:"",

});

useEffect(() => {
  if (id) {
    axios.get(`http://localhost:4001/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.error("Error fetching user data:", err);
        alert("Failed to fetch user data. Please check the network.");
      });
  }
}, [id]); // Trigger effect whenever 'id' changes

const notify = () => toast.error(`Khatam tata goodbye gaya ${user.username} !`,{
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

const handleDeleteUser = () => {
    const confirm = window.confirm("Are you sure want to delete this user?");
    if(confirm) {
      deleteNotes(id).then(() => {
        navigate(`/pages/UserManagement/BookManagement`);
        console.log("Delete user success");
      }).catch((err) => {
        console.log(err);
      });
    };
  }

    return (
        <div class="flex1 del">

        

            <h2>Are you sure, you wanna delete {user.username} 🥺?</h2>
            <div>Username: {user.username}</div>
            <div>Age: {user.age}</div>
            <div>City: {user.city}</div>
            <div>Email: {user.email}</div>
            <br></br>
            <div>
            <br></br>

                <button type="button" className="btn btn-danger" onClick={handleDeleteUser}>Damn, Sure! 😈</button> 
                <button type="button" className="btn button1" onClick={()=>{navigate(`/pages/UserManagement/${values}`);
                }}>Last Chance 💚</button>        
        </div>

        </div>
        

        );
    };

export default Delete;