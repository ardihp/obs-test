import { useEffect, useState } from "react";

// Mui
import {
  CircularProgress,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

// Hooks
import { useUsers } from "src/hooks/use-users";

// Redux
import { useAppDispatch, useAppSelector } from "src/lib/redux/hooks";
import { createUser, setListUser } from "src/lib/redux/slice/userSlice";
import CardUser from "src/component/page/card-user";
import Header from "src/component/layout/header";
import ModalCreateUser from "src/component/page/modal/create-user";
import { User } from "types/user";
import toast from "react-hot-toast";

function IndexPage() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { isLoading, getListUser } = useUsers();
  const listUser = useAppSelector((state) => state.user.list);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getListUser().then((res) => {
      dispatch(setListUser(res));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleCreate(user: User) {
    dispatch(createUser(user));

    setOpenModal(false);
    toast.success("Create user successfully");
  }

  return (
    <>
      {openModal && (
        <ModalCreateUser
          open={openModal}
          handleCreate={handleCreate}
          handleClose={() => setOpenModal(false)}
        />
      )}

      <Container maxWidth="xl" sx={{ height: "100vh" }}>
        <Stack direction="column" height="100%">
          <Header handleOpenModal={() => setOpenModal(true)} />

          <main
            style={{ height: isLoading ? "100%" : "auto", paddingBottom: 24 }}
          >
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
                    <CardUser user={user} />
                  </Grid>
                ))}
              </Grid>
            )}
          </main>
        </Stack>
      </Container>
    </>
  );
}

export default IndexPage;
