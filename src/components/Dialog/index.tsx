import React, { forwardRef, useEffect, useState } from "react";
import { Button, Slide } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import { useTheme } from "../../hooks/useTheme";

type AlertDialogProps = {
  title: string;
  description: string;
  buttonAgree: string;
  buttonDisagree: string;
  open: boolean;
  onClickClose: () => void;
  onClickAgree: () => void;
  onClickDisagree: () => void;
};

export const AlertDialog = ({
  title,
  description,
  buttonAgree,
  buttonDisagree,
  open,
  onClickClose,
  onClickAgree,
  onClickDisagree,
}: AlertDialogProps) => {
  const { theme } = useTheme();
  const Transition = forwardRef(
    (
      props: TransitionProps & {
        children: React.ReactElement<any, any>;
      },
      ref: React.Ref<unknown>,
    ) => <Slide direction="down" ref={ref} {...props} />,
  );

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClickClose}
        aria-labelledby={`alert-dialog-${title}`}
        aria-describedby={`alert-dialog-${description}`}
        sx={{
          backdropFilter: open ? "blur(7px)" : "none",
        }}
      >
        <DialogTitle
          id={`alert-dialog-${title}`}
          sx={{
            color: "red",
          }}
        >
          {title}
        </DialogTitle>
        <DialogContent
          sx={{
            color: theme.palette.text.primary,
          }}
        >
          <DialogContentText id={`alert-dialog-${description}`}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickAgree}>{buttonAgree}</Button>
          <Button onClick={onClickDisagree} autoFocus>
            {buttonDisagree}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
