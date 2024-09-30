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
import RammandirPage from "./pages/RammandirPage";
import Jagannath from "./pages/jagannathPage";
import RemeshwaramPage from "./pages/RemeshwaramPage"
import DwarkaPage from "./pages/DwarkaPage";
import BadrinathPage from "./pages/BadrinathPage";
import KedarnathPage from "./pages/KedarnathPage";
import VaishnoPage from "./pages/VaishnoPage";
import SomnathPage from "./pages/SomnathPage";
import GoldenPage from "./pages/GoldenPage";
import HampiPage from "./pages/HampiPage";
import PremmandirPage from "./pages/PremmandirPage";
import RishikeshPage from "./pages/RishikeshPage";
import VaranasiPage from "./pages/VaranasiPage";
import ShirdiPage from "./pages/ShirdiPage";
import KarniPage from "./pages/KarniPage";
import DonationPage from "./pages/DonationPage";

  
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
    path: "/exploreplaces/Mosque",
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
    path:"/article/rammandir", 
    element:<RammandirPage/>
  },
  {
    path:"/article/jagannath",
    element:<Jagannath/>
  },
  {
    path:"/article/remeshwaram",
    element:<RemeshwaramPage/>
  },
  {
    path:"/article/dwarka",
    element:<DwarkaPage/>
  },
  {
    path:"/article/badrinath",
    element:<BadrinathPage/>
  },
  {
    path:"/article/kedarnath",
    element:<KedarnathPage/>
  },
  {
    path:"/article/vaishno",
    element:<VaishnoPage/>
  },
  {
    path:"/article/somnath",
    element:<SomnathPage/>
  },
  {
    path:"/article/golden",
    element:<GoldenPage/>
  },
  {
    path:"/article/hampi",
    element:<HampiPage/>
  },
  {
    path:"/article/premmandir",
    element:<PremmandirPage/>
  },
  {
    path:"/article/rishikesh",
    element:<RishikeshPage/>
  },
  {
    path:"/article/varanasi",
    element:<VaranasiPage/>
  },
  {
    path:"/article/shirdi",
    element:<ShirdiPage/>
  },
  {
    path:"/article/karni",
    element:<KarniPage/>
  },
  {
    path:"/events/hinduevents",
    element:<HinduEventsPage/>
  },
  {
    path:"/donation",
    element:<DonationPage/>
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
