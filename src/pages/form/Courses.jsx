import React from "react";
import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

const currencies = [
  {
    value: "FrontEnd",
    label: "FrontEnd",
  },
  {
    value: "BackEnd",
    label: "BackEnd",
  },
  {
    value: "Embedded systems",
    label: "Embedded systems",
  },
];

export default function Courses() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
  };
  return (
    <>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Create New Course
        </Stack>

        <TextField
          id="outlined-select-currency"
          select
          label="Select RoadMap"
          defaultValue="FrontEnd"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField label="Course Name " variant="filled" />
        <TextField label="Course Description" variant="filled" />

        <Box sx={{ textAlign: "right" }}>
          <Button type="submit" variant="contained">
            Create New Course
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Course added successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
