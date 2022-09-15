import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';

import { useForm } from '../../hooks';

import { ImageGallery } from '../components';
import { setActiveNote, startSaveNote } from '../../store/journal';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { activeNote, messageSaved, isSaving } = useSelector(
    state => state.journal
  );
  const { body, title, date, handleInputChange, formValues, setFormValuesFx } =
    useForm(activeNote);

  const dateString = useMemo(() => {
    const dateFormat = new Date(date);
    return dateFormat.toUTCString();
  }, [date]);

  useEffect(() => {
    setFormValuesFx(activeNote);
  }, [activeNote]);

  // Con cada cambio en el form/note se actualice la activeNote
  useEffect(() => {
    dispatch(setActiveNote(formValues));
  }, [formValues]);

  // Con c/updated cambia el messageSaved y se dispara este effect
  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Good job!', messageSaved, 'success');
    }
  }, [messageSaved]);

  const handleSaveNote = () => {
    dispatch(startSaveNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={handleSaveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardad
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={handleInputChange}
        />
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio hoy?"
          minRows={3}
          name="body"
          value={body}
          onChange={handleInputChange}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
