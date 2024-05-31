import { Add } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";

interface HeaderProps {
  handleOpenModal: () => void;
}

function Header({ handleOpenModal }: HeaderProps) {
  return (
    <header>
      <Stack
        direction={{ sm: "column", md: "row" }}
        alignItems={{ xs: "flex-start", md: "center" }}
        gap={{ xs: 0, md: 2 }}
        py={3}
      >
        <Typography
          variant="body1"
          fontSize={{ xs: 28, sm: 32 }}
          fontWeight={700}
        >
          {`{JSON} Placeholder`} User List
        </Typography>

        <Button
          variant="text"
          color="secondary"
          startIcon={<Add />}
          onClick={handleOpenModal}
        >
          New User
        </Button>
      </Stack>
    </header>
  );
}

export default Header;
