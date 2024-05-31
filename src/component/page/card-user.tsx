import { Delete, Edit, OpenInNew } from "@mui/icons-material";
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
import ModalDetailUser from "./modal/detail-user";

interface CardUserProps {
  user: User;
}

interface OpenModalProps {
  edit: boolean;
  detail: boolean;
}

function CardUser({ user }: CardUserProps) {
  const [openModal, setOpenModal] = useState<OpenModalProps>({
    detail: false,
    edit: false,
  });
  const dispatch = useAppDispatch();

  function handleEdit(newUser: User) {
    dispatch(updateUser(newUser));

    setOpenModal((prevVal) => ({ ...prevVal, edit: false }));

    toast.success(`User ${user.name} updated successfully`);
  }

  function handleDelete(id: number) {
    dispatch(deleteUser(id));

    toast.success("User removed successfully");
  }

  function handleOpenModalEdit() {
    setOpenModal((prevVal) => ({ ...prevVal, edit: true }));
    dispatch(setDetailUser(user));
  }

  function handleOpenModalDetail() {
    setOpenModal((prevVal) => ({ ...prevVal, detail: true }));
    dispatch(setDetailUser(user));
  }

  return (
    <>
      {openModal?.edit && (
        <ModalEditUser
          open={openModal?.edit}
          handleClose={() =>
            setOpenModal((prevVal) => ({ ...prevVal, edit: false }))
          }
          handleEdit={handleEdit}
        />
      )}

      {openModal?.detail && (
        <ModalDetailUser
          open={openModal?.detail}
          handleClose={() =>
            setOpenModal((prevVal) => ({ ...prevVal, detail: false }))
          }
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
              src={user?.avatar}
              alt={user?.name}
              sx={{ width: "72px", height: "72px" }}
            />
          }
          action={
            <Stack direction="row" gap={1} display={{ xs: "none", md: "flex" }}>
              <IconButton
                color="inherit"
                onClick={handleOpenModalEdit}
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
              <Stack
                direction="row"
                alignItems="center"
                gap={2}
                width="fit-content"
                onClick={handleOpenModalDetail}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    ".fullname": { textDecoration: "underline" },
                    ".icon-detail": { visibility: "visible" },
                  },
                }}
              >
                <Typography
                  className="fullname"
                  variant="body1"
                  fontWeight={700}
                  fontSize={20}
                  sx={{
                    lineHeight: "1.2",
                    wordBreak: "break-word",
                    width: "calc(100% - 20px)",
                    display: "-webkit-box",
                    overflow: "hidden",
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                  }}
                  title={user?.name}
                >
                  {user?.name}
                </Typography>

                <OpenInNew
                  className="icon-detail"
                  sx={{ fontSize: "16px", visibility: "hidden" }}
                />
              </Stack>

              <Typography
                variant="body2"
                color="grey"
                fontFamily={'"Manjari", sans-serif'}
                sx={{
                  wordBreak: "break-word",
                  width: "calc(100% - 20px)",
                  display: "-webkit-box",
                  overflow: "hidden",
                  WebkitLineClamp: 1,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }}
              >
                @{user?.username}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  wordBreak: "break-word",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                }}
              >
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
                onClick={handleOpenModalEdit}
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
