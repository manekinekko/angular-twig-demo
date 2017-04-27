import { Angular2TwigTemplatingPage } from './app.po';

describe('angular2-twig-templating App', () => {
  let page: Angular2TwigTemplatingPage;

  beforeEach(() => {
    page = new Angular2TwigTemplatingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
