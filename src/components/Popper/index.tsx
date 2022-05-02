import * as React from "react";
import Popper, { PopperPlacementType } from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import { AnswersContainer, ContainerDialog } from "./styles";
import { useTheme } from "../../hooks/useTheme";

type DialogPopperProps = {
  title: string;
  message: string;
  click: () => void;
};

export const DialogPopper = ({ title, message, click }: DialogPopperProps) => {
  const { theme } = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null,
  );
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState<PopperPlacementType>();

  /* prettier-ignore */
  const handleClick = (
    newPlacement: PopperPlacementType,
  ) => (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const renderAnswers = () => (
    <AnswersContainer>
      <Button variant="outlined" onClick={click}>
        Sim
      </Button>
      <Button variant="contained" onClick={handleClick("bottom-end")}>
        Não
      </Button>
    </AnswersContainer>
  );

  const renderDialog = () => (
    <ContainerDialog>
      <Typography variant="h6">{message}</Typography>
      {renderAnswers()}
    </ContainerDialog>
  );

  return (
    <>
      <Popper
        open={open}
        anchorEl={anchorEl}
        placement={placement}
        transition
        sx={{
          opacity: 0.9,
          backgroundOpacity: 0.9,
          backdropFilter: "blur(8px)",
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper
              sx={{
                opacity: 1,
              }}
            >
              <Typography sx={{ p: 2 }}>{renderDialog()}</Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
      <Button
        onClick={handleClick("bottom-end")}
        sx={{
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {title}
      </Button>
    </>
  );
};
