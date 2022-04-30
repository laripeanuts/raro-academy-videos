import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

import { useAuth } from "../../../hooks/useAuth";
import { useTheme } from "../../../hooks/useTheme";
import { WithChildren } from "../../../common/childrenType";

type CommentVoteButtonType = {
  active?: boolean;
  loading?: boolean;
  title: string;
  onClick?: () => void;
};

export const CommentVoteButton = ({
  active,
  onClick,
  loading,
  title,
  children,
}: WithChildren<CommentVoteButtonType>) => {
  const theme = useTheme();
  const { isAuthenticated } = useAuth();

  const renderVotes = () => (
    <IconButton size="small" onClick={onClick} disabled={loading}>
      {loading ? <CircularProgress size={24} /> : children}
    </IconButton>
  );

  return isAuthenticated ? (
    <Tooltip title={title} arrow>
      {renderVotes()}
    </Tooltip>
  ) : null;
};
