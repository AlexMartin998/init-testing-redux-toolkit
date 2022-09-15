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
      state.isSaving = true;
      state.messageSaved = '';
    },

    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    setActiveNote: (state, { payload }) => {
      state.activeNote = payload;
      state.messageSaved = '';
    },
    setNotes: (state, { payload }) => {
      state.notes = payload;
    },

    // Actualizar el store
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map(note =>
        note.id === payload.id ? payload : note
      );

      // message
      state.messageSaved = `${payload.title}, successfully updated`;
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
