import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DragAndDropPage from './routes/drag-drop.jsx';
import TodoPage from './routes/todo-list.jsx';
import CreatePostPage from './routes/create-post.jsx';
import FetchApiPage from './routes/fetch-api.jsx';
import ErrorPage from './components/Error404.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
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
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)