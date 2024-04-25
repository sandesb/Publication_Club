import axios from "axios";
import { useParams,useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { collection, updateDoc, getDatabase, ref,orderByChild, push, onValue, remove, child, get, db} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"
import {  getFirestore, doc, setDoc } from "firebase/firestore"; 

// import { getDatabase, ref, child, get } from "firebase/database";
const firebaseConfig = {
  databaseURL: 'https://publication-2a5e4-default-rtdb.europe-west1.firebasedatabase.app',
};

const firebaseApp = initializeApp(firebaseConfig);
// const db = getDatabase(firebaseApp);
// const BASE_URL = 'http://localhost:4000/users';
const BASE_URL = '/.netlify/functions/getUserById';
const BASE_URL1 ='http://localhost:4000/users';

const dbRef = ref(getDatabase());
const usersRef = child(dbRef, "users"); // Assuming "users" is the key where your users are stored

export const getAllUsers = () => {


  return get(usersRef).then((snapshot) => {
    const usersData = [];
    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        usersData.push(userData);
      });
      return usersData;
    } else {
      return []; // Return an empty array if no data exists
    }
  }).catch((error) => {
    throw error; // Rethrow the error to handle it in the component
  });
};


// export const getUsersBySemester = (semester) => {
//   const dbRef = ref(getDatabase());
//   const usersRef = child(dbRef, 'users');

//   return get(usersRef).then((snapshot) => {
//     const usersData = [];
//     if (snapshot.exists()) {
//       snapshot.forEach((childSnapshot) => {
//         const userData = childSnapshot.val();
//         if (userData.sem === semester) {
//           usersData.push(userData);
//         }
//       });
//       return usersData;
//     } else {
//       return []; // Return an empty array if no data exists
//     }
//   }).catch((error) => {
//     throw error; // Rethrow the error to handle it in the component
//   });
// };
// export const getAllUsers1 = () => {
  
//   const dbRef = ref(getDatabase());
//   const usersRef = child(dbRef, `users.json/?sem=${values}`); // Assuming "users" is the key where your users are stored
//   return get(usersRef).then((snapshot) => {
//     const usersData = [];
//     if (snapshot.exists()) {
//       snapshot.forEach((childSnapshot) => {
//         const userData = childSnapshot.val();
//         usersData.push(userData);
//       });
//       return usersData;
//     } else {
//       return []; // Return an empty array if no data exists
//     }
//   }).catch((error) => {
//     throw error; // Rethrow the error to handle it in the component
//   });
// };

// export const getAllUsers = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(BASE_URL).then((res) => {
//       resolve(res.data);
//     }).catch((err) => {
//       reject(err);
//     });
//   });
// }

export const updateUser = (id, data) => {
  return new Promise((resolve, reject) => {
    axios.put(`${BASE_URL}/${id}`, data)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const addUser = (data) => {
  return new Promise((resolve, reject) => {
    axios.post('http://localhost:4000/users', data)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const addUsersFromExcel = (jsonDataArray) => {
  return new Promise((resolve, reject) => {
      axios.post('http://localhost:4000/users', jsonDataArray)
          .then(() => {
              resolve(true); // Resolve promise if successful
          })
          .catch((err) => {
              reject(err); // Reject promise with error if request fails
          });
  });
};

// export const addUser = async (userData) => {
//   const { username, password, email, sem, city } = userData;

//   const newUser = {
//     id: uuidv4(),
//     username,
//     password,
//     email,
//     sem: +sem,
//     city,
//   };

//   console.log('Adding new user to Firestore:', newUser);
  
// // Create a new Promise to perform Firestore operation
// return new Promise((resolve, reject) => {
//   debugger;
//   const userRef = doc(db, 'users', newUser.id); // Reference to new user document

//   // Use setDoc to add new user document to Firestore
//   // setDoc(usersRef, newUser)
//   //   .then(() => {
//   //     console.log('User added successfully to Firestore');
//   //     resolve(true); // Resolve promise upon successful addition
//   //   })
//   //   .catch((error) => {
//   //     console.error('Error adding user to Firestore:', error);
//   //     reject(error); // Reject promise with error
//   //   });
// });
// };


export const deleteUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${BASE_URL1}/${userId}`)
        .then(() => {
          resolve(true);
        }).catch((err) => {
          reject(err);
        })
  });
}

// export const getUserById = (id) => {
//   return new Promise((resolve, reject) => {
//     axios.get(`${BASE_URL}/${id}`)
//         .then((res) => {
//           resolve(res.data);
//         }).catch((err) => {
//           reject(err);
//         })
//   });
// }

export const getUserById = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL1}/${id}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}

export const searchByUsername = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL1}?username=${username}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}
export const searchByEmail = (email) => {
  return new Promise((resolve, reject) => {
    axios.get(`${BASE_URL1}?email=${email}`)
        .then((res) => {
          resolve(res.data);
        }).catch((err) => {
          reject(err);
        })
  });
}