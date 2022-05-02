import { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { FavoritesPage } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { PassForgottenPage } from "../pages/PassForgotten";
import { PassRecoveryPage } from "../pages/PassRecovery";
import { RegisterPage } from "../pages/Register";
import Tags from "../pages/Tags";
import { VideoPage } from "../pages/Video";
import { VideosPage } from "../pages/Videos";
import { RequireAuth } from "../components/RequireAuth";

/* prettier-ignore */
const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/pass-forgotten" element={<PassForgottenPage />} />
      <Route path="/pass-recovery" element={<PassRecoveryPage />} />
      <Route index element={<Home />} />
      <Route path="/tag/:tagName" element={<Tags />} />
      <Route
        path="/turmas/:turmaId/videos/:videoId"
        element={<VideoPage />}
      />
      <Route path="/videos" element={<VideosPage />} />
      <Route element={<RequireAuth />}>
        <Route path="/videos/favoritos" element={<FavoritesPage />} />
      </Route>
      <Route path="/videos/:videoId" element={<VideoPage />} />
      <Route
        path="/videos/not-found"
        element={
          (
            <NotFoundPage
              message="Ops, vídeo não encontrado!"
              buttonText="Perdido? Selecione uma aula na home!"
            />
          )
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
);

export default RoutesApp;
