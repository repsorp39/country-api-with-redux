import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from "react-icons/io5";
import { getCountryByCode, getCountryByName } from '../features/country/countrySlice';
import Header from '../components/Header';

const CountryCard = () => {
    const navigate = useNavigate();
    const { name } = useParams();

    const country = useSelector(state => getCountryByName(state,name));

    const borderList = country?.borders ?? [];
    const borderCountries = useSelector(state => getCountryByCode(state, borderList ));
    const formattedBorder = borderCountries.map(border  => <span key={border}> { border } </span>);

    const languages = Object.keys(country?.languages ?? {}).map(codeLang =>country?.languages[codeLang])?.join(", ");

    const codeLang = (Object.keys(country?.name?.nativeName ??{}))[0] ?? "";
    const codeCurrency = (Object.keys(country?.currencies ?? {}))[0] ?? "" ;

    const btnBack = <div className='btn-back' onClick={ () =>navigate(-1) }> <button > <IoArrowBack /> Back </button> </div>;

    if(!country) return <> 
        <Header />
        <> { btnBack } </>
        <h1 className='not-found'> No country called "{ name }" </h1>
     </>;
    return (
        <>
          <Header />
          <> { btnBack } </>
            <article className='single-country'>
                <div> <img src={country.flags.png} alt={country.name.common} /> </div>
                <section>
                    <h2> { country.name.common } </h2>
                    <div className='info-country'>
                        <ul>
                            <li><strong>Native name: </strong> {country.name.nativeName[codeLang].official} </li>
                            <li><strong>Population: </strong> {Number(country.population).toLocaleString("en-EN") } </li>
                            <li><strong>Region: </strong> { country.region } </li>
                            <li><strong>Sub Region: </strong> {country.subregion} </li>
                            <li><strong>Capital: </strong> {country?.capital ? country.capital[0]:""} </li>
                        </ul>
                        <ul>
                            <li><strong>Top Level Domain: </strong> {country.tld[0]} </li>
                            <li><strong>Currencies: </strong> {country?.currencies?.[codeCurrency]?.name} </li>
                            <li><strong>Languages: </strong> { languages } </li>
                        </ul>
                    </div>

                   <div className='border-country'><strong>Border Countries: </strong>{ formattedBorder } </div>
                </section>
            </article>
        </>)
};

export default React.memo(CountryCard);