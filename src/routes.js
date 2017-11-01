import React from 'react'
import { Route } from 'react-router'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import PublicProfile from './PublicProfile'
import Cities from './Cities'
import Post from './Post'
import Layout from './Layout'

var routes = (
	<div>
		<Route path ='/' component={Layout}>
			<Route path='/home' component={Home}/>
			<Route path='/signup' component={Signup}/>
			<Route path='/login' component={Login}/>
			<Route path='/profile' component={PublicProfile}/>
			<Route path='/cities' component={Cities}/>
			<Route path='/post' component={Post}/>
		</Route>

	</div>
)


export default routes;
