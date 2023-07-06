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
          <h1 className='hedaing'>Chuck Norries</h1>
        </div>
        <div className="row">
       {categories.map((category)=>{
        return <div className="col-md-3" key={category}>
          <Cards type={category}/>
        </div>
       })}
       </div>
      </div>
    </>
  );
}

export default App;
