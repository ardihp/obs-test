import { Avatar, Box, Button, Modal, Stack, Typography } from "@mui/material";
import { useAppSelector } from "src/lib/redux/hooks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "calc(100% - 100px)",
  maxWidth: 450,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 3,
};

interface ModalDetailUserProps {
  open: boolean;
  handleClose: () => void;
}

function ModalDetailUser({ open, handleClose }: ModalDetailUserProps) {
  const userDetail = useAppSelector((state) => state.user.detail);

  return (
    <Modal open={open} disableEnforceFocus>
      <Box sx={style}>
        <Stack direction="column" gap={3}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Detail User
          </Typography>

          <Stack direction="column" gap={3}>
            <Avatar
              src={userDetail?.avatar}
              alt={userDetail?.name}
              sx={{ width: "72px", height: "72px" }}
            />

            <Stack direction="column" gap="4px">
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
                title={userDetail?.name}
              >
                {userDetail?.name}
              </Typography>

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
                @{userDetail?.username}
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
                {userDetail?.company?.name}, {userDetail?.company?.catchPhrase}
              </Typography>
            </Stack>
          </Stack>

          <Button variant="contained" color="secondary" onClick={handleClose}>
            Tutup
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalDetailUser;
