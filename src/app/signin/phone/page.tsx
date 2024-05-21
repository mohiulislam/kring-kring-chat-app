"use client";
import VerifyOtp from "@/app/register/components/VerifyOtp";
import CountrySelect from "@/components/CountrySelect";
import { useLoginMutation } from "@/lib/features/api/auth/loginApi";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
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
  number: yup.string().required("Phone number is required"),
});

type FormData = {
  country: { code: string; label: string; phone: string };
  number: string;
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

  const [login, { isLoading, error, data, isSuccess, isError }] =
    useLoginMutation();

  const onSubmit: SubmitHandler<FormData> = (data) => login(data);
  return (
    <>
      {verifyingState ? (
        <VerifyOtp />
      ) : (
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
            <Typography sx={{ color: "text.primary" }} variant="h5">
              Sign In with phone
            </Typography>
            <CountrySelect errors={errors} control={control} name="country" />
            <TextField
              helperText={errors.number?.message}
              error={!!errors.number}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {getValues("country")?.phone &&
                      "+" + getValues("country")?.phone}
                  </InputAdornment>
                ),
              }}
              fullWidth
              placeholder="Phone number"
              color="secondary"
              sx={{ marginTop: 4 }}
              {...register("number")}
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
      )}
    </>
  );
}
