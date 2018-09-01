import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-button',
  styleUrl: 'pt-button.scss',
  shadow: true
})
export class PtButton {

  @Prop() type: 'submit' | 'button' = 'submit';
  @Prop() variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  @Prop() size?: 'sm' | 'lg';
  @Prop() disabled?: boolean;

  get BEM(): string {
      const classArray = ['button'];

      if(this.variant) {
          classArray.push(`${classArray[0]}--${this.variant}`);
      }

      if(this.size) {
        classArray.push(`${classArray[0]}--${this.size}`);
      }

      if(this.disabled) {
        classArray.push(`${classArray[0]}--disabled`);
      }

      return classArray.join(' ');
  }

  render() {
    return (
      <button type={this.type} class={this.BEM} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
