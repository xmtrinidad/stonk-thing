import { Component, getRenderingRef, h, Prop } from '@stencil/core';
import { getGlobalQuote } from '../../../api/ALPHA_VANTAGE_API';

@Component({
  tag: 'stonk-card',
  styleUrl: 'stonk-card.css',
  shadow: true,
})
export class StonkCard {
  @Prop() stonkData;
  groupName: string;

  formatCurrency(num) {
    return (num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }

  checkGainLossTicker(t) {
    // Add some API stuff here to check if gain/loss

    return 'green';
  }

  checkGainLossTotal(total) {
    // Check total group investment + new total price of group = gain/loss

    return total < 0 ? 'red' : 'green';
  }


  render() {
    return (
      <div class="stonk-card">
        <h2>{this.stonkData.groupName}</h2>
        <div class="stonk-tickers">
          {this.stonkData.tickers.map(ticker => 
            <span style={{color: `${this.checkGainLossTicker(ticker)}` }}>{ticker}</span>
          )}
        </div>
        <div class="stonk-info">
          <div class="stonk-info-total">
            <h4>Total Investment</h4>
            <span>${this.formatCurrency(this.stonkData.investmentTotal)}</span>
          </div>
          <div class="stonk-info-gl">
            <h4>Gain/Loss</h4>
            <span style={{color: `${this.checkGainLossTotal(this.stonkData.gl)}` }}>${this.formatCurrency(this.stonkData.gl)}</span>
          </div>
        </div>
      </div>
    );
  }

}
