/* prettier-ignore */
import {
  ChangeEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Tooltip from "@mui/material/Tooltip";
import { SelectChangeEvent } from "@mui/material";
/* prettier-ignore */
import {
  VideoListContainer,
  Container,
  Row,
  SearchContainer,
} from "./styles";
import { useVideos } from "../../hooks/useVideos";
import apiClient from "../../services/api-client";
import { VideoType } from "../../types/VideoType";
import { useFetch } from "../../hooks/useFetch";
import { VideoList } from "../../components/VideoList";

/* prettier-ignore */
export const VideosPage = () => {
  const [querySearch, setQuerySearch] = useState<String>("");
  const { topics } = useVideos();
  const [videos, setVideos] = useState<VideoType[]>([]);
  const [topic, setTopic] = useState("");
  const [totalVideos, setTotalVideos] = useState(0);
  const [page, setPage] = useState(1);
  const debounceId = useRef(0);

  const { execute, loading, errorMessage } = useFetch(async () => {
    const videosResponse = await apiClient.get<VideoType[]>("/videos", {
      params: {
        nome: querySearch,
        pagina: page,
        itensPorPagina: 10,
      },
    });

    setTotalVideos(parseInt(videosResponse.headers["x-total-itens"], 10));
    setVideos([...videos, ...videosResponse.data]);
    setPage(parseInt(videosResponse.headers["x-pagina"], 10) + 1);
  });

  const handleLoadMore = () => {
    setTopic("");
    execute();
  }

  const renderTopicChange = (event: SelectChangeEvent<string>) => setTopic(event.target.value);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => (
    setQuerySearch(event.target.value)
  );

  const renderVideos = () => (videos.length
    ? (
      <>
        <VideoListContainer>
          <VideoList list={videos.filter((video) => (topic === "" || video.topico === topic))} />
        </VideoListContainer>
        <Button
          disabled={videos.length === totalVideos || loading}
          onClick={handleLoadMore}
          sx={{ width: "fit-content", alignSelf: "center" }}
        >
          <Tooltip title="Carregar mais vídeos" arrow>
            {!loading ? <AddCircleSharpIcon /> : <CircularProgress sx={{ color: "common.white" }} aria-label="Carregando conteúdo" size={23} />}
          </Tooltip>
        </Button>
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
          sx={{ width: "200px" }}
          onChange={renderTopicChange}
        >
          {topics.map((item: string) => (
            <MenuItem key={item} value={item} sx={{ textTransform: "capitalize", color: "text.primary" }}>
              {item}
            </MenuItem>
          ))}
          <MenuItem key="todos" value="" sx={{ textTransform: "capitalize", color: "text.primary" }}>
            Todos
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );

  const renderResult = () => {
    if (loading && !videos.length) {
      return <CircularProgress sx={{ alignSelf: "center" }} aria-label="Carregando conteúdo" size={60} />;
    }

    if (errorMessage.length) {
      return <Typography variant="h5">{errorMessage}</Typography>;
    }

    return renderVideos();
  };

  const renderFilters = () => (
    <Row>
      <SearchContainer>
        <SearchIcon />
        <Input
          type="search"
          placeholder="Buscar Vídeos"
          onChange={handleInputChange}
          sx={{ margin: "0px" }}
        />
      </SearchContainer>
      {topics ? renderMenuFilter() : null}
    </Row>
  );

  useEffect(() => {
    clearTimeout(debounceId.current);

    setVideos([]);
    setPage(1);

    debounceId.current = window.setTimeout(() => {
      execute();
    }, 700);
  }, [querySearch]);

  return (
    <Container>
      <>
        {renderFilters()}
        <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
          {topic || "Todos"}
        </Typography>
        {renderResult()}
      </>
    </Container>
  );
};
