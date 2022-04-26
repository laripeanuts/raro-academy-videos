import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useAuth } from "../../hooks/useAuth";

import { VideoType } from "../../types/VideoType";
import { Container } from "./styles";
import Link from "../../components/Link";

export const VideosPage = () => null;

// export const VideosPage = () => {
//   const { isAuthenticated, logout } = useAuth();
//   const navigate = useNavigate();
//   const { data, hasError, isLoading } = useFetch<VideoType[]>("/videos");

//   useEffect(() => {}, [isAuthenticated, navigate, logout]);

//   return (
//     <Container className="notfound">
//       <h1>Videos Page</h1>
//       {isLoading && <p>Loading...</p>}
//       {hasError && <p>erro...</p>}
//       <ul>
//         {data?.map((video: VideoType) => (
//           <li key={video.id}>
//             <h2>{video.nome}</h2>
//             <Link className="linksVideos" href={`/videos/${video.id}`}>
//               Veja video
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };
