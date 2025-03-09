import React from 'react';
import { themeMode} from './themeSlice';
import { useSelector } from 'react-redux';

const Wrapper = ({children}) => {

    const themeClass = useSelector(themeMode);

    return (
       <main className={themeClass}>
        { children }
       </main>
    );
};

export default Wrapper;