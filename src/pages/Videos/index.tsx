import { useEffect, useState } from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Tooltip,
} from "@mui/material";
import {
  VideoListContainer,
  Container,
  FilterContainer,
  VideoButtonsContainer,
} from "./styles";
import { useVideos } from "../../hooks/useVideos";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { useFetch } from "../../hooks/useFetch";
import { VideoList } from "../../components/VideoList";
import { InputSearch } from "../../components/InputSearch";
import Button from "../../components/Button";

/* prettier-ignore */
export const VideosPage = () => {
  const [querySearch, setQuerySearch] = useState<String>("");
  const { topics } = useVideos();
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [topic, setTopic] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("TODOS");

  const url = `/videos?nome=${querySearch}&topico=${topic}&pagina=${page}&itensPorPagina=${itemsPerPage}&orderBy=dataPublicacao&orderDirection=ASC`;

  const { execute, loading, errorMessage } = useFetch(async () => {
    const videosResponse = await apiClient.get<VideoType[]>(url);
    setVideos(videosResponse.data);
  });

  const handleTopicChange = (event: any) => {
    setTopic(event.target.value as string);
  };

  const renderVideos = () => (
    <VideoListContainer>
      <VideoList list={videos} />
    </VideoListContainer>
  );

  const validaVideos = () => (
    videos.length ? (
      <>
        {renderVideos()}
      </>
    ) : (
      <Typography alignSelf="center" variant="h6">
        Vídeos não encontrados!
      </Typography>
    )
  );

  const renderMenuFilter = () => (
    <div className="select-wrapper">
      <FilterListIcon />
      <FormControl fullWidth size="small">
        <InputLabel id="topic-input">Tópicos</InputLabel>
        <Select
          labelId="topic-selector"
          id="topic-selector-id"
          value={topic}
          label="Tópicos"
          onChange={handleTopicChange}
        >
          {topics.map((item: string) => (
            <MenuItem key={item} value={item}>
              {item.toLocaleUpperCase()}
            </MenuItem>
          ))}
          <MenuItem key="todos" value="">
            TODOS
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );

  const renderListVideos = () => {
    if (loading) {
      return <CircularProgress sx={{ alignSelf: "center" }} aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      return <Typography variant="h5">{errorMessage}</Typography>;
    }

    return validaVideos();
  };

  const renderFilters = () => (
    <FilterContainer>
      <InputSearch
        onKeyPress={(value: String) => setQuerySearch(value)}
      />
      {topics ? renderMenuFilter() : null}
    </FilterContainer>
  );

  const nextPage = () => {
    setPage((pageCurrent) => pageCurrent + 1);
  };

  const previusPage = () => {
    setPage((pageCurrent) => pageCurrent - 1);
  };

  useEffect(() => {
    execute();
  }, [itemsPerPage, page, topic, querySearch]);

  return (
    <Container>
      <>
        {renderFilters()}
        <Typography variant="h4">
          {topic ? topic.toUpperCase() : title.toUpperCase()}
        </Typography>
        <VideoButtonsContainer>
          <IconButton disabled={page <= 1} onClick={previusPage}>
            <Tooltip title="Página Anterior" arrow>
              <ArrowBackIosNewIcon />
            </Tooltip>
          </IconButton>
          {renderListVideos()}
          <IconButton
            disabled={videos.length < itemsPerPage}
            onClick={nextPage}
          >
            <Tooltip title="Próxima Página" arrow>
              <ArrowForwardIosIcon />
            </Tooltip>
          </IconButton>
        </VideoButtonsContainer>
      </>
    </Container>
  );
};
