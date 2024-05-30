import React, { useEffect, useState } from "react";

// Mui
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useUsers } from "../lib/hooks/use-users";
import { ListUser } from "../types/user";
import { Delete, Edit } from "@mui/icons-material";

function IndexPage() {
  const [listUser, setListUser] = useState<Array<ListUser>>([]);
  const { isLoading, getListUser } = useUsers();

  useEffect(() => {
    getListUser().then((res) => setListUser(res));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(isLoading);

  return (
    <Container maxWidth="xl" sx={{ height: "100vh" }}>
      <Stack direction="column" height="100%">
        <header>
          <Stack direction="row" justifyContent="center" p={3}>
            <Typography variant="body1">Userss</Typography>
          </Stack>
        </header>

        <main style={{ height: "100%" }}>
          {isLoading ? (
            <Stack
              direction="column"
              alignItems="center"
              justifyContent="center"
              height="100%"
              width="100%"
              gap={2}
            >
              <CircularProgress size={32} color="inherit" />
              <Typography variant="body1" fontWeight={700}>
                Loading data...
              </Typography>
            </Stack>
          ) : (
            <Grid container spacing={3}>
              {listUser?.map((user, key) => (
                <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
                  <Card sx={{ borderRadius: 4, height: "100%" }}>
                    <CardHeader
                      avatar={
                        <Avatar
                          src={`https://picsum.photos/id/${
                            user?.id + 10
                          }/200/200`}
                          alt="User Image"
                          sx={{ width: "72px", height: "72px" }}
                        />
                      }
                      action={
                        <Stack direction="row" gap={1}>
                          <IconButton
                            color="inherit"
                            sx={{
                              backgroundColor: "rgba(0, 0, 0, 0.04)",
                              borderRadius: 3,
                            }}
                          >
                            <Edit style={{ fontSize: 16 }} />
                          </IconButton>
                          <IconButton
                            color="error"
                            sx={{
                              backgroundColor: "rgba(211, 47, 47, 0.04)",
                              borderRadius: 3,
                            }}
                          >
                            <Delete style={{ fontSize: 16 }} />
                          </IconButton>
                        </Stack>
                      }
                      sx={{ px: 4, pt: 4, pb: 1 }}
                    />
                    <CardContent sx={{ px: 4, pb: 4 }}>
                      <Stack direction="column" gap="4px">
                        <Typography
                          variant="body1"
                          fontWeight={700}
                          fontSize={20}
                          style={{ lineHeight: "1.2" }}
                        >
                          {user?.name}
                        </Typography>

                        <Typography
                          variant="body2"
                          color="grey"
                          fontFamily={'"Manjari", sans-serif'}
                        >
                          @{user?.username}
                        </Typography>

                        <Typography variant="body2">
                          {user?.company?.name}, {user?.company?.catchPhrase}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </main>
      </Stack>
    </Container>
  );
}

export default IndexPage;
