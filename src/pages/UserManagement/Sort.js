// Sort.js

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import { DownloadTableExcel } from 'react-export-table-to-excel';


const Sort = () => {
  const [users, setUsers] = useState([]);
  const { semesterKey } = useParams();

  const { values } = useParams();
  const tableRef = useRef(null);


  useEffect(() => {
    // Fetch user data (replace URL with your API endpoint)
    if (values) {
      axios
      .get(`http://localhost:4000/users/?sem=${values}`) // Construct the API URL with the semesterKey
      .then((response) => {
        const sortedUsers = response.data.sort((a, b) => a.username.localeCompare(b.username));
        setUsers(sortedUsers);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
    }
  }, [values]);



  return (
    <div>
        <br></br>
      <p className='mx-4'>Public Speaking List (Alphabetically)</p>

<div className="group">      <DownloadTableExcel
                    filename="users table"
                    sheet="users"
                    currentTableRef={tableRef.current}
                >

                   <button id="save-btn" className="save-excel"> Export In Excel 🗄</button>
                </DownloadTableExcel>
                </div>

      {users.length > 0 &&
        <div className='table-flex'>
          <table className='table2  ' ref={tableRef}>
            <thead className=''>
              <tr>
                <th >SN</th>
                {Array.from({ length: Math.ceil(users.length / 8) }, (_, i) => (
                  <th key={i}>Week {i + 1}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }, (_, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  {Array.from({ length: Math.ceil(users.length / 8) }, (_, j) => (
                    <td key={j}>
                      <table>
                        <thead>
                          <tr>
                          </tr>
                        </thead>
                        <tbody>
                          {users.slice(j * 8 + i, j * 8 + i + 1).map((user, k) => (
                            <tr key={k}>
                              <td>{user.username}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default Sort;
