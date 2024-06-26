"use client";
import React, { useEffect } from "react";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useLoginMutation } from "@/lib/features/api/auth/loginApi";
import { useRouter } from "next/navigation";

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

type FormData = {
  email: string;
  password: string;
};

export default function SignInWithEmail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  const [login, { isLoading, isError, error, isSuccess }] = useLoginMutation();
  const onSubmit = (data: FormData) => {
    login({
      username: data.email,
      password: data.password,
    });
  };
  const router = useRouter();
  useEffect(() => {
    if (isSuccess) {
      router.push("/chat");
    }
  }, [isSuccess]);

  return (
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
        sx={{ textAlign: "center", width: "40%" }}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Typography sx={{ color: "text.primary" }} variant="h5">
          Sign In
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Email or Phone number"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          {isLoading ? "Signin in..." : "Sign In"}
        </Button>
        <Typography sx={{ mt: 2, color: "text.secondary" }}>
          Don't have an account?
          <Link href="/register"> Sign Up</Link>
        </Typography>
      </Box>
    </Box>
  );
}
