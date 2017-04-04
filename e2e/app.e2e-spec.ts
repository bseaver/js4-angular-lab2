import { NewOnlineStorePage } from './app.po';

describe('new-online-store App', () => {
  let page: NewOnlineStorePage;

  beforeEach(() => {
    page = new NewOnlineStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
