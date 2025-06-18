import HomePage from "./pages/HomePage";
import About from "./pages/about";
import Organizer from "./pages/organizer";
import Symbol from "./pages/symbol";
import Contact from "./pages/contact";
import Giahs from "./pages/giahs";
import Kiahs from "./pages/kiahs";
import Kifhs from "./pages/kifhs";
import Schedule from "./pages/schedule";
import Presentations from "./pages/presentations";
import Gallery from "./pages/gallery";
import Stay from "./pages/stay";
import Transportation from "./pages/transportation";
import Attractions from "./pages/attractions";
import Festival from "./pages/festival";
import Privacy from "./pages/privacy";
import Nomail from "./pages/nomail";
import BoardList from "./pages/boardList";
import BoardGallery from "./pages/boardGallery";
import BoardView from "./pages/boardView";
import BoardWrite from "./pages/boardWrite";

export const routes = [
  { path: "/", element: <HomePage /> },
  { path: "about", element: <About /> },
  { path: "organizer", element: <Organizer /> },
  { path: "symbol", element: <Symbol /> },
  { path: "contact", element: <Contact /> },
  { path: "giahs", element: <Giahs /> },
  { path: "kiahs", element: <Kiahs /> },
  { path: "kifhs", element: <Kifhs /> },
  { path: "schedule", element: <Schedule /> },
  { path: "presentations", element: <Presentations /> },
  { path: "gallery", element: <Gallery /> },
  { path: "stay", element: <Stay /> },
  { path: "transportation", element: <Transportation /> },
  { path: "attractions", element: <Attractions /> },
  { path: "festival", element: <Festival /> },
  { path: "privacy", element: <Privacy /> },
  { path: "nomail", element: <Nomail /> },
  { path: "boardList", element: <BoardList /> },
  { path: "boardGallery", element: <BoardGallery /> },
  { path: "boardView", element: <BoardView /> },
  { path: "boardWrite", element: <BoardWrite /> },
];