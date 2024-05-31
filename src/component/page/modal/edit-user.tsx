import {
  Box,
  Button,
  Divider,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "src/lib/redux/hooks";
import { User } from "types/user";

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

interface ModalEditUserProps {
  open: boolean;
  handleClose: () => void;
  handleEdit: (val: User) => void;
}

function ModalEditUser({ open, handleClose, handleEdit }: ModalEditUserProps) {
  const [inputValue, setInputValue] = useState<User>({
    id: 0,
    name: "",
    username: "",
    company: {
      name: "",
      catchPhrase: "",
    },
  });
  const userDetail = useAppSelector((state) => state.user.detail);

  useEffect(() => {
    setInputValue(userDetail);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    handleEdit(inputValue);
  }

  function checkDisable() {
    let disable = false;

    if (
      !inputValue?.name ||
      !inputValue?.username ||
      !inputValue?.company?.name ||
      !inputValue?.company?.catchPhrase
    ) {
      disable = true;
    }

    return disable;
  }

  return (
    <Modal open={open} disableEnforceFocus>
      <Box sx={style}>
        <Stack direction="column" gap={3}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Form Edit User
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack direction="column" gap={2}>
              <TextField
                type="text"
                label="Full Name"
                placeholder="Input Full Name"
                value={inputValue?.name}
                onChange={(e) =>
                  setInputValue((prevVal) => ({
                    ...prevVal,
                    name: e.target.value,
                  }))
                }
                color="secondary"
                required
              />
              <TextField
                type="text"
                label="Username"
                placeholder="Input Username"
                value={inputValue?.username}
                onChange={(e) =>
                  setInputValue((prevVal) => ({
                    ...prevVal,
                    username: e.target.value,
                  }))
                }
                color="secondary"
                required
              />

              <Divider flexItem />

              <TextField
                type="text"
                label="Company Name"
                placeholder="Input Company Name"
                value={inputValue?.company?.name}
                onChange={(e) =>
                  setInputValue((prevVal) => ({
                    ...prevVal,
                    company: {
                      ...prevVal.company,
                      name: e.target.value,
                    },
                  }))
                }
                color="secondary"
                required
              />
              <TextField
                type="text"
                label="Phrase Company"
                placeholder="Input Phrase Company"
                value={inputValue?.company?.catchPhrase}
                onChange={(e) =>
                  setInputValue((prevVal) => ({
                    ...prevVal,
                    company: {
                      ...prevVal.company,
                      catchPhrase: e.target.value,
                    },
                  }))
                }
                color="secondary"
                required
              />

              <Stack direction="row" gap={2}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  type="submit"
                  sx={{ height: "40px", borderRadius: 2 }}
                  disabled={checkDisable()}
                >
                  Simpan
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  color="inherit"
                  onClick={handleClose}
                  sx={{ height: "40px", borderRadius: 2 }}
                >
                  Batal
                </Button>
              </Stack>
            </Stack>
          </form>
        </Stack>
      </Box>
    </Modal>
  );
}

export default ModalEditUser;
