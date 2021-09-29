import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'web-components-demo-loading',
  styleUrl: 'web-components-demo-loading.css',
  shadow: true,
})
export class WebComponentsDemoLoading {
  /**
   * The SVG stroke color
   */
  @Prop() color = '#00b900';

  render() {
    return (
      <Host>
        <svg class="circular-loader" viewBox="25 25 50 50">
          <circle
            class="circular-loader-path"
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke={this.color}
            stroke-width="2"
          />
        </svg>
      </Host>
    );
  }
}
