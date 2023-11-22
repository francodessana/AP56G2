import { Grid } from "@mui/material";
import "./App.css";
import ListaTareas from "./components/ListaTareas";
import Footer from "./UI/Footer";
import Nav from "./UI/Nav";
function App() {
  return (
    <>
      <Grid
        container
        textAlign={"center"}
      >
        <Grid
          item
          xs={12}
        >
          <Nav />
        </Grid>

        <Grid
          m={"25px auto"}
          mt={"8vh"}
          sx={{
            border: "2px solid black",
            borderRadius: "10px",
            boxShadow: "1px 1px 10px",
            padding: "25px",
            backgroundColor: "#EBCA84",
          }}
        >
          <ListaTareas />
        </Grid>

        <Grid
          item
          xs={12}
        >
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
