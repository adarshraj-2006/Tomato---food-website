import { useParams, Link } from "react-router-dom";
import { food_list } from "../../assets/assets";
import FoodItem from "../../components/FoodItem/FoodItem";
import "./FoodDetail.css";

const FoodDetail = () => {
  const { id } = useParams();

  const food = food_list.find(item => item._id === id);

  if (!food) {
    return <h2 style={{ textAlign: "center" }}>Food not found</h2>;
  }

  // Same category foods
  const sameCategory = food_list.filter(
    item => item.category === food.category && item._id !== food._id
  );

  // Different category foods
  const differentCategory = food_list
    .filter(item => item.category !== food.category)
    .slice(0, 4);

  return (
    <div className="food-detail-page">

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span> / </span>
        <Link to="/contact">Contact</Link>
        <span> / </span>
        <span>{food.name}</span>
      </div>

      {/* Food Main Info */}
      <div className="food-detail-container">
        <img src={food.image} alt={food.name} />

        <div className="food-detail-info">
          <h1>{food.name}</h1>
          <p>{food.description}</p>
          <h2>${food.price}</h2>
        </div>
      </div>

      {/* Same Category */}
      <h2 className="section-title">Similar Items</h2>
      <div className="food-detail-list">
        {sameCategory.map(item => (
          <FoodItem key={item._id} id={item._id} {...item} />
        ))}
      </div>

      {/* Different Category */}
      <h2 className="section-title">You May Also Like</h2>
      <div className="food-detail-list">
        {differentCategory.map(item => (
          <FoodItem key={item._id} id={item._id} {...item} />
        ))}
      </div>

    </div>
  );
};

export default FoodDetail;
