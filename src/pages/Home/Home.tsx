import React, { useState } from "react";
import './Home.css';
import MainLayout from '../../components/layout/MainLayout/MainLayout';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import RestaurantDisplay from '../../components/RestaurantDisplay/RestaurantDisplay';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import FoodSection from '../../components/FoodSection/FoodSection';
import { food_list } from '../../assets/assets';
import AppDownload from '../../components/AppDownload/AppDownload';


const Home = () => {
  const [category, setCategory] = useState("all"); // default category shows all


  return (
    <MainLayout>
      <div>
        {/* Give each section an ID for smooth scrolling */}
        <section id="home">
          <Header />
        </section>


        <section id="menu">
          <ExploreMenu category={category} setCategory={setCategory} />
          <RestaurantDisplay />

          {/* New Sections from Assets */}
          <FoodSection title="Most Popular" items={food_list.slice(0, 8)} />
          <FoodSection title="Vegetarian Delights" items={food_list.filter(item => item.category === 'Salad' || item.category === 'Pure Veg' || item.category === 'Rolls').slice(0, 4)} />
          <FoodSection title="Sweet Cravings" items={food_list.filter(item => item.category === 'Deserts' || item.category === 'Cake').slice(0, 4)} />

          <FoodDisplay category={category} />
        </section>

        <section id="mobile-app">
          <AppDownload />
        </section>


      </div>
    </MainLayout>
  );
};

export default Home;
