import { createSlice } from "@reduxjs/toolkit";
import { addIconName } from "../utilites";

const inputsSlice = createSlice({
  name: "inputsSlice",
  initialState: {
    inputs: 
      { name: "", content: "", category: "idea", id: "" },
    
  },
  reducers: {
    setName(state, action) {
      state.inputs.name = action.payload;
    },
    setContent(state, action) {
      state.inputs.content = action.payload;
    },
    setCategory(state, action) {
       //const {name, icon} = addIconName(action.payload);
   
      state.inputs.category=action.payload;
    
     
    },
    setId(state, action) {
      state.inputs.id = action.payload;
    
    },
    setValues(state, action) {
		let {name, content, id, category} = action.payload;
 		  state.inputs.name = name;
      state.inputs.category = category.name.toLowerCase();
      state.inputs.content = content;
      state.inputs.id = id;
    },

    resetAll(state, action) {
      state.inputs.name = "";
      state.inputs.content = "";
      state.inputs.category = "random";
      state.inputs.id = "";
    },
  },
});

export const { setName, setContent, setCategory, resetAll, setId, setValues } =
  inputsSlice.actions;

export default inputsSlice.reducer;
