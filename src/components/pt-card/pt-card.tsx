import { Component } from '@stencil/core';

@Component({
  tag: 'pt-card',
  styleUrl: 'pt-card.css',
  shadow: true
})
export class PtButton {

  get BEM(): string {
      const classArray = ['card'];

      return classArray.join(' ');
  }

  render() {
    return (
      <card class={this.BEM}>
        <slot />
      </card>
    );
  }
}
