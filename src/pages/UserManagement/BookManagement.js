import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import ViTable from "../../components/ViTable";
import ViTextInput from "../../components/ViTextInput";

import axios from "axios";


import { useParams } from 'react-router-dom';
import { getAllNotes, searchByName, searchByCode } from "../../service/user-management.service";


const UserManagement = () => {
  const { values } = useParams();


  const [searchCode, setSearchCode] = useState('');
  const [searchName, setSearchName] = useState('');

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllNotes().then((data) => {
      setUsers(data);
    }).catch((err) => {
      console.log("Error fetching users:", err);
    });
  }, []); // Empty dependency array ensures this effect runs only once on component mount


  useEffect(() => {
    // Only make the API call if a valid semesterKey is determined
    if (values) {
      axios
        .get(`http://localhost:4001/users/delete/${values}`) // Construct the API URL with the semesterKey
        .then((res) => {
          console.log(res.data);
          setUsers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [values]); // Trigger the effect when semesterKey changes

  const handleSearchCode = (e) => {
    setSearchCode(e.target.value);
    searchByCode(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      // alert("API server error");
      console.log(err);
    });
  }
  const handleSearchName = (e) => {
    setSearchName(e.target.value);
    searchByName(e.target.value).then((data) => {
      setUsers(data);
    }).catch((err) => {
      alert("API server error");
      console.log(err);
    });
  }
    const header = [
        {
            key: "username",
            name: "Subject",
        },
        {
            key: "email",
            name: "Chapter Name",
        },
        {
            key: "password",
            name: "Subject Code.",
        }
    ]

    return (
             

        <div class="flex1">
            <p className="mt-5"></p>

          <div className="mb-4" style={{margin: '0 1% 0 0'}} >
       
            </div>

            <div className="vi-flex-container">

        <div style={{flexGrow: '5'}} className="relative">
          <ViTextInput
          className="ifield"
            title="Username"
            name="username"
            placeholder="🔍 Search by Subject Code...      "
            value={searchCode}
            handleInputChange={handleSearchCode}
            />

        </div>

        
        <div style={{flexGrow: '5'}}  className="relative">

          <ViTextInput
          className="ifield fa-user"
            title="Email"
            name="email"
            placeholder="🔎 Search by Chapter Name...         "
            value={searchName}
            handleInputChange={handleSearchName}
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
              name: "Delete 🗑️", 
              link: `/UserManagement/DeleteNotes`,
              className: "btn btn-outline-danger viewD"
            }
          ]}
        />
            
            
           
   
       

        </div>
        );
    };

export default UserManagement;