"use client";

import { Box, Grid, List, Typography } from "@mui/material";
import ChatItem from "./_components/ChatItem";
import ChatBox from "./_components/ChatBox";
import { useGetGroupsQuery } from "@/lib/features/api/group/groupsApi";

function Chat() {
  const { data: groups, isLoading, isError, error } = useGetGroupsQuery();

  return (
    <Grid container style={{ height: "100%" }}>
      <Grid
        sx={{ height: "100%", display: "flex", flexDirection: "column" }}
        xs={4}
        md={3}
        item
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Box
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                zIndex: 999,
                backgroundColor: "background.default",
                height: "7vh",
                minHeight: "60px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                color={"text.primary"}
                sx={{ fontWeight: "semi-bold" }}
                marginLeft={4}
              >
                Chats
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                overflow: "auto",
                height: "100%",
                paddingX: 2,
              }}
            >
              <List>
                {groups?.map((group: any) => {
                  const participant = group.users.find((user: any) => {
                    console.log(user);
                    return user.id !== "66442c92c50095aa1a7f7b2c";
                  });
                  const participantName =
                    participant?.firstName || participant?.username;
                  return (
                    <ChatItem
                      participantName={participantName}
                      lastMessageTime="now"
                      key={group.id}
                      lastMessage="Hello sona"
                    />
                  );
                })}
              </List>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid sx={{ height: "100%" }} xs={8} md={9} item>
        <ChatBox />
      </Grid>
    </Grid>
  );
}

export default Chat;
