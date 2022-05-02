import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
/* prettier-ignore */
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ContainerSearch } from "./styles";

export type InputSearchProps = {
  onKeyPress: (value: String) => void;
};

export const InputSearch = ({ onKeyPress }: InputSearchProps) => {
  const [query, setQuery] = useState("");
  const debounceId = useRef(0);

  const search = useCallback(() => {
    onKeyPress(query);
  }, [query]);

  useEffect(() => {
    clearTimeout(debounceId.current);
    debounceId.current = window.setTimeout(search, 500);
  }, [query]);

  return (
    <ContainerSearch>
      <SearchIcon />
      <Input
        type="search"
        placeholder="Buscar Vídeos"
        onChange={(event) => setQuery(event.target.value)}
        sx={{ margin: "0px" }}
      />
    </ContainerSearch>
  );
};