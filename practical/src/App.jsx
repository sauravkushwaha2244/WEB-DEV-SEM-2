import { useState, useEffect } from "react";

function App() {
  const foodApi =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian";

  const logoImg =
    "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png";

  const cartIconImg =
    "https://cdn-icons-png.flaticon.com/512/833/833314.png";

  const [foods, setfoods] = useState([]);
  const [cart, setcart] = usestate([]);
  const [showcartPage, setshowcartpage] = usestate([]);
  //fetching api
 
  useEffect(() => {
    fetch(foodApi)
      .then((res) => res.json())
      .then((data) => setFoods(data.meals || []));
  }, []);
  const header =()=>{
    return{
      <div style={style.header}>
      <img src={logoImg} style={style.logo}/>

    }
    <input type="text" placeholder="search food ..." style={style.input}/>
    <div 
  }</div>

  




  export default App;