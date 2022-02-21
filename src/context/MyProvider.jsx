import { useState, useEffect } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [data, setData] = useState({
        results: null,
        loading: true,
        error: null,
    });
    const [search, setSearch] = useState("Rap");
    const [searchInput, setSearchInput] = useState("");
    const [page, setPage] = useState(1);



//DATA -     Get the API Key from .env file.
const API_KEY = process.env.REACT_APP_API_KEY;
//const URI = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=10&query=${search}`;
const URI = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=10&query=${search}&page=${page}`;
const submitHandler = (e) => {
  e.preventDefault();
  setSearch(searchInput);
  setSearchInput("");
};

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URI);
        const results = await response.json();
        setData({ results, loading: false, error: null });
      } catch (error) {
        setData({ results: null, loading: false, error });
      }
    };
    fetchData();
  }, [URI]);



  //  Footer and Header text
    const headerText = "NAGASPLASH - free images royalty free";
    const footerText = "@ Naga Apparel 2022";


// Provider for App.js
    return (
        <MyContext.Provider value={{  data, headerText, submitHandler,footerText, search, setSearch, searchInput, setSearchInput, page, setPage }}>
            {children}
        </MyContext.Provider>
    )
};


export default MyProvider