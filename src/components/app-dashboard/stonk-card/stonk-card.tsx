import { Component, h, Prop } from '@stencil/core';

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

  render() {
    return (
      <div class="stonk-card">
        <h2>{this.stonkData.groupName}</h2>
        <div class="stonk-tickers">
          {this.stonkData.tickers.map(ticker => 
            <span>{ticker}</span>
          )}
        </div>
        <div class="stonk-info">
          <div class="stonk-info-total">
            <h4>Total Investment</h4>
            <span>${this.formatCurrency(this.stonkData.investmentTotal)}</span>
          </div>
          <div class="stonk-info-gl">
            <h4>Gain/Loss</h4>
            <span>+${this.formatCurrency(this.stonkData.gl)}</span>
          </div>
        </div>
      </div>
    );
  }

}
