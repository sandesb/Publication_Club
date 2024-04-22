const ViPassInput = (props) => {
    return (
       <div>
             <input 
             className="form-control" required="" 
               type="password"
               onChange={props.handleInputChange}
               name={props.name}
               value={props.value}
               {...props} />
               { props.isSubmitted &&  props.value === '' && 
               <span class="danger"> Password is required</span>
               }
           </div>
    );
   }
   export default ViPassInput;