import React from 'react'
import Typography  from '@material-ui/core/Typography'
import Button  from '@material-ui/core/Button'
import { Container, TextField, Radio, RadioGroup, FormControlLabel, FormLabel, FormControl } from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { makeStyles } from '@material-ui/core'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'


const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block'
  }
})


export default function Create() { 
    
  const classes = useStyles()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('todos')

  const handleSubmit = e => {
    e.preventDefault()
    setTitleError(false)
      setDetailsError(false)

    if(title.trim() === '') setTitleError(true)
    if(details.trim() === '')  setDetailsError(true)

    if(title && details) {
      fetch('http://localhost:8000/notes', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({
          title, details, category
        })
      }).then(() => history.push('/'))
      return
    }
    
  }

  return (
    
    <Container>      
      <Typography        
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}  
          label="Note title"
          color="secondary"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}  
          label="Details"
          color="secondary"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl className={classes.field}>
          <FormLabel color="secondary">Note category</FormLabel>
          <RadioGroup value={category} onChange={(e) =>  setCategory(e.target.value)}>
          <FormControlLabel value="money" control={<Radio />}  label="money" />
          <FormControlLabel value="todos" control={<Radio />}  label="todos" />
          <FormControlLabel value="reminders" control={<Radio />}  label="reminders" />
          <FormControlLabel value="work" control={<Radio />}  label="work" />        
          </RadioGroup>
        </FormControl>
        

        <Button                
            type="submit"
            color="secondary"
            variant="contained"                 
            endIcon={<ArrowForwardIosIcon/>}
          >
            Submit
          
        </Button>    
      </form>
      <Link to='/' />

      
      

    </Container>
    
  )
}
