import React, { useRef, useState } from "react";

import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import apiClient from "../../../services/api-client";

import { useAuth } from "../../../hooks/useAuth";
import { useTheme } from "../../../hooks/useTheme";
import { WithChildren } from "../../../common/childrenType";

type UpVoteButtonProps = {
  active?: boolean;
  onClick?: () => void;
  loading?: boolean;
};

/* prettier-ignore */
export const UpVoteButton = ({
  active,
  onClick,
  loading,
  children,
}: WithChildren<UpVoteButtonProps>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const { isAuthenticated } = useAuth();

  const renderVotes = () => !loading ? (
    <IconButton
      sx={{
        color: active
          ? theme.theme.palette.primary.main
          : theme.theme.palette.text.primary,
      }}
      aria-label="downVote"
    >
      {children}
    </IconButton>
  ) : (
    <CircularProgress size={20} />
  );

  return isAuthenticated ? (
    <div ref={containerRef}>
      <Tooltip title="Gostei" arrow>
        <IconButton onClick={onClick} disabled={loading}>
          {renderVotes()}
        </IconButton>
      </Tooltip>
    </div>
  ) : null;
};
