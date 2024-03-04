import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignuPage from './pages/SignuPage';
import Formpage from './pages/Formpage';
import  ArticlePage  from './pages/ArticlePage';



const router = createBrowserRouter([
  {
    path: '/' ,
    element: <HomePage/>
  },
  {
    path: '/login' ,
    element: <LoginPage/>
  },
  {
    path: '/signup' ,
    element: <SignuPage/>
  },
  {
    path: '/form' ,
    element: <Formpage/>
  },
  {
    path:'/article',
    element:<ArticlePage />
  },
  

])

function App() {
  return (
    <div>
      <RouterProvider router= {router}></RouterProvider>
    </div>
  );
}

export default App;
