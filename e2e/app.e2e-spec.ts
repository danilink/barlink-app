import { BarlinkAppPage } from './app.po';

describe('barlink-app App', function() {
  let page: BarlinkAppPage;

  beforeEach(() => {
    page = new BarlinkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
