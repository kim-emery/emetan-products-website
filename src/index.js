import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './css/emetan.css'
import App from './components/app'
import Test from './components/test'
import MeasuringYourCover from './components/measuringYourCover'
import Order from './components/order'



const routing = (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/measuringYourCover"> Measuring Your Cover </Link>
                </li>
                <li>
                    <Link to="/order"> Order Now </Link>
                </li>
            </ul>
            <Route exact path="/" component={App}/>
            <Route path="/measuringYourCover" component={MeasuringYourCover}/>
            <Route path="/order" component={Order}/>
            <Route path="/test" component={Test}/>
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))
