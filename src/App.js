import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/intro/intro'
import Features from './components/features/Features'
import Projects  from './components/projects/Projects'
import Resume from './components/resume/Resume'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'

export class App extends Component {
  render() {
    return (
      <div className='w-full h-auto bg-bodyColor text-lightText  max-sm:w-[630px]'>
        <div className='max-w-screen-xl  mx-auto px-16 '>
        <Navbar />
        <Intro />
        <Projects/> 
        <Features/>
        <Resume/>
        <Testimonial/>
        <Contact/>
        </div>
      </div>
    )
  }
}

export default App
