import { TestbynielsPage } from './app.po';

describe('testbyniels App', function() {
  let page: TestbynielsPage;

  beforeEach(() => {
    page = new TestbynielsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
