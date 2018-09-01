import { Component } from '@stencil/core';

@Component({
  tag: 'pt-card',
  styleUrl: 'pt-card.scss',
  shadow: true
})
export class PtCard {

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
