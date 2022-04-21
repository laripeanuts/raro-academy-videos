import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RequireAuth } from "../components/RequireAuth";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { LoginPage } from "../pages/Login";
import { NotFoundPage } from "../pages/NotFound";
import { RegisterPage } from "../pages/Register";
import { VideoPage } from "../pages/Video";
import { VideosPage } from "../pages/Videos";

const RoutesApp = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />

    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route element={<RequireAuth />}>
        <Route path="/turmas/:turmaId/videos/:id" element={<VideoPage />} />
        <Route path="/videos" element={<VideosPage />} />
      </Route>
    </Route>

    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutesApp;
