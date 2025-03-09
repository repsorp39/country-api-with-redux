import React from 'react';
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { toogleMode } from '../features/theme/themeSlice';


const Header = () => {
    const dispatch = useDispatch();
    const toogle = ()=>dispatch(toogleMode());

    const darkMode = useSelector(state => state.theme.darkMode);
    const content = darkMode ?
     <p onClick={toogle}> <FaMoon  /> <span>DarkMode</span> </p> :
        <p onClick={toogle}> <IoSunnySharp  /> <span>Light Mode</span> </p>;

    return (
       <header>
           <section>
                <div> <h2>Where in the world ?</h2></div>  
                <div> { content  } </div>  
           </section>
       </header>
    );
};

export default Header;