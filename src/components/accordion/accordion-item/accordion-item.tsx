import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'pt-accordion-item',
  styleUrl: 'accordion-item.scss',
  shadow: true
})
export class AccordionItem {
  @Prop() title: string;
  @Prop() isOpen: boolean = false;
  @State() open: boolean = false;

  get BEM(): string {
      const classArray = ['accordion-item'];

      if (this.open) {
        classArray.push('is-open');
      }

      return classArray.join(' ');
  }

  componentDidLoad() {
      this.open = this.isOpen;
  }

  toggleItem = () => {
    this.open = !this.open;
  }

  render() {
    return (
      <li class={this.BEM}>
        <pt-accordion-header title={this.title} is-open={this.open} onClick={this.toggleItem}></pt-accordion-header>
        <pt-accordion-content is-open={this.open}>
            <slot></slot>
        </pt-accordion-content>
      </li>
    );
  }
}
