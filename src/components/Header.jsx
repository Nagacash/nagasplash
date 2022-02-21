import { useContext } from 'react';

import MyContext from '../context/MyContext'


  

const Header = () => {
    const { headerText, extra, setExtra } = useContext(MyContext)

  return (
    <header className="bg-primary flex text-center cen">
        <h1 className="font text-center cen">{headerText}</h1>
    </header>
  );
    


};

export default Header;