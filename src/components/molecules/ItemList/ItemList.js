import React from "react";
import Button from "../../atoms/Button/Button";

const ItemList = ({ item, onDelete, id }) => {
  const { title, description } = item;

  const itemDel = () => {
      return onDelete(id)
  }

  return (
    <li>
      <div>
        {title} {description}
        <Button type="button" onClick={itemDel}>
          Del....
        </Button>
      </div>
    </li>
  );
};

export default ItemList;
