import { useEffect, useState, useRef } from "react";
import Popper from "@mui/material/Popper";
import { Container, Message } from "./styles";

type ErrorBoxProps = {
  message: string;
  anchor: HTMLElement;
};

export const ErrorBox = ({ message, anchor }: ErrorBoxProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = (event: MouseEvent) => {
    if (event.target !== containerRef.current) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    setOpen(!!message);

    return () => window.removeEventListener("click", handleClick);
  }, [message]);

  return (
    <Popper open={open} anchorEl={anchor}>
      <Container ref={containerRef}>
        <Message variant="body2">{message}</Message>
      </Container>
    </Popper>
  );
};
