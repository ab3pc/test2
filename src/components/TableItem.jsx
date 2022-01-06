import React from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../store/inputsSlice";
import { removeNote } from "../store/notesSlice";

const TableItem = ({ notes, category, handleShow }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeNote(id));
  };

  const handleEdit = (id) => {
    let currentNote = notes.find((item) => item.id === id);
    dispatch(
      setValues({
        name: currentNote.name,
        content: currentNote.content,
        category: currentNote.category.join(" "),
        id: id,
      })
    );

    handleShow();
  };
  

  return (
    <>
      {notes &&
        notes.map((item, index) => {
          return (
            <tr id={item.id} key={item.id}>
              <th>
                <i className={`${item.category[1]}`}></i>
                <span>{item.name}</span>
              </th>
              <td>{item.created}</td>
              <td>{item.category[0]}</td>
              <td>{item.content}</td>
              <td>{item.dates}</td>
              <td>
                <button
                  onClick={() => handleEdit(item.id)}
                  className="btns"
                  id="btn__edit"
                  type="button"
                >
                  <i className="btn__edit fas fa-pencil-alt"></i>
                </button>
                <button className="btns">
                  <i className="fas fa-archive" id="btn__archive"></i>
                </button>
                <button onClick={() => handleRemove(item.id)} className="btns">
                  <i className="fas fa-trash-alt" id="btn__delete"></i>
                </button>
              </td>
            </tr>
          );
        })}

      {category &&
        category.map((item, index) => {
          return (
            <tr key={index}>
              <th>
                <i className={`${item.icon}`}></i>
                <span>{item.name}</span>
              </th>
              <td>num</td>
              <td>num</td>
            </tr>
          );
        })}
    </>
  );
};

export default TableItem;
