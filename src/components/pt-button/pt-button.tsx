import { Component, Prop, Event, EventEmitter } from '@stencil/core';

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
  @Event() onClick: EventEmitter;

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

  handleClick = (event: UIEvent) => {
      console.log(event)
    // if(this.onClick) {
    //     this.onClick(event);
    // }
  }

  render() {
    return (
      <button type={this.type} class={this.BEM} disabled={this.disabled} onClick={this.handleClick}>
        <slot />
      </button>
    );
  }
}
