import React, { useState } from "react";
import './Home.css';
import Header from '../../components/Header/Header.jsx';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
import AppDownload from '../../components/AppDownload/AppDownload.jsx';


const Home = () => {
  const [category, setCategory] = useState("all"); // default category shows all

  return (
    <div>
      {/* Give each section an ID for smooth scrolling */}
      <section id="home">
        <Header />
      </section>

      <section id="menu">
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </section>

      <section id="mobile-app">
        <AppDownload />
      </section>

     
    </div>
  );
};

export default Home;
