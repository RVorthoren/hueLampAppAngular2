import { Angular2HueLampPage } from './app.po';

describe('angular2-hue-lamp App', () => {
  let page: Angular2HueLampPage;

  beforeEach(() => {
    page = new Angular2HueLampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
