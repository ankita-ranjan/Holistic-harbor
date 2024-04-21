import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignuPage from "./pages/SignuPage";
import Formpage from "./pages/Formpage";
import ArticlePage from "./pages/ArticlePage";
import HinduPage from "./pages/HinduPage";
import Church1Page from "./pages/Church1Page";
import BuddhaPage from "./pages/BuddhaPage";
import GurudwaraPage from "./pages/GurudwaraPage";
import JaintemplePage from "./pages/JaintemplePage";
import MosquePage from "./pages/MosquePage";
import AboutUs from "./components/AboutUs/AboutUs";
import JudaismPage from "./pages/JudaismPage";
import ZoroastrianPage from "./pages/ZoroastrianPage";
import PilgrimagePage from "./pages/PilgrimagePage";
import HinduEventsPage from "./pages/HinduEventsPage";
import RammindarPage from "./pages/RammindarPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignuPage />,
  },
  {
    path: "/form",
    element: <Formpage />,
  },
  {
    path: "/article",
    element: <ArticlePage />,
  },
  {
    path: "aboutus",
    element: <AboutUs />,
  },
  {
    path: "/exploreplaces/hindu",
    element: <HinduPage />,
  },
  {
    path: "/exploreplaces/church",
    element: <Church1Page />,
  },
  {
    path: "/exploreplaces/budha",
    element: <BuddhaPage />,
  },
  {
    path: "/exploreplaces/gurudwara",
    element: <GurudwaraPage />,
  },
  {
    path: "/exploreplaces/jaintemple",
    element: <JaintemplePage />,
  },
  {
    path: "/exploreplaces/mosque",
    element: <MosquePage />,
  },
  {
    path: "/exploreplaces/judaismtemple",
    element: <JudaismPage />,
  },
  {
    path: "/exploreplaces/zoroastrian",
    element: <ZoroastrianPage />,
  },
  {
    path: "/forums/pilgrimages",
    element: <PilgrimagePage />,
  },
  {
    path:"/article/rammindar", 
    element:<RammindarPage/>
  },
  {
    path:"/events/hinduevents",
    element:<HinduEventsPage/>
  }
  
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
