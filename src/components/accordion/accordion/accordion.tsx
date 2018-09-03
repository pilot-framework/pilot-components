import { Component } from '@stencil/core';

@Component({
  tag: 'pt-accordion',
  styleUrl: 'accordion.scss',
  shadow: true
})
export class Accordion {

  get BEM(): string {
      const classArray = ['accordion'];

      return classArray.join(' ');
  }

  render() {
    return (
      <ul class={this.BEM}>
        <slot />
      </ul>
    );
  }
}
