import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-alert',
  styleUrl: 'pt-alert.scss',
  shadow: true
})
export class PtAlert {

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
