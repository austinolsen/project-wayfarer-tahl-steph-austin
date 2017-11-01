import React from 'react'
import { Route } from 'react-router'
import Home from './Home'
import SignupLogin from './SignupLogin'
import PublicProfile from './PublicProfile'
import Cities from './Cities'
import Post from './Post'

var routes = (
	<div>
		<Route path ='/' component={Home} />
    <Route path='/signin' component={SignupLogin}/>
    <Route path='/profile' component={PublicProfile}/>
    <Route path='/cities' component={Cities}/>
    <Route path='/post' component={Post}/>
	</div>
)


export default routes;
