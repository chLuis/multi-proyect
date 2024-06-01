import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DragAndDropPage from './routes/drag-drop.jsx';
import TodoPage from './routes/todo-list.jsx';
import CreatePostPage from './routes/create-post.jsx';
import FetchApiPage from './routes/fetch-api.jsx';
import ErrorPage from './components/Error404.jsx';
import ToPortfolio from './components/ToPorfolio.jsx';
import FormationPage from './routes/formation.tsx';
import TestWsp from './routes/testwsp.jsx';
import DesingPage from './routes/design.tsx';
import { Footer } from './components/Footer.jsx';
import ConversationPage from './routes/conversation.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (<App />),
    errorElement: <ErrorPage />,
  },
  {
    path: '/drag-drop',
    element: <DragAndDropPage />
  },
  {
    path: '/todo-list',
    element: <TodoPage />
  },
  {
    path: '/create-post',
    element: <CreatePostPage />
  },
  {
    path: '/fetch-api',
    element: <FetchApiPage />
  },
  {
    path: '/formation',
    element: <FormationPage />
  },
  {
    path: '/design',
    element: <DesingPage />
  },
  {
    path: '/wspFake',
    element: <TestWsp />
  },
  {
    path: '/transcription',
    element: <ConversationPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ToPortfolio />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
