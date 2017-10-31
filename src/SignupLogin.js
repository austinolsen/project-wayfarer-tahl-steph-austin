import React, {Component} from 'react'

class SignupLogin extends Component{
  render(){
    return(
      <div id="signupPage">
        <div class="container">
          <h3 class="text-center">Sign up</h3>
          <form class="form-horizontal" onSubmit="putFunctionHere">
            <input type="text" name="fullName" placeholder="full name" required/>
            <input type="text" placeholder="location (optional)" optional/>
            <input type="text" name="username" placeholder="username" required/>
            <input type="password" name="password" placeholder="password" required/>
            <input type="password" name="confirmPassword" placeholder="confirm password" required/>
            <select name="avatar">
              <option selected value="tulip">Tulip</option>
              <option value="rose">Rose</option>
              <option value="iris">Iris</option>
            </select>
            <input id="signupBtn" type="submit" value="Submit"/>
          </form>
        </div>
        <div id="loginPage" class="bg-1">
          <div class="container">
            <h3 class="text-center">Login</h3>
            <form class="form-horizontal">
              <input type="text" name="username" placeholder="username" required/>
              <input type="password" name="password" placeholder="password" required/>
              <input id="signupBtn" type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupLogin