import React, { Component } from 'react';

import './front/css/bootstrap.min.css';

import AgeStatus from './components/AgeStatus';

class App extends Component {

constructor(){
  super();
  this.state ={
    newDate:'',
    brithday:'1991-05-27',
    status:false
  };
}

onClickHandle(event){
  event.preventDefault();
  this.setState({
    brithday:this.state.newDate,
    status:true
  })
}

  render() {
    return (
      <div className="container">
        <br/>
        <br/>
        <br/>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="thumbnail">
                <h1 className="pull-left">Brithday App Calculation !</h1>
              <form onSubmit={ (event) => this.onClickHandle(event) }>
              <div className="form-group">
                <input className="form-control " type="date"
                  onChange={ event=>this.setState({
                    newDate:event.target.value
                  }) }
                />
              <br/>
              <button className="btn btn-info">Get You Brithday</button>
              </div>
              { this.state.status ?
                <AgeStatus date={ this.state.brithday} />
                :
                <div></div>
               }

              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
