import { createSlice } from "@reduxjs/toolkit";
import { addIconName, parseDates } from "../utilites";

const notesSlice = createSlice({
  name: "noteStore",
  initialState: {
    notes: [
      {
        id: 1,
        name: "Shopping list",
        created: "May 05, 2021",
        category: { name: "Task", icon: "fas fa-shopping-cart" },

        content: "Some Text",
        dates: "3/5/2021",
        active: true,
      },
      {
        id: 2,
        name: "The theory of evolution",
        created: "May 07, 2021",
        category: { name: "Random", icon: "fas fa-brain"},
        content: "The theory of evolu...",
        dates: "",
        active: true,
      },
      {
        id: 3,
        name: "New Feature",
        created: "Jun 01, 2021",
        category: { name: "Idea", icon: "far fa-lightbulb" },
        content: "New Feature",
        dates: "",
        active: true,
      },
      {
        id: 4,
        name: "Bruce Lee",
        created: "Jun 02, 2021",
        category: { name: "Quote", icon: "fas fa-quote-right" },
        content: "Be like water !",
        dates: "",
        active: true,
      },
      {
        id: 5,
        name: "Books",
        created: "Jun 03, 2021",
        category: { name: "Task", icon: "fas fa-shopping-cart" },
        content: "Buy some about JS",
        dates: "",
        active: true,
      },
      {
        id: 6,
        name: "Archived Archived",
        created: "Jan 01, 2021",
        category: { name: "Task", icon: "fas fa-shopping-cart" },
        content: "I haven't no idea :)",
        dates: "",
        active: false,
      },
      {
        id: 7,
        name: "Another Archived notes",
        created: "Jan 03, 2022",
        category: { name: "Quote", icon: "fas fa-quote-right" },
        content: "I need more information",
        dates: "",
        active: false,
      },
    ],
    category: [
      {
        name: "Task",
        icon: "fas fa-shopping-cart",
      },
      {
        name: "Random",
        icon: "fas fa-brain",
      },
      {
        name: "Quote",
        icon: "fas fa-quote-right",
      },
      {
        name: "Idea",
        icon: "far fa-lightbulb",
      },
    ],
    total: {
      notesCountActive: [],
      notesCountArc: [],
    },
    archiveMode: false,
  },
  reducers: {
    addNote(state, action) {
      let { category, name, content, id } = action.payload;
      
      if (id) {
        let editNotes = state.notes.map((item) => {
          if (item.id === id) {
            item.content = content;
            item.dates = parseDates(content);
            item.name = name;
            item.category = addIconName(category);
            return item;
          }
          return item;
        });
        state.notes = editNotes;
        return;
      }
      let newTask = {
        id: new Date().toISOString(),
        name: name,
        created: new Date().toString().split(" ").splice(1, 3).join(" "),
        category : addIconName(category),
        content: content,
        dates: parseDates(content),
        active: true,
      };

      state.notes.push(newTask);
    },
    removeNote(state, action) {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },
    archiveNote(state, action) {
      state.notes = state.notes.map((item) => {
        if (item.id === action.payload) {
          item.active = !item.active;
          return item;
        }
        return item;
      });
    },
    setTotalNotes(state, action) {
      for (let i = 0; i < state.category.length; i++) {
        let catTask = state.notes.filter(
          (item) => item.category.name === state.category[i].name
        );
        state.total.notesCountActive[i] = catTask.filter(
          (item) => item.active
        ).length;
        state.total.notesCountArc[i] = catTask.filter(
          (item) => !item.active
        ).length;
      }
    },
    setArchiveMode(state, action) {
      state.archiveMode = !state.archiveMode;
    },
  },
});

export const {
  addNote,
  removeNote,
  archiveNote,
  setTotalNotes,
  setArchiveMode,
} = notesSlice.actions;

export default notesSlice.reducer;
