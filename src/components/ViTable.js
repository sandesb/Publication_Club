import { Link, useParams } from "react-router-dom";
const ViTable = (props) => {
  const { semesterKey } = useParams();

    return(
        <table class="table1"> 
        <tr>
            {
                props.header &&
                props.header.length > 0 &&
                props.header.map((user,index) => {
                   return(
                    <th key={index}>{user.name}</th>                    
                   ) 
                })
            }
         
          {props.actions && props.actions.length>0 && <th>Action</th>}
        </tr>

        { props.data && props.data.length > 0 && 
              props.data.map((user, index) => {
                return (
                  <tr key={index}>
                    { props.header.map((header, index) => {
                      return (
                        <td key={index}>{user[header.key]}</td>
                      )
                    })}

                    { props?.actions && props.actions.length > 0 &&
                      <td>
                        {
                          props.actions.map((action, index) => {
                            return (
                                <Link to={`${action.link}/${user.id}`} className={action.className} key={index}>{action.name}</Link>
                            )
                          })
                        }
                      </td>
                    }
                  </tr>
                )
              })
            }

{props.data && props.data.length === 0 && 
          <tr>
            <td colSpan={4}>No records found</td>
          </tr>
          }
        
        </table> 



    )
}

export default ViTable;