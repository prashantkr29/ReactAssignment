import React,{useState} from 'react';
import './App.css';
import Cards from './Components/Cards'


function App() {
  const [categories,setcategories] = useState([]);
  let url = "https://api.chucknorris.io/jokes/categories"
  fetch(url)
  .then(response=>response.json())
  .then(data=>{
    setcategories(data);
  })
  .catch(err=>{
    console.log(err);
  })

  return (
    <>
      <div className="Home">
        <div className="header">
          <h1 className='hedaing'>Chuck Norris</h1>
        </div>
       {categories.map((category)=>{
        return <div className= 'col-md-4' key={category}>
          <Cards type={category}/>
        </div>
       })}
      </div>
    </>
  );
}

export default App;
