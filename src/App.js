import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

import ModalWindow from "./components/Modal";
import Tables from "./components/Tables";
import { resetAll } from "./store/inputsSlice";

function App() {

  /*=============HandleModal=============*/
  const [show, setShow] = React.useState(false);
  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    dispatch(resetAll())
  } 
  const handleShow = () => setShow(true);
/*=============HandleModal=============*/

  return (
    <div className="container">
      <h2 className="text-center">Notes APP</h2>

      <Tables
        theadTitle={["Name", "Created", "Category", "Content", "Dates"]}
        buttons={[
          { name: "Show active notes", icon: "far fa-clipboard" },
          { name: "Open archive", icon: "fas fa-archive" },
        ]}
        mode="main"
        handleShow={handleShow}
      />
      <div>
        <Row className="text-end">
          <Col>
            <Button
              className="mr-auto mb-5"
              variant="outline-dark"
              size="sm"
              onClick={handleShow}
            >
              Create note
            </Button>
            <ModalWindow handleClose={handleClose} show={show} />
          </Col>
        </Row>
      </div>

      <Tables
        theadTitle={["Note Category", "Active", "Archived"]}
        mode="summary"
      />
    </div>
  );
}

export default App;
