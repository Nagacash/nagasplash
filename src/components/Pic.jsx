import {useEffect} from 'react'
import Naga from '../assets/naga11.jpeg'

const Pic = () => {

    useEffect(() =>{
let interval = setInterval(() => {
    console.log('mounted')

    },1000);

return () => {
  clearInterval(interval)
  console.log('un-mounted')
}

},[])

  return (
    <aside>
        <img src={Naga} alt='' />
    </aside>
  )
}

export default Pic