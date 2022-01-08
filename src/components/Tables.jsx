import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TableItem from "./TableItem";
import Table from "react-bootstrap/Table";
import { getActiveTasks, getArchiveTask } from "../utilites";
import { setArchiveMode, setTotalNotes } from "../store/notesSlice";

const Tables = ({ theadTitle, buttons, mode, handleShow }) => {
  const { notes, category, total } = useSelector((state) => state.notesReducer);

  const [showAcrhive , setShowArchive] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(setTotalNotes());
  }, [notes]);

  let currentNotes = showAcrhive ? getArchiveTask(notes) : getActiveTasks(notes);

  const switchToArchive = () => {
    setShowArchive(true);
    dispatch(setArchiveMode());
  };

  const switchToActive = () => {
    dispatch(setArchiveMode());
    setShowArchive(false);
  };

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          {theadTitle &&
            theadTitle.map((item, id) => {
              return (
                <th key={id} scope="col">
                  {item}
                </th>
              );
            })}

          {buttons && (
            <th scope="col" className="text-center">
              <i
                onClick={switchToActive}
                className={`btn__tables ${buttons[0].icon}`}
                title={buttons[0].name}
              ></i>
              <i
                onClick={switchToArchive}
                className={`btn__tables ${buttons[1].icon}`}
                title={buttons[1].name}
              ></i>

              {/* {buttons.map((btn,id) => {
                  return <i onClick={switchToArchive} key = {id} className={`btn__tables ${btn.icon}`} title={btn.name}></i>;
                })} */}
            </th>
          )}
        </tr>
      </thead>

      <tbody id="table__body">
        {mode === "main" && (
          <TableItem handleShow={handleShow} notes={currentNotes} />
        )}
        {mode === "summary" && <TableItem category={category} total={total} />}
      </tbody>
    </Table>
  );
};

export default Tables;
