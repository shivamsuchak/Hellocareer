import { AppBar, Toolbar, Typography } from "@mui/material";

const Navbar = () => {
  return(
    <AppBar
      position="relative"
      style={{ backgroundColor: "blue", borderRadius: "0px 30px 30px 0px" }}
    >
      <Toolbar>
        {/* <CameraIcon sx={{ mr: 2 }} /> */}
        <Typography variant="h6" color="inherit" noWrap>
          Hello Career
        </Typography>
      </Toolbar>
    </AppBar>)
};

export default Navbar;
