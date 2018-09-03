import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-accordion-header',
  styleUrl: 'accordion-header.scss',
  shadow: true
})
export class AccordionHeader {
    @Prop() title: string = '';
    @Prop() isOpen: boolean = false;

  get BEM(): string {
      const classArray = ['accordion-header'];

      if (this.isOpen) {
        classArray.push('is-open');
      }

      return classArray.join(' ');
  }

  get icon(): string {
      if(this.isOpen) {
        return '#arrow-up'
      } else {
        return '#arrow-down'
      }
  }

  render() {
    return (
      <div class={this.BEM}>
        <h3 class="accordion-header__heading">
          <span class="accordion-header__title">{this.title}</span>
          <pt-icon class="accordion-header__icon" variant={`/assets/sprite.svg${this.icon}`}></pt-icon>
        </h3>
      </div>
    );
  }
}
