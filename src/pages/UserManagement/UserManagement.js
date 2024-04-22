import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ViTable from "../../components/ViTable";
import ViTextInput from "../../components/ViTextInput";

import axios from "axios";


import { useParams } from 'react-router-dom';
import { getAllUsers, searchByEmail, searchByUsername } from "../../service/user-management.service";
const BASE_URL = '/.netlify/functions/getUsersBySemester';

const UserManagement = () => {
  const { values } = useParams();



  // const valueToString = {
  //   '1': 'firstsem',
  //   '2': 'secondsem',
  //   '3': 'thirdsem',
  //   '4': 'fourthsem'
  // };

  // const semesterKey = valueToString[values] || ''; 

  const [searchUsername, setSearchUsername] = useState('');
  const [searchEmail, setSearchEmail] = useState('');


  // useEffect(() => {
  //   getAllUsers().then((data) => {
  //     alert(data);
  //     setUsers(data);
  //   }).catch((err) => {
  //     alert("API server error");
  //     console.log(err);
  //   });
  // }, []);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((data) => {
      setUsers(data);
    }).catch((err) => {
      console.log("Error fetching users:", err);
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount



  useEffect(() => {
    // Only make the API call if a valid semesterKey is determined
    if (values) {
      axios
        .get(`${BASE_URL}?sem=${values}`) // Construct the API URL with the semesterKey
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [values]); // Trigger the effect when semesterKey changes

  const handleSearchUsername = (e) => {
    setSearchUsername(e.target.value);
    searchByUsername(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
  const handleSearchEmail = (e) => {
    setSearchEmail(e.target.value);
    searchByEmail(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
    const header = [
        {
            key: "username",
            name: "Student",
        },
        {
            key: "email",
            name: "Email",
        },
        {
            key: "password",
            name: "Matric No.",
        },
        {
            key: "city",
            name: "Contact",
        }
    ]


    // useEffect(() => {
    //   if (values) {
    //     getUsersBySemester(values)
    //       .then((data) => {
    //         setUsers(data);
    //       })
    //       .catch((err) => {
    //         console.log("Error fetching users:", err);
    //       });
    //   }
    // }, [values]);
    return (
             

        <div class="flex1">
            <p className="mt-5">Semester {values}</p>

          <div className="mb-4" style={{margin: '0 1% 0 0'}} >
        <button class="addB mx-8"><Link  className="link" to="/pages/UserManagement/AddUser">
            ➕ Add Speakers 
            </Link></button>

            <button class="addB mx-4"><Link  className="link" to={`/pages/UserManagement/Sort/${values}`}>
            Publish List 💻
            </Link></button> 
            </div>

            <div className="vi-flex-container">

        <div style={{flexGrow: '5'}} className="relative">
          <ViTextInput
          className="ifield"
            title="Username"
            name="username"
            placeholder="🔍 Search by Name...      "
            value={searchUsername}
            handleInputChange={handleSearchUsername}
            />

        </div>

        
        <div style={{flexGrow: '5'}}  className="relative">

          <ViTextInput
          className="ifield fa-user"
            title="Email"
            name="email"
            placeholder="🔎 Search by Mail...         "
            value={searchEmail}
            handleInputChange={handleSearchEmail}
            />


        </div>
        <br></br>

      </div>


            <ViTable 
        data={users}
        header={header}
        
        values={values}
        actions={[
            {
              name: "View 👀 ",
              link: `/UserManagement/detail/${values}`,
              className: "viewB"
            },
            {
              name: "Edit 📝",
              link: `/UserManagement/EditUser/${values}`,
              className: "viewE"
            },
            {
              name: "Delete 🗑️", 
              link: `/UserManagement/Delete/${values}`,
              className: "btn btn-outline-danger viewD"
            }
          ]}
        />
            
            
           
   
       

        </div>
        );
    };

export default UserManagement;