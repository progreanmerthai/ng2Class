import { Ng2ClassPage } from './app.po';

describe('ng2-class App', function() {
  let page: Ng2ClassPage;

  beforeEach(() => {
    page = new Ng2ClassPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
