import { FrannkchelaPage } from './app.po';

describe('frannkchela App', function() {
  let page: FrannkchelaPage;

  beforeEach(() => {
    page = new FrannkchelaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
