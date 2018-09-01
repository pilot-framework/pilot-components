import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'pt-card-cover',
  styleUrl: 'pt-card-cover.scss',
  shadow: true
})
export class PtCardCover {
  @Prop() src: any;

  get BEM(): string {
      const classArray = ['card-cover'];

      return classArray.join(' ');
  }

  render() {
    return (
      <div class={this.BEM}>
        <img src={this.src} />
      </div>
    );
  }
}
