import { Grid } from '@mui/material'
import './App.css'
import ListaTareas from './components/ListaTareas'
import Footer from './UI/Footer'
import Nav from './UI/Nav'
function App() {

  return (
    <>
      <Grid container textAlign={'center'}>
        <Grid item xs={12}>
          <Nav />
        </Grid>

        <Grid m={'25px auto'}>
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
