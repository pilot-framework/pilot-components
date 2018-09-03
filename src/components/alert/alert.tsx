import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-alert',
  styleUrl: 'alert.scss',
  shadow: true
})
export class Alert {

  @Prop() type: 'submit' | 'alert' = 'submit';
  @Prop() variant: 'info' | 'success' | 'warning' | 'danger' = 'info';
  @Prop() icon: string;

  get BEM(): string {
      const classArray = ['alert'];

      classArray.push(`${classArray[0]}--${this.variant}`);

      return classArray.join(' ');
  }

  getIcon() {
    return (
      <div class="alert__icon">
        <pt-icon variant={this.icon}></pt-icon>
      </div>
    )
  }

  render() {
    return (
      <div class={this.BEM}>
        {this.icon && this.getIcon() }
        <div class="alert__content">
          <slot />
        </div>
      </div>
    );
  }
}
