import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

function ChatInput() {
  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Type your message here..."
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SendIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default ChatInput;
