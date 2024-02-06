import React from "react";
import { useSelector } from "react-redux";
import "./style.scss";

const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);

  console.log(genres); // Move console.log outside of the return statement

  return (
    <div className="genres">
      {data?.map((g) => {
        if (!genres[g]?.name) return null; // Return null instead of just returning
        return (
          <div key={g} className="genre">
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};

export default Genres;
