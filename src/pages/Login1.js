import {Link} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ViPassInput from "../components/ViPassInput";
import ViTextInput from "../components/ViTextInput";
import ViMessage from "../components/ViMessage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login1 = () => {



    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  

    const handleInputChange = (event) => {
      if(event.target.name === 'email') {
        setEmail(event.target.value);
      }
      if(event.target.name === 'password') {
        setPassword(event.target.value);
      }
    }
    const doLoginn = () => {

    }
    const doLogin = (e) => {
      let isLogin = false;
      if(email === "admin" && password === "admin") {
        isLogin = true;
        toast.success('🦄 Welcome! Login Successful', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
  
      if(isLogin) {
        localStorage.setItem('isLogin', '1');
        navigate('/pages/Main');
      } else {
        alert('Login failed: Invalid Username or Password');
        setErrorMessage('Invalid Username or Password');
        // navigate('/');

      }
    }

useEffect(() => {
  const isLogin = localStorage.getItem('isLogin');
  if(isLogin==='1'){

  

    navigate('/pages/Main');
  console.log("Login component mounted");
  }
},[])

    return(
        <div>

            <body id="top">

        <main>

            
            <div id="login">
                <form>
                    <img class="logo1" src="/images.png"/>
                  <h1>Sign In</h1>



                  {errorMessage && <ViMessage message={errorMessage}/>}


<ViTextInput 
        title="Email" 
        name="email" 
        placeholder="Username"
        class="email"
        handleInputChange={handleInputChange}
        value={email} />


<ViPassInput 
        title="Password" 
        name="password" 
        placeholder="Password"

        handleInputChange={handleInputChange}
        class="email"
        value={password} />
                  {/* <input type="text" placeholder="Username"/>
                  <input type="password" placeholder="Password"/> */}
                  <button  onClick={doLogin}>Sign in</button>

                </form>
              </div>
                

        </main>



    </body>
        </div>
    );
}

export default Login1;