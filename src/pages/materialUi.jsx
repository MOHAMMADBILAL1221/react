import { AccountCircle} from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import React from "react";
function MaterialUi() {

  return (
    <div>
      <Typography
        fontWeight={"bold"}
        padding={3}
        borderRadius={3}
        marginY={2}
        border={2}
        borderColor={"teal"}
        variant="h3"
      >
        Bilal
      </Typography>
      <div className="flex gap-1">

      <TextField
        id="outline-basic"
        label="Search your images"
        fullWidth
        variant="outlined"
        />
        <Button endIcon={<AccountCircle />} variant="outlined">Search</Button>
        </div>
    </div>
  );
}

export default MaterialUi;
