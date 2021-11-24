import React from "react";
import { useDispatch } from "react-redux";
import { getListMajorsByScience } from "../../actions/majorAction";
function CardScience({ science }) {
  const dispatch = useDispatch();
  const handlOnClick = (e) => {
    e.preventDefault();
    dispatch(getListMajorsByScience(science));
  };
  return (
    <div
      className="flex justify-center items-center h-60 w-full mx-4"
      onClick={handlOnClick}
    >
      <button
        className=" items-center bg-green-600 p-2 rounded-lg min-w-full text-white flex justify-center text-center
       hover:bg-green-800"
      >
        {science.tenkhoa}
      </button>
    </div>
  );
}

export default CardScience;
