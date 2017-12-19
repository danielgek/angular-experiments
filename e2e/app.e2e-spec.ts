import { TestElementsPage } from './app.po';

describe('test-elements App', function() {
  let page: TestElementsPage;

  beforeEach(() => {
    page = new TestElementsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
