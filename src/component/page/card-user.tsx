import { Delete, Edit } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAppDispatch } from "src/lib/redux/hooks";
import {
  deleteUser,
  setDetailUser,
  updateUser,
} from "src/lib/redux/slice/userSlice";
import { User } from "types/user";
import ModalEditUser from "./modal/edit-user";

interface CardUserProps {
  user: User;
}

function CardUser({ user }: CardUserProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  function handleEdit(newUser: User) {
    dispatch(updateUser(newUser));

    setOpenModal(false);

    toast.success(`User ${user.name} updated successfully`);
  }

  function handleDelete(id: number) {
    dispatch(deleteUser(id));

    toast.success("User removed successfully");
  }

  function handleOpenModal() {
    setOpenModal(true);
    dispatch(setDetailUser(user));
  }

  return (
    <>
      {openModal && (
        <ModalEditUser
          open={openModal}
          handleClose={() => setOpenModal(false)}
          handleEdit={handleEdit}
        />
      )}

      <Card
        sx={{
          borderRadius: 4,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardHeader
          avatar={
            <Avatar
              src={`https://picsum.photos/id/${user?.id + 10}/200/200`}
              alt={user?.name}
              sx={{ width: "72px", height: "72px" }}
            />
          }
          action={
            <Stack direction="row" gap={1} display={{ xs: "none", md: "flex" }}>
              <IconButton
                color="inherit"
                onClick={handleOpenModal}
                sx={{
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  borderRadius: 3,
                }}
              >
                <Edit style={{ fontSize: 16 }} />
              </IconButton>
              <IconButton
                color="error"
                onClick={() => handleDelete(user?.id)}
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
        <CardContent sx={{ px: 4, pb: 4, height: "100%" }}>
          <Stack direction="column" height="100%" gap={2}>
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

            <Stack
              direction="row"
              gap={2}
              mt="auto"
              display={{ xs: "flex", md: "none" }}
            >
              <Button
                fullWidth
                variant="text"
                color="inherit"
                onClick={handleOpenModal}
                sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)" }}
              >
                <Edit />
              </Button>
              <Button
                fullWidth
                variant="text"
                color="error"
                onClick={() => handleDelete(user?.id)}
                sx={{ backgroundColor: "rgba(211, 47, 47, 0.04)" }}
              >
                <Delete />
              </Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default CardUser;
