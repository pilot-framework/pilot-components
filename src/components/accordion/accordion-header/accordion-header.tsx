import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-accordion-header',
  styleUrl: 'accordion-header.scss',
  shadow: false
})
export class AccordionHeader {
  @Prop() isOpen: boolean = false;

  get BEM(): string {
      const classArray = ['accordion-header'];

      if (this.isOpen) {
        classArray.push('is-open');
      }

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
