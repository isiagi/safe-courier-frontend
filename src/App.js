import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './componets/Home/Home'
import Signup from './componets/auth/Sign'
import Login from './componets/auth/logIn'
import Map from './componets/Dispaly/index'
import Parcel from './componets/Parcel/Parcel'
import ParcelID from './componets/Parcel/ParcelID'
import ParcelCreate from './componets/Parcel/PostParcel'


function App() {
    return (
        <>
        <Router>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/signup" component={Signup} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/map" component={Map} />
            <Route path="/parcels" component={Parcel} exact/>
            <Route path="/parcels/:id" component={ParcelID}  exact/>
            <Route path="/parcels/new/parcel" component={ParcelCreate} exact/>
        </Switch>
        </Router>
        </>
    )
}

export default App
