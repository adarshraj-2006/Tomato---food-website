import React ,{useState} from 'react';
import './Home.css'
import Header from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
// filepath: d:\food-app\frontend\src\pages\home\home.jsx
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import { AppDownload } from '../../components/AppDownload/AppDownload.jsx';



export const Home = () => {
  
  const [category,setCategory] = useState("A11");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
        <AppDownload/>
    </div>
  )
}
export default Home;
