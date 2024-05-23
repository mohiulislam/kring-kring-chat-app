"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      component={"main"}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Image
          src="/assets/imgs/logo.svg"
          alt="Vercel Logo"
          className="m-auto"
          width={100}
          height={100}
          priority
        />
        <Typography variant="h5" sx={{ color: "text.primary" }}>
          Welcome to Kring-Kring
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          A simple communication app to connect with friends.
        </Typography>
        <Link href="/signin">
          <Button
            color="secondary"
            variant="contained"
            sx={{
                  marginTop: 3,
              paddingX: 5,
              paddingY: 1,
            }}
          >
            Get started
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
