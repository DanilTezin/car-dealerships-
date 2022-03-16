import React, { Component, Suspense } from 'react'
import { connect, useSelector } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import { getDealers } from './api'
import DealerPersonal from './components/DealerPersonal/DealerPersonal'
import Home from './components/Home/Home'
import {addDealersAC} from './store/actionCreators/addDealersAC'
import DealerList from './components/DealersList/DealerList'
import PageNotFound from './components/PageNotFound/PageNotFound'
import Header from './components/Header/Header'
import "./App.css"
class App extends Component {

  componentDidMount(){
    getDealers().then(data => this.props.addDealers(data))
  }
  
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<>
              <Header/>
              <Home/>
          </>}/>

          <Route path='/dealers' element={<>
          
              <Header/>

              <DealerList dealers={this.props.dealers}/></>} >
    
            <Route  path='?name=:name' element={<><Header/><DealerList dealers={this.props.dealers}/></>} />

          </Route>

          <Route  path='/dealers/:id' element={<><Header/><DealerPersonal /></>}/>
          <Route path="*" element={<><Header/><PageNotFound/></>}/>

        </Routes>
      </div>
    )
  }
}




let mapStateToProps = (state) =>{
  return {
    dealers: state.dealers
  }
}

let mapDispathToProps = (dispatch) =>{
  return{
    addDealers: (dealers) => dispatch(addDealersAC(dealers))
  }
}

export default connect(mapStateToProps, mapDispathToProps)(App)