import { newSpecPage } from '@stencil/core/testing';
import { WebComponentsDemoLoading } from '../web-components-demo-loading';

const defaultColor = '#00b900';

describe('web-components-demo-loading', () => {
  it('renders with value', async () => {
    const page = await newSpecPage({
      components: [WebComponentsDemoLoading],
      html: `<web-components-demo-loading color="${defaultColor}"></web-components-demo-loading>`,
    });

    expect(page.root).toEqualHtml(`
      <web-components-demo-loading color="${defaultColor}">
        <mock:shadow-root>
          <svg class="circular-loader" viewBox="25 25 50 50">
            <circle
              class="circular-loader-path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="${defaultColor}"
              stroke-width="2"
            />
          </svg>
        </mock:shadow-root>
      </web-components-demo-loading>
    `);
  });
});
