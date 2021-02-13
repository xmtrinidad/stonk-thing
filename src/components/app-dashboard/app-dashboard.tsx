import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-dashboard',
  styleUrl: 'app-dashboard.css',
  shadow: true,
})
export class AppDashboard {

  render() {
    return (
      <div class="stonk-cards">

        <stonk-card></stonk-card>

      </div>
    );
  }

}
