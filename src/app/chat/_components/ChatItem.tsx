import React from "react";
import Avatar from "@mui/material/Avatar";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type ChatItemProps = {
  participantName: string;
  lastMessage: string;
  lastMessageTime: string;
};

export default function ChatItem({
  participantName,
  lastMessage,
  lastMessageTime,
}: ChatItemProps) {
  return (
    <ListItem
      sx={{
        width: "100%",
        borderRadius: "5px",
        "&:hover": {
          backgroundColor: "#4a4a4a",
        },
      }}
      alignItems="flex-start"
    >
      <ListItemAvatar>
        <Avatar
          alt={participantName}
          src="https://cdn.vectorstock.com/i/1000x1000/98/45/person-gray-photo-placeholder-woman-vector-23519845.webp"
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            variant="body1"
            color="text.primary"
            sx={{
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            {participantName}
          </Typography>
        }
        secondary={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {lastMessage}
            </Typography>

            <Typography color="text.secondary" variant="caption">
              {lastMessageTime}
            </Typography>
          </Box>
        }
      />
    </ListItem>
  );
}
