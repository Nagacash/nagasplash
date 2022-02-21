import { useState, useEffect, useRef, useContext } from "react";
import SearchForm from "./SearchForm";
import MyContext from '../context/MyContext'




const Unsplash = () => {



  const {data, searchInput, setSearchInput, submitHandler, page, setPage} = useContext(MyContext)
 

const inputRef = useRef()
console.log(inputRef);



  

  if (data.loading) return <p>Loading.......</p>;
  if (data.error) return <p>{data.error}</p>;
  const imageList = data.results.results.map((image) => (
    <img className="m-3 flex" key={image.id} src={image.urls.thumb} alt={image.alt_description} />
  ));

  const totalPages = data.results.total_pages;

  return (
    <div className="flex" id="mr">
      <SearchForm
      inputRef={inputRef}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        submitHandler={submitHandler}
      />




 {imageList}
 <div id="mr">
 {page > 1 && (
          <button id="mr2" onClick={() => setPage((prevPage) => prevPage - 1)}>
            Previous
          </button>
        )}
       
        {page < totalPages && (
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            Next
          </button>
        )}


 </div>

</div>

  );
};

export default Unsplash;