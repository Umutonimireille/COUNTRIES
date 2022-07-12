import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill ,BsFillSunFill} from "react-icons/bs";
import "../components/country.css";
import Search from './search'


function Country() {

  const moon = document.getElementById("moon");
  function change(){

    moon.addEventListener('click',moon.innerHTML(BsFillSunFill))
  }

  
  const [light ,setLight ] = useState(false);
  const [theme,setTheme] = useState('');
  const [q, setQ] = useState([]);
  const [Search, setSearch] = useState();
  

  useEffect(() => {
       setTheme(light ? "dark" : "");

  })

  const [countries, setCountries] = useState([]);
  async function MT() {
    const api = await fetch("https://restcountries.com/v2/all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await api.json();
    setCountries(data);
  }
  useEffect(() => {
    MT();
  }, []);0

  setQ(countries).filter((value) => {
    if(setSearch === ""){
      return value;
    }else if (
      value.name.toLowerCase().includes(setSearch.toLowerCase())
    ){
      return value;
    }
   })
  return (
    <body className={theme}>
    <div className=" text-gray-200 body   dark:bg-white dark:text-black">
      <div className="nav shadow-2xl h-[60px]">
        <h1 className="country ml-3 text-2xl "> COUNTRIES ARE HERE  </h1>
        <i className="float-right mr-5" id = "moon">
          <BsFillMoonFill onClick={()=>{setLight(!light)
          console.log(theme)} }/>
        </i>
        <h2 className="float-right  mr-6">Dark mode</h2>
      </div>
      <div className="">
        <div className="flex ml-7 ">
          <input type="text" className="mt-8 shadow-2xl w-[20%] h-9" placeholder="    enter your country name"    onChange={(e) => setSearch(e.target.value)}/>
          <button className="w-[5%]  bg-slate-500 text-black ml-3 mt-6 rounded-xl">search</button>
        </div>
   

        <div className="box grid grid-cols-4">
          {countries.map((country) => {
            // console.log(country);
            // country.map((item)=>{

              return (
                // const flags = {country.flags};
                // (country.flags)
                <div className="flex flex-row mt-6 justify-between">
                  <figure>
                <img src={country.flag}  className = 'w-[90%] ml-2'/>
                {/* <figcaption>{country.name}</figcaption> */}
                <p className=" text-1xl justify-center text-center"> NAME:{country.name}</p>
                <p className=" text-1xl justify-center text-center"> CAPITAL:{country.capital}</p>
                {/* <p className=" text-1xl justify-center text-center">LANGUAGE:{country.lang}</p> */}
                {/* <p className=" text-1xl justify-center text-center">CURRENCY:{country.currency}</p> */}
                </figure>
              
            </div>
            );
          // })
            
          })}
            </div>
      </div>
    </div>
    </body>
  );
}

export default Country;
