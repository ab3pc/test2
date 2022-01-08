import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../store/notesSlice";
import {resetAll, setCategory, setContent, setName} from "../store/inputsSlice";
import { Button, Form } from "react-bootstrap";


const Forms = ({ handleClose }) => {

  const { name, content, category, id } = useSelector(
    (state) => state.inputsSlice.inputs
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();  
    console.log(category)
     dispatch(addNote({ category, name, content, id }));
    handleClose();
    dispatch(resetAll());
  };

  return (
    <Form onSubmit={handleSubmit} id="form">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={name}
          onChange={(e) => dispatch(setName(e.target.value))}
          name="name"
          type="text"
          placeholder="Shopping list"
          required
          minLength="3"
          maxLength="20"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          value={content}
          onChange={(e) => dispatch(setContent(e.target.value))}
          name="content"
          placeholder="Some Text"
          as="textarea"
          rows={2}
          required
          minLength="3"
          maxLength="40"
        />
      </Form.Group>

      <Form.Select
        defaultValue={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        name="category"
        aria-label="Default select example"
      >
        <option value="task">Task</option>
        <option value="random">Random</option>
        <option value="quote">Quote</option>
        <option value="idea">Idea</option>
      </Form.Select>
      <Form.Control name="id" hidden />

      <div className="text-end mt-3">
        <Button
          className="me-2"
          variant="outline-secondary"
          onClick={handleClose}
        >
          Close
        </Button>
        <Button type="submit" variant="secondary">
          Save Changes
        </Button>
      </div>
    </Form>
  );
};

export default Forms;
