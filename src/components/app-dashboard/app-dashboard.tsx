import { Component, h} from '@stencil/core';

import '../../api/ALPHA_VANTAGE_API.ts';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'app-dashboard.css',
  shadow: true,
})
export class AppDashboard {
  stonkData = {
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
