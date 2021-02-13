import { Component, h } from '@stencil/core';

@Component({
  tag: 'stonk-card',
  styleUrl: 'stonk-card.css',
  shadow: true,
})
export class StonkCard {

  render() {
    return (
      <div class="stonk-card">
        <h2>Group Name</h2>
        <div class="stonk-tickers">
          <span>AAPL</span>
          <span>GOOG</span>
          <span>CRSR</span>
          <span>SNDL</span>
        </div>
        <div class="stonk-info">
          <div class="stonk-info-total">
            <h4>Total Investment</h4>
            <span>$5,000</span>
          </div>
          <div class="stonk-info-gl">
            <h4>Gain/Loss</h4>
            <span>+$100.00</span>
          </div>
        </div>
      </div>
    );
  }

}
