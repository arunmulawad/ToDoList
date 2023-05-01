import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";

const List = ({ items, editItem, deleteItem, handleChangeBox ,isChecked }) => {
  
  return (
    <div className="items">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="list-item" key={id}>
            <div className="checkTitle" >
              <input
                type="checkbox"
                id="checked"
                checked={isChecked}
                onClick={()=>{handleChangeBox(id)}}
              />
              <p className="title">
                {title}
              </p>
            </div>

            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteItem(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
