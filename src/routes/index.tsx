import { Routes, Route } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth";
import { FavoritesPage } from "../pages/Favorites";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { PassForgottenPage } from "../pages/PassForgotten";
import { PassRecoveryPage } from "../pages/PassRecovery";
import { RegisterPage } from "../pages/Register";
import { VideoPage } from "../pages/Video";
import { VideosPage } from "../pages/Videos";

const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/pass-forgotten" element={<PassForgottenPage />} />
      <Route path="/pass-recovery" element={<PassRecoveryPage />} />
      <Route index element={<Home />} />
      <Route path="*" element={<NotFoundPage />} />

      <Route element={<RequireAuth />}>
        <Route path="/turmas/:turmaId/videos/:id" element={<VideoPage />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/videos/favoritos" element={<FavoritesPage />} />
        <Route path="/videos/:id" element={<VideoPage />} />
      </Route>
    </Route>
  </Routes>
);

export default RoutesApp;
