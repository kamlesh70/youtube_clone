import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import SearchResult from './components/SearchResult';
import Virtualization from './components/Virtualization';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: '/watch',
          element: <WatchPage />
        },
        {
          path: '/results',
          element: <SearchResult />
        },
        {
          path: '/Virtualization',
          element: <Virtualization />
        }
      ]
    }
  ])
  return (
    <div>
      <Header />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
 