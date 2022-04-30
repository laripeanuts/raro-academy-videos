import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

import { useAuth } from "../../../hooks/useAuth";
import { useTheme } from "../../../hooks/useTheme";
import { WithChildren } from "../../../common/childrenType";
import { Typography } from "@mui/material";

type CommentVoteButtonType = {
  active?: boolean;
  loading?: boolean;
  title: string;
  countVote?: number;
  onClick?: () => void;
};

export const CommentVoteButton = ({
  active,
  onClick,
  loading,
  title,
  countVote,
  children,
}: WithChildren<CommentVoteButtonType>) => {
  const { isAuthenticated } = useAuth();

  const renderVotes = () => (
    <>
      <IconButton size="small" onClick={onClick} disabled={loading}>
        {loading ? <CircularProgress size={24} /> : children}
      </IconButton>
      {loading ? null : (
        <Typography variant="subtitle1">{countVote}</Typography>
      )}
    </>
  );

  return isAuthenticated ? (
    <Tooltip title={title} arrow>
      {renderVotes()}
    </Tooltip>
  ) : null;
};
