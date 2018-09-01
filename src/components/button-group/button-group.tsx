import { Component } from '@stencil/core';

@Component({
  tag: 'pt-button-group',
  styleUrl: 'button-group.scss',
  shadow: false
})
export class ButtonGroup {

  get BEM(): string {
      const classArray = ['button-group'];

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
