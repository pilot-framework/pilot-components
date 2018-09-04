import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'pt-button',
  styleUrl: 'button.scss',
  shadow: true
})
export class Button {

  @Prop() type: 'submit' | 'button' = 'submit';
  @Prop() text: string;
  @Prop() iconLeft: string;
  @Prop() iconRight: string;
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'link' = 'link';
  @Prop() size: 'default' | 'sm' | 'lg' = 'default';
  @Prop() disabled: boolean = false;
  @Event() onClick: EventEmitter;

  get BEM(): string {
      const classArray = ['button'];

      classArray.push(`${classArray[0]}--${this.variant}`);

      classArray.push(`${classArray[0]}--${this.size}`);

      classArray.push(`${classArray[0]}--disabled`);

      return classArray.join(' ');
  }

  handleClick = (event: UIEvent) => {
      console.log(event)
    // if(this.onClick) {
    //     this.onClick(event);
    // }
  }

  addText() {
    return <span class="button__text">{this.text}</span>;
  }

  render() {
    return (
      <button type={this.type} class={this.BEM} disabled={this.disabled}>
        {this.iconLeft && <pt-icon class="button__icon" variant={this.iconLeft}></pt-icon>}
        {this.text && this.addText()}
        {this.iconRight && <pt-icon class="button__icon" variant={this.iconRight}></pt-icon>}
      </button>
    );
  }
}
