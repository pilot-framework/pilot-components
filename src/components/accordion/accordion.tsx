import { Component } from '@stencil/core';

@Component({
  tag: 'pt-accordion',
  styleUrl: 'accordion.scss',
  shadow: false
})
export class AccordionGroup {

  get BEM(): string {
      const classArray = ['accordion'];

      return classArray.join(' ');
  }

  render() {
    return (
      <div class={this.BEM}>
        <slot />
      </div>
    );
  }
}
