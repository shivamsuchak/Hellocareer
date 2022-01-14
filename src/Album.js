import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
//import { Link } from "@mui/material";
import CardComponent from "./CardComponent";
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      <Link color="inherit" href="https://mui.com/"></Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
let genDev = 0;
const theme = createTheme();

export default function Album() {
  const [age, setAge] = React.useState("");
  const [raisec, setRaisec] = React.useState(null);
  const [jobs, setJobs] = React.useState([]);
  const [err, setErr] = React.useState(null);
  const [index, setIndex] = React.useState(0);


  const postApi = (riasec, subcat) => {
    fetch("http://www.hellocareer.tk:8000/jobs/stage/two", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(raisec, subcat),
    }).then(() => {
      console.log("posted");
    });
  };

  const toCardCompo = () =>{
    setJobs(jobs)
  }

  const directory = "./";
  const fs = require("fs");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              RAISEC
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              SELECT
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <div>
                {/* <Link to="/raisec"> */}
                  <Button
                    style={{ backgroundColor: "blue" }}
                    variant="contained"
                    onClick={() => {
                      // fetchApi("Realistic");
                      setRaisec("Realistic");
                      <CardComponent name={"Realistic"}></CardComponent>
                    }}
                  >
                    Realistic
                  </Button>
                {/* </Link> */}
                <CardComponent> </CardComponent>
                &nbsp;&nbsp;&nbsp;
                <Button
                  style={{ backgroundColor: "blue" }}
                  variant="contained"
                  onClick={() => {
                    setRaisec("Artistic");
                    //fetchApi("Artistic");
                    console.log(jobs);
                  }}
                >
                  Artistic
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  style={{ backgroundColor: "blue" }}
                  variant="contained"
                  onClick={() => {
                    //fetchApi("Investigative");
                    setRaisec("Investigative");
                  }}
                >
                  Investigative
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  style={{ backgroundColor: "blue" }}
                  variant="contained"
                  onClick={() => {
                    //fetchApi("Social");
                    setRaisec("Social");
                  }}
                >
                  Social
                </Button>
                &nbsp;&nbsp;&nbsp;
                <br />
                <br />
                <Button
                  style={{ backgroundColor: "blue" }}
                  variant="contained"
                  onClick={() => {
                    //fetchApi("Enterprising");
                    setRaisec("Enterprising");
                  }}
                >
                  Enterprising
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  style={{ backgroundColor: "blue" }}
                  variant="contained"
                  onClick={() => {
                    //fetchApi("Conventional");
                    setRaisec("Conventional");
                  }}
                >
                  Conventional
                </Button>
              </div>
              <br />
              <br />
            </Stack>
            {err && (
              <>
                <h2 style={{ color: "Red" }}>{err}</h2>
              </>
            )}
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Hello Career
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
