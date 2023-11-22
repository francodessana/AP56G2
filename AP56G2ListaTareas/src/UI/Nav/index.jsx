import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="p"
            sx={{ alignItems: "center" }}
          >
            Argentina Programa Desarrollo en React JS
          </Typography>
          <img
            className="logo"
            src="https://www.argentina.gob.ar/sites/default/files/untitled-3-01_2.png"
            alt="logo"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
