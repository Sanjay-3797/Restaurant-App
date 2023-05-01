import React from "react";
import MealSummary from "./MealsSummury";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};
export default Meals;
