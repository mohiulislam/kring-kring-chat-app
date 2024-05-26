"use client";
import { useRegisterMutation } from "@/lib/features/api/auth/registerApi";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

type FormData = {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export default function SignInWithPhone() {
  const [verifyingState, setVerifyingState] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });
  watch();

  const [registration, { isLoading, error, data, isSuccess, isError }] =
    useRegisterMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    registration({
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    });
  };
  return (
    <>
      {
        <Box
          component="main"
          sx={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ width: "40%" }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 4,
              }}
            >
              <Typography sx={{ color: "text.primary" }} variant="h5">
                Sign up
              </Typography>
            </Box>
            <TextField
              sx={{ marginBottom: 2 }}
              helperText={errors.firstName?.message}
              error={!!errors.firstName}
              fullWidth
              label="First Name"
              color="primary"
              {...register("firstName")}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              helperText={errors.lastName?.message}
              error={!!errors.lastName}
              fullWidth
              label="Last Name"
              color="primary"
              {...register("lastName")}
            />

            <TextField
              sx={{ marginBottom: 2 }}
              helperText={errors.email?.message}
              error={!!errors.email}
              fullWidth
              label="Email"
              color="primary"
              {...register("email")}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              helperText={errors.password?.message}
              error={!!errors.password}
              fullWidth
              label="Password"
              color="primary"
              {...register("password")}
            />
            <TextField
              sx={{ marginBottom: 2 }}
              helperText={errors.confirmPassword?.message}
              error={!!errors.confirmPassword}
              fullWidth
              label="Confirm Password"
              color="primary"
              {...register("confirmPassword")}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                sx={{
                  marginTop: 4,
                  paddingX: 5,
                  paddingY: 1,
                  backgroundColor: "secondary.main",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                  },
                  color: "text.primary",
                }}
              >
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      }
    </>
  );
}
