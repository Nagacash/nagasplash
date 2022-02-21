import { useState, useEffect } from 'react'

const Infiniteloop = () => {

const [data, setData] = useState(null)
const [count, setCount] = useState(0)

// componentDidMount = Ony run the side e
// component

// fetch('https://jsonplaceholder.typucode.com/post')
// .then(response => response.json())
// .then((data) => setData(data));

// useEffect(() => {
//   setCount((prevCount) => prevCount + 1);
// }, [count]);

  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);

console.log('rendered')

  return null;
}

export default Infiniteloop