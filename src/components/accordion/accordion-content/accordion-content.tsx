import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-accordion-content',
  styleUrl: 'accordion-content.scss',
  shadow: true
})
export class AccordionContent {
  @Prop() isOpen: boolean = false;

  get BEM(): string {
      const classArray = ['accordion-content'];

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
