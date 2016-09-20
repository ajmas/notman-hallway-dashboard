import React from 'react';
import moment from 'moment';

const MINUTE = 60000;
const PRECIPITATION_TYPES = new Set(['Rain', 'Snow', 'Thunderstorm', 'Drizzle']);

export default class ForecastWeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        floor: 2
    };
  }

  componentDidMount() {

  }

  updateWeatherData() {

  }

  render() {
    // TODO this should pull values from JSON and adjust display according
    //      to floor specified in query. also add support for multi-lingual
    //      display.
    if (this.state.floor === 1) {
        return  <div className="Card FloorOccupantsCard">
          <h2>1st Floor Occupants</h2>
            <table>
            <tr><td>101</td><td>With Intent Marketing Services</td></tr>
            <tr><td>102</td><td>PayHero</td></tr>
            <tr><td>103</td><td>FundMetric (FF)</td></tr>
            <tr><td>104</td><td>Kids Code Jeunesse</td></tr>
            <tr><td>105</td><td>The Bubbles Company</td></tr>
            <tr><td>106</td><td>Aspertise Inc.</td></tr>
            <tr><td>107</td><td>Corstem Inc.</td></tr>
            <tr><td>108</td><td>-</td></tr>
            <tr><td>109</td><td>DogSync</td></tr>
            <tr><td>110</td><td>-</td></tr>
            <tr><td>111</td><td>Meeting Room</td></tr>
            <tr><td>112</td><td>Octoraise</td></tr>
            </table>
        </div>;
    } else if (this.state.floor === 2) {
        return  <div className="Card FloorOccupantsCard">
          <h2>2nd Floor Occupants</h2>
            <table>
            <tr><td>201</td><td>Les Technologies Discoshare Inc.</td></tr>
            <tr><td>202</td><td>Meeting Room</td></tr>
            <tr><td>203</td><td>Groupe Autour du Monde</td></tr>
            <tr><td>204</td><td>Macromeasures</td></tr>
            <tr><td>205</td><td>Taste Bay</td></tr>
            <tr><td>206</td><td>Prollster (FF)</td></tr>
            <tr><td>207</td><td>9261-3801 Quebec Inc. (Men at Heights)</td></tr>
            <tr><td>208</td><td>Guides (FF)</td></tr>
            <tr><td>209</td><td>MotorLeaf (FF)</td></tr>
            <tr><td>210</td><td>Nabes</td></tr>
            <tr><td>211</td><td>Notman House Reception- Ritika Dutt</td></tr>
            <tr><td>212</td><td>Keatext</td></tr>
            <tr><td>213</td><td>Notman House Reception- Emma Williams</td></tr>
            </table>
        </div>;
    }
  }
}


