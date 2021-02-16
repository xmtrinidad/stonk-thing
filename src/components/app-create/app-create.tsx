import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-create',
  styleUrl: 'app-create.css',
  shadow: true,
})
export class AppCreate {
  @State() tickerValue: string;

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.tickerValue);
    this.tickerValue = '';
  }

  handleChange(e) {
    this.tickerValue = e.target.value;
    console.log(this.tickerValue);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.tickerValue} onInput={(event) => this.handleChange(event)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

}
