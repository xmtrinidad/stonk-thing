import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {

  onCreateGroupClick() {
    console.log('create group');
  }

  render() {
    return (
      <div>
        <header>
          <h1>Stonks Thing</h1>
          <h1>Total Investments: $5,000</h1>
          <a href="/create" onClick={this.onCreateGroupClick}>Create Investment Group</a>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-dashboard" exact={true} />
              <stencil-route url="/create" component="app-create" exact={true} />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
