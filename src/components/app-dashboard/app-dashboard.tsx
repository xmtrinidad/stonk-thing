import { Component, h} from '@stencil/core';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'app-dashboard.css',
  shadow: true,
})
export class AppDashboard {
  stonkData: Object = {
    groupName: 'Thing',
    tickers: ['GOOG', 'AAPL', 'CRSR', 'SNDL'],
    investmentTotal: 5000,
    gl: 100
  };


  render() {
    return (
      <div class="stonk-cards">

        <stonk-card stonkData={this.stonkData}></stonk-card>

      </div>
    );
  }

}
