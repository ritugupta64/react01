import React from "react";
import ItemList from "../ItemList/ItemList";

const List = ({ item, onDelete }) => {
  return (
    <ul>
      {item?.map((data, index) => {
        return (
         <ItemList item={data} key={index} id={index} onDelete = {onDelete} />
        );
      })}
    </ul>
  );
};

export default List;