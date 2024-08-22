import { Alert, Button, MenuItem, Snackbar, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import React from "react";
import { useForm, Controller } from "react-hook-form";

const regName = /([a-zA-Z\s]+)/;
const regUserName = /([a-zA-Z0-9_\s]+)/;

const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regNumber = /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
const regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

const role = [
  {
    value: "Admin",
    label: "Admin",
  },

  {
    value: "User",
    label: "User",
  },
];

const country = [
  {
    value: "Egypt",
    label: "Egypt",
  },

  {
    value: "KSA",
    label: "KSA",
  },
];

const city = [
  {
    value: "Giza",
    label: "Giza",
  },

  {
    value: "Cairo",
    label: "Cairo",
  },

  {
    value: "Fayoum",
    label: "Fayoum",
  },
];

export default function Form() {
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
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => {
    handleClick();
    mode: "onChange";
  };

  const password = watch("password");

  const validateConfirmPassword = (value) => {
    if (value !== password) {
      return "Passwords don't match";
    }
    return true;
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
        <Stack sx={{ gap: 2 }} direction={"row"}>
          {/* FirstName */}

          <TextField
            sx={{ flex: 1 }}
            label="Name"
            variant="filled"
            // 50-56=> for validation
            error={Boolean(errors.firstName)}
            helperText={
              errors.firstName
                ? "This Field is required & min 3 characters"
                : null
            }
            {...register("firstName", {
              required: true,
              minLength: 3,
              pattern: regName,
            })}
          />

          {/* LastName */}

          <TextField
            // next lines for validation
            error={Boolean(errors.lastName)}
            helperText={
              errors.lastName
                ? "This Field is required & min 3 characters"
                : null
            }
            {...register("lastName", {
              required: true,
              minLength: 3,
              pattern: regUserName,
            })}
            sx={{ flex: 1 }}
            label="UserName"
            variant="filled"
          />
        </Stack>
        {/* Email */}
        {/* <TextField // next lines for validation
          error={Boolean(errors.email)}
          helperText={
            errors.email ? "please provide a valid email address" : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        /> */}
        {/* Test mail */}
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: regEmail,
              message: "Please provide a valid email address",
            },
            minLength: {
              value: 6,
              message: "Email must be at least 6 characters long",
            },
            maxLength: {
              value: 30,
              message: "Email must not exceed 30 characters",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="filled"
              error={Boolean(errors.email)}
              helperText={errors.email ? errors.email.message : null}
            />
          )}
        />
        {/* end test mail */}
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            sx={{ flex: 1 }}
            id="outlined-number"
            variant="filled"
            label="Age"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              min: 12,
              max: 50,
            }}
          />
          <TextField
            sx={{ flex: 1 }}
            variant="filled"
            id="outlined-select-currency"
            select
            label="role"
            defaultValue="User"
          >
            {role.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <Stack sx={{ gap: 2 }} direction={"row"}>
          <TextField
            sx={{ flex: 1 }}
            variant="filled"
            id="outlined-select-currency"
            select
            label="Counrty"
            defaultValue="User"
          >
            {country.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            sx={{ flex: 1 }}
            variant="filled"
            id="outlined-select-currency"
            select
            label="City"
            defaultValue="User"
          >
            {city.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
        <TextField
          error={Boolean(errors.phone)}
          helperText={
            errors.phone ? "please provide a valid phone Number" : null
          }
          {...register("phone", { required: true, pattern: regNumber })}
          label="Contact Number"
          variant="filled"
        />
        {/* Password */}
        {/* <TextField
          error={Boolean(errors.password)}
          helperText={errors.password ? "please provide a valid password" : null}
          {...register("password", { required: true, pattern: regPassword })}
          label="Password"
          variant="filled"
        /> */}
        {/* testttt */}
        <Controller
          name="password"
          control={control}
          rules={{ required: true, pattern: regPassword }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Password"
              variant="filled"
              type="password"
              error={Boolean(errors.password)}
              helperText={
                errors.password ? "Please provide a valid password" : null
              }
            />
          )}
        />
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: true,
            validate: validateConfirmPassword,
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label="Confirm Password"
              variant="filled"
              type="password"
              error={Boolean(errors.confirmPassword)}
              helperText={
                errors.confirmPassword ? errors.confirmPassword.message : null
              }
            />
          )}
        />
        {/* endddd */}
        <Box sx={{ flex: 1 }}>
          <Button type="submit" variant="contained">
            SignUp
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
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
        or
      </Box>
      
      <Button type="submit" variant="contained">
        Sign up with Google
      </Button>
    </>
  );
}
