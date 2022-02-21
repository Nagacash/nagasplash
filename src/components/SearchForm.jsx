



import { useEffect, useContext} from "react";
import MyContext from '../context/MyContext'

const SearchForm = ({ inputRef }) => {

const {searchInput, setSearchInput, submitHandler} = useContext(MyContext)

useEffect(() => {
inputRef.current.focus()

},[])

  return (
<>
    <h3 className="text-center font2"><span className="text-light">Nagasplash</span>
The internet’s source of freely-usable images.
<span className="text-light">Powered by creators all round the world.</span></h3>
<div></div><i class="fa-solid fa-camera-retro"></i>


    <form className="text-center size text-dark m-2">
      <input className="bg-light text-dark text-center"
      ref={inputRef}
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className="m-5" id="mr" onClick={(e) => submitHandler(e)}>Search</button>
    </form>
    </>

  );
};
export default SearchForm;