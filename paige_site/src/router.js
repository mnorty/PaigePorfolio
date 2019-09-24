import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from "./Components/Landing/Landing"
import AboutMe from "./Components/AboutMe/AboutMe"
import Gallery from "./Components/Gallery/Gallery"
import Contact from "./Components/Contact/Contact"

export default (
  <Switch>
      <Route exact path='/' component={Landing} />
      <Route path='/aboutme' component={AboutMe} />
      <Route path='/gallery' component={Gallery}/>
      <Route path='/contact' component={Contact} />
  </Switch>
)