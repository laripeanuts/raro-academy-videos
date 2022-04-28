import { useRef } from "react";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "../../hooks/useAuth";
import { useVideos } from "../../hooks/useVideos";
import { useFetch } from "../../hooks/useFetch";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { ErrorBox } from "../ErrorBox";

type FavoriteIconProps = {
  id: string;
  filled?: boolean;
};

/* prettier-ignore */
export const FavoriteButton = ({ id, filled }: FavoriteIconProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const { isAuthenticated } = useAuth();
  const { setFavorites } = useVideos();
  const { execute, loading, errorMessage } = useFetch(async () => {
    await apiClient[filled ? "delete" : "post"](`/videos/${id}/favoritos`);

    const favoritesResponse = await apiClient.get<VideoType[]>(
      "/videos/favoritos",
    );

    setFavorites(favoritesResponse.data);
  });

  const handleClick = () => {
    execute();
  };

  const renderIcon = () => (
    !loading
      ? (
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.57025 16.305L8.56953 16.3043C6.08081 14.0093 4.05522 12.1404 2.64581 10.388C1.24237 8.64307 0.5 7.07308 0.5 5.38434C0.5 2.63729 2.61363 0.5 5.29452 0.5C6.81495 0.5 8.28446 1.22227 9.24305 2.36705L9.6264 2.82486L10.0098 2.36705C10.9683 1.22227 12.4378 0.5 13.9583 0.5C16.6392 0.5 18.7528 2.63729 18.7528 5.38434C18.7528 7.07309 18.0104 8.6431 16.6069 10.3894C15.1995 12.1404 13.178 14.0086 10.6945 16.3037L10.6839 16.3135L10.6829 16.3145L9.62769 17.2839L8.57025 16.305Z"
            stroke={filled ? "none" : theme.palette.text.primary}
            fill={filled ? theme.palette.primary.main : "none"}
          />
        </svg>
      ) : (
        <CircularProgress size={20} />
      )
  );

  return isAuthenticated ? (
    <div ref={containerRef}>
      <Tooltip title={filled ? "Desfavoritar" : "Favoritar"} arrow>
        <IconButton onClick={handleClick} disabled={loading}>
          {renderIcon()}
        </IconButton>
      </Tooltip>
      <ErrorBox anchor={containerRef.current as HTMLDivElement} message={errorMessage} />
    </div>
  ) : null;
};
