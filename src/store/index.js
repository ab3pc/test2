import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
import inputsSlice from "./inputsSlice";


export default configureStore({
	reducer: {
		notesReducer,
		inputsSlice
	}
})