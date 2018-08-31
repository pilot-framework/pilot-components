import { Component } from '@stencil/core';

@Component({
  tag: 'pt-card-content',
  styleUrl: 'pt-card-content.css',
  shadow: true
})
export class PtButton {

  get BEM(): string {
      const classArray = ['card-content'];

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
