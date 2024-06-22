import './App.css';
import Content from './Content.js'

import { useState, useEffect } from 'react';

function App() {
  

  const [items, setItems] = useState([])
  const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users")
  const [fetchError, setFetchError] = useState(null)

  useEffect(() => {
    
    const fetchItems = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) throw Error("Did not receive data")
        const listItems = await response.json()
        setItems(listItems)
        setFetchError(null)
      } catch (err) {
        console.log(err.stack)
        setFetchError(err.message)
      } 
    }
    (async () => await fetchItems())()
  }, [url])



  return (
    <div >
      <Content
      items={items}
      setUrl={setUrl}
      />
    </div>
  );
}

export default App;
