import {Link} from "react-router-dom";
import { useEffect, useState } from "react";


import axios from "axios";


import { getAllNotes } from "../service/user-management.service";

import PdfFlipbook from './PdfFlipbook';
import Sem1 from './Sem1';
import Sem2 from './Sem2';
import Sem3 from './Sem3';
import Sem6 from './Sem6';
import Sem7 from './Sem7';






    const Notes = () => {

    return(
        <div className="maind">
        <section class="hero-section d-flex justify-content-center align-items-center" id="section_1">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-8 col-12 mx-auto">
                            <h1 class="vcolor text-center">Semester-Wise Notes</h1>
                            <h2 class="newcolor text-center ">- A Single Repository For All Students -</h2>
                            <div className="mb-4" style={{margin: '0 0 0 25%'}} >
     

            <button class="addB mx-4"><Link  className="link" to="/pages/UserManagement/AddNotes">
            Add Notes 💻
            </Link></button> 

            <button class="addB mx-4"><Link  className="link" to="/pages/UserManagement/NotesView">
            Delete Notes 🗑️
            </Link></button>
            </div>

            <Sem1 />
            <Sem2 />
            <Sem3 />
            <Sem6 />
            <Sem7 />

            
            </div>

                    </div>
                </div>
            </section>
            </div>

    )

}

export default Notes;