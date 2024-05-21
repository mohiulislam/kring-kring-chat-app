"use client";
import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
 code: string;
};

const validationSchema = yup.object().shape({
 code: yup
    .string()
    .required("Code is required")
    .length(6, "Code must be exactly 6 characters"),
});
export default function VerifyOtp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: "onTouched",
  });
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ textAlign: "center" }}
      >
        <Typography color={"text.primary"} variant="h6">
          Enter verification code
        </Typography>
        <TextField
          error={Boolean(errors.code)}
          helperText={errors.code?.message}
          label="Enter Code:"
          color="secondary"
          sx={{ width: 300, marginTop: 2 }}
          size="small"
          {...register("code")}
        />
        <Box sx={{ textAlign: "center" }}>
          <Button
            type="submit"
            sx={{
              textTransform: "none",
              marginTop: 3,
              paddingX: 2,
              paddingY: 1,
              backgroundColor: "secondary.main",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
              color: "text.primary",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
