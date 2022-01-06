import { createSlice } from "@reduxjs/toolkit";

const inputsSlice = createSlice({
  name: "inputsSlice",
  initialState: {
    inputs: 
      { name: "", content: "", category: "Random fas fa-brain", id: "" },
    
  },
  reducers: {
    setName(state, action) {
      state.inputs.name = action.payload;
    },
    setContent(state, action) {
      state.inputs.content = action.payload;
    },
    setCategory(state, action) {
      state.inputs.category = action.payload;
     
    },
    setId(state, action) {
      state.inputs.id = action.payload;
    
    },
    setValues(state, action) {
		let {name, content, id, category} = action.payload;
		state.inputs.name = name;
      state.inputs.content = content;
      state.inputs.category = category;
      state.inputs.id = id;
    },

    resetAll(state, action) {
      state.inputs.name = "";
      state.inputs.content = "";
      state.inputs.category = "Random fas fa-brain";
      state.inputs.id = "";
    },
  },
});

export const { setName, setContent, setCategory, resetAll, setId, setValues } =
  inputsSlice.actions;

export default inputsSlice.reducer;
