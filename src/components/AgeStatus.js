import React,{ Component } from 'react';

import IMAGE from '../image/party-popper.jpg';


class AgeStatus extends Component {

timeSice(date)
{
  let today =new Date().getTime();
  let other_date =new Date(date).getTime();
  let difference=Math.abs(today-other_date);
  let days =Math.floor(difference/(1000*3600*24));
  let years =Math.floor(days/365);
  days-=years*365;
  let months=Math.floor(days/31);
  days-=months*31;
  return `${ years } Years ${ months } Months ,and days ${ days }`;
}

  render() {
    return (
      <div className="container">
        <div className="row">

            <h1>Age Status : { this.props.date } </h1>
            <h1>Congras : { this.timeSice(this.props.date) } !</h1>
          <div className="col-md-offset-2">
            <img src={ IMAGE }  className="img-thumbnail col-md-4" />
          </div>
        </div>
      </div>
    );
  }


}



export default AgeStatus;
