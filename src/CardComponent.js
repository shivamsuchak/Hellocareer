import { Button, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

const CardComponent = ({ name }) => {
    const [err, setErr] = useState(null);

  fetch("http://www.hellocareer.tk:8000/jobs/riasec/" + name)
    .then((res) => {
      if (!res.ok) {
        throw Error("Something went wrong");
      } else {
        setErr(null);
      }
      return res.json();
    })
    .then((res) => {
      //setJobs(res);
      console.log(res);
    })
    .catch((err) => {
      setErr(err.message);
    });

  const [index, setIndex] = useState(0);
  const incrementState = () => {
    setIndex(index + 1);
  };
  return (
    <>
      <Card>
        <CardContent>
          <Typography>{console.log()}</Typography>
          <Button
            onClick={() => {
              incrementState();
              console.log(index);
            }}
          ></Button>
        </CardContent>
      </Card>
    </>
  );
};

export default CardComponent;
