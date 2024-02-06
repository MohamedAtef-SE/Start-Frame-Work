import { Component } from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import LayOut from '../LayOut/layOut';
import Home from './../Home/Home';
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Courses from './../Courses/Courses';
import Skills from '../Skills/Skills';



const myBrowserRouter = createBrowserRouter([
  {
    path: '/Start-Frame-Work', element: <LayOut />, children: [
      { index: true, element: <Home /> },
      { path: 'education', element: <Education /> },
      { path: 'courses', element: <Courses /> },
      { path: 'port', element: <Portfolio /> },
      { path: 'skills', element: <Skills /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <h1 className='bg-light d-flex align-items-center justify-content-center text-center fw-bolder vh-custom'>4 0 4 Page Not Found</h1> }
    ]
  },
  { path: '*', element: <h1 className='bg-light d-flex align-items-center justify-content-center text-center fw-bolder vh-custom'>4 0 4 Page Not Found</h1> }
])




export default class App extends Component {


  state = {};



  render() {


    return (
      <>
        <RouterProvider router={myBrowserRouter} />
      </>
    )
  }
}