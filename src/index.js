import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './css/emetan.css'
import App from './components/app'
import Test from './components/test'
import MeasuringYourCover from './components/measuringYourCover'
import Order from './components/order'

//ReactDOM.render(<App/>, document.getElementById('root'))

const routing = (
    <Router>
        <div>
            <Route path="/" component={App}/>
            <Route path="/measuringYourCover" component={MeasuringYourCover}/>
            <Route path="/order" component={Order}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
