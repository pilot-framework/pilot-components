import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'pt-fab',
    styleUrl: 'fab.scss',
    shadow: true
  })
  export class Alert {
    @Prop() icon: string = '';

    get BEM(): string {
        const classArray: string[] = ['fab'];

        return classArray.join(' ');
    }

    render() {
        return (
            <pt-button variant="primary" rounded={true} class={this.BEM} iconLeft={this.icon}></pt-button>
        )
    }
  }