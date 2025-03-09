import React, { useState } from 'react';
import Header from '../components/Header';
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { filterByRegion, selectAllRegionName } from '../features/country/countrySlice';
import CountryCard from '../components/Country';

const Main = () => {
    const regions = useSelector(selectAllRegionName);
    const options = regions.map(r => <option key={r} value={r}> { r } </option>);

    const [query, setQuery] = useState("");
    const [regionFilter,setRegionFilter ] = useState("");

    const countries = useSelector(state => filterByRegion(state,{ query,region:regionFilter}));

    const content = countries.map(c => <CountryCard key={c.name.common} country={c}/>);
    
    const onSearchTyping = e => setQuery(e.target.value);
    const onRegionFilter = e => setRegionFilter(e.target.value);

    return (
       <>
        <Header/>
        <section className='filtering'>
           <article>
            <div> 
                <label htmlFor="searchbox"> <FaSearch /></label>
                    <input 
                    id="searchbox"
                    type="search"
                    value={ query }
                    onChange={ onSearchTyping }
                    placeholder="Search for a country ..."
                    />
                </div>
                <div>
                   <p>
                    <select 
                        name="region" 
                        id="region"
                        onChange={ onRegionFilter }
                        >
                            <option>Filter By Region</option>
                            { options }
                        </select>
                   </p>
                </div>
           </article>
        </section>

        <section className='countries-list'> <ul> { content } </ul> </section>
       </>
    );
};

export default Main;