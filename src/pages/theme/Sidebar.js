import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <div class="sidebar">
        <ul className ="sidebar-nav">
            <li>

                <Link to="/pages/UserManagement">
                    <button>Speaker List</button>
                </Link>
            </li>

            <li>
            <Link to="/pages/Faq">
            <button>Timer Count</button>
                    </Link>
            </li>

            <li>
            <Link to="/pages/Contact">
                    <button>Um Counter</button>
                    </Link>
            </li>

            <li>
            <Link to="/pages/Randomizer">
                    <button>Randomizer</button>
                    </Link>
            </li>
        </ul>
        </div>

    );
};

export default Sidebar;