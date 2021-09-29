import { newE2EPage } from '@stencil/core/testing';

describe('web-components-demo-loading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<web-components-demo-loading></web-components-demo-loading>');

    const element = await page.find('web-components-demo-loading');
    expect(element).toHaveClass('hydrated');
  });
});
