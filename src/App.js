import './App.css';
import './Form.css';
import './user.css';
import './card.css';
import './login.css';
import './nav.css';


import './pages/theme/styles/bootstrap-icons.css';
import './pages/theme/styles/bootstrap.min.css';
import './pages/theme/styles/templatemo-topic-listing.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './pages/theme/Layout';

import UserManagement from './pages/UserManagement/UserManagement';
import AddUser from './pages/UserManagement/AddUser'
import Counter from './pages/Counter';
import Randomizer from './pages/Randomizer';
import Faq from './pages/Faq';
import Detail from './pages/UserManagement/Detail';
import Delete from './pages/UserManagement/Delete';
// import EditUser from './pages/UserManagement/EditUser';

import PrivateRoute from './routes/PrivateRoute';
import Main from './pages/Main';
import Counter1 from './pages/Counter1';
import Login1 from './pages/Login1';
import AboutUs from './pages/AboutUs';
import MainZ from './pages/MainZ';
import MainN from './pages/MainN';
import MainD from './pages/MainD';
import Sort from './pages/UserManagement/Sort';

function App() {
  return (
    <div>
    <BrowserRouter>
    
      <Routes> 
      <Route path="/" element={<Login1/> } >

      </Route>
        <Route path="/" element={<Layout/>}>
        <Route path="/pages/Main" element={<PrivateRoute component={Main}/> } />
        <Route path="/pages/MainZ" element={<PrivateRoute component={MainZ}/> } />
        <Route path="/pages/MainN" element={<PrivateRoute component={MainN}/> } />
        <Route path="/pages/MainD" element={<PrivateRoute component={MainD}/> } />



          <Route  path="/pages/UserManagement/:values" element={<PrivateRoute component={UserManagement}/> } />
          <Route path="/pages/UserManagement/AddUser" element={<PrivateRoute component={AddUser}/>}/>


          <Route path="/UserManagement/Delete/:semesterKey/:id" element={<Delete/> } />
          <Route path="/UserManagement/EditUser/:semesterKey/:id" element={<AddUser/>}/>

          <Route path="/UserManagement/Detail/:semesterKey/:id" element={<Detail/> } />
          <Route path="/pages/UserManagement/Sort/:values" element={<Sort/> } />

          <Route path="/pages/Faq" element={<Faq/> } />
          <Route path="/pages/Counter" element={<Counter/> } />
          <Route path="/pages/Counter1" element={<Counter1/> } />

          <Route path="/pages/Randomizer" element={<Randomizer/> } />
          <Route path="/pages/AboutUs" element={<AboutUs/> } />


        </Route>
        
      </Routes>
    </BrowserRouter>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

         
    </div>



    // <div className="App"
    //     <Header/>
    //     <Layout/>
    // </div>

  );
};

export default App;
