import React from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../store/inputsSlice";
import { archiveNote, removeNote} from "../store/notesSlice";

const TableItem = ({ notes, category, handleShow, total }) => {
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
        category: currentNote.category,
        id: id,
      })
    );
    handleShow();
  };

  const handlePushToArchive = (id) => {
         dispatch(archiveNote(id))
  }


  return (
    <>
      {notes &&
        notes.map((item, index) => {
          return (
            <tr id={item.id} key={item.id}>
              <th>
                <i className={`btn__name ${item.category.icon}`}></i>
                <span>{item.name}</span>
              </th>
              <td>{item.created}</td>
              <td>{item.category.name}</td>
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
                <button className="btns" onClick = {() => handlePushToArchive(item.id)}>
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
                <i className={`btn__name ${item.icon}`}></i>
                <span>{item.name}</span>
              </th>
              <td>{total.notesCountActive[index]}</td>
              <td>{total.notesCountArc[index]}</td>
            </tr>
          );
        })}
    </>
  );
};

export default TableItem;
