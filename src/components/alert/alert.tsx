import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-alert',
  styleUrl: 'alert.scss',
  shadow: true
})
export class Alert {

  @Prop() type: 'submit' | 'alert' = 'submit';
  @Prop() variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';

  get BEM(): string {
      const classArray = ['alert'];

      if(this.variant) {
          classArray.push(`${classArray[0]}--${this.variant}`);
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
