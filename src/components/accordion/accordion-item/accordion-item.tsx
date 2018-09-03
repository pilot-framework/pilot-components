import { Component } from '@stencil/core';

@Component({
  tag: 'pt-accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: false
})
export class AccordionItem {

  get BEM(): string {
      const classArray = ['accordion-item'];

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
