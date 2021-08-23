import { Container } from '@material-ui/core'
import { Grid, Paper } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NoteCard from '../components/NoteCard'


export default function Notes() {

  const [ notes, setNotes ] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/notes')
    .then(res => res.json())
    .then(data => setNotes(data))     
  }, [])

  const handleDelete = async id => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })

    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }
  return (
    <Container>     
      <Grid container spacing={2}>
        {notes.map(note  => (
          <Grid item key={note.id} xs={12} sm={6} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
