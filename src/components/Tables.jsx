import React from "react";
import { useSelector } from "react-redux";
import TableItem from "./TableItem";
import Table from "react-bootstrap/Table";
import { getActiveTasks } from "../utilites";

const Tables = ({ theadTitle, buttons, mode,handleShow }) => {
	const {notes, category} = useSelector(state => state.notesReducer);

  return (
         <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            {theadTitle &&
              theadTitle.map((item,id) => {
                return <th key = {id} scope="col">{item}</th>;
              })}

            {buttons && (
              <th scope="col">
                {buttons.map((btn,id) => {
                  return <i key = {id} className={btn.icon} title={btn.name}></i>;
                })}
              </th>
            )}
          </tr>
        </thead>

        <tbody id="table__body">
			{mode === "main" && <TableItem handleShow={handleShow} notes = {getActiveTasks(notes)}/>}
			{mode === "summary" && <TableItem category = {category} />}
			</tbody>
      </Table>
   
  );
};

export default Tables;
