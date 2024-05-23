"use client";
import CountrySelect from "@/components/CountrySelect";
import { useSignupMutation } from "@/lib/features/api/auth/signupApi";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Card,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  country: yup.object().shape({
    code: yup.string().required("Country code is required"),
    label: yup.string().required("Country label is required"),
    phone: yup.string().required("Phone prefix is required"),
  }),
  phoneNumber: yup.string().required("Phone number is required"),
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

type FormData = {
  country: { code: string; label: string; phone: string };
  phoneNumber: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
};

export default function SignInWithPhone() {
  const [verifyingState, setVerifyingState] = React.useState(false);

  const {
    register,
    control,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });
  watch();

  const [signUp, { isLoading, error, data, isSuccess, isError }] =
    useSignupMutation();

  const onSubmit: SubmitHandler<FormData> = (data) =>
    signUp({ ...data, countryCode: data.country.code });
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
              error={!!errors.phoneNumber}
              fullWidth
              label="Last Name"
              color="primary"
              {...register("lastName")}
            />
            <Box sx={{ marginBottom: 2 }}>
              <CountrySelect errors={errors} control={control} name="country" />
            </Box>
            <Box
              sx={{
                border: "1px solid ",
                borderColor: "rgba(255, 255, 255, 0.23)",
                borderRadius: "5px",
                marginBottom: 2,
                padding: 2,
              }}
            >
              <TextField
                sx={{ marginBottom: 2 }}
                helperText={errors.phoneNumber?.message}
                error={!!errors.phoneNumber}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {getValues("country")?.phone &&
                        "+" + getValues("country")?.phone}
                    </InputAdornment>
                  ),
                }}
                fullWidth
                label="Phone Number"
                placeholder="Phone Number"
                color="primary"
                {...register("phoneNumber")}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: 2,
                }}
              >
                <Button
                  size="small"
                  sx={{ color: "text.primary" }}
                  variant="contained"
                >
                  {"isLoadingVerify" ? "Loading..." : "Send OTP"}
                </Button>
              </Box>

              {"verifyingState" && (
                <>
                  <TextField
                    sx={{
                      marginBottom: 2,
                    }}
                    helperText={errors.otp?.message}
                    error={!!errors.otp}
                    fullWidth
                    label="OTP"
                    color="primary"
                    {...register("otp")}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 2,
                    }}
                  >
                    <Button
                      size="small"
                      sx={{ color: "text.primary" }}
                      variant="contained"
                    > { "isLoadingVerify" ? "Verifying..." : "Verify"}</Button>
                  </Box>
                </>
              )}
            </Box>
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
