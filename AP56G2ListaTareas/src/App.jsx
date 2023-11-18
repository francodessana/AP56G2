import { Grid } from '@mui/material'
import './App.css'
import ListaTareas from './components/ListaTareas'
import Footer from './UI/Footer'
import Nav from './UI/Nav'
function App() {
  
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Nav/>
          <ListaTareas />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
        
      
      
        
      
    </>
  )
}

export default App
