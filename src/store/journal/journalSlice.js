import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',

  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
  },

  reducers: {
    // Toolkit nos permite escribir codigo mutante, pero NO muta el state
    savingNewNote: state => {
      state.isSaving = true;
    },
    setSaving: state => {
      //
    },

    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload;
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },

    updateNote: (state, { payload }) => {
      //
    },
    deleteNoteByID: (state, { payload }) => {
      //
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  deleteNoteByID,
  savingNewNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} = journalSlice.actions;
