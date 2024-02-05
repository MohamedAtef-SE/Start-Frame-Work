import { Component } from 'react';
import './App.css';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import LayOut from '../LayOut/layOut';
import Home from './../Home/Home';
import Education from '../Education/Education';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Courses from './../Courses/Courses';
import Skills from '../Skills/Skills';



const myBrowserRouter = createBrowserRouter([
  {
    path: '/', element: <LayOut />, children: [
      { index: true, element: <Home /> },
      { path: 'education', element: <Education /> },
      { path: 'courses', element: <Courses /> },
      { path: 'port', element: <Portfolio /> },
      { path: 'skills', element: <Skills /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <h1>4 0 4</h1> }
    ]
  }
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

