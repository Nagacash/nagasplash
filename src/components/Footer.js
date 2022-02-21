import { useContext} from 'react'
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
import MyContext from '../context/MyContext'

const Footer = () => {
  const { footerText } = useContext(MyContext);

  return (
   <footer className="flex">
     <p>{footerText}</p>
   </footer>
    
  
    
  )
}

export default Footer