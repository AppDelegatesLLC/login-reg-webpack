import { LoginRegWebpackPage } from './app.po';

describe('login-reg-webpack App', function() {
  let page: LoginRegWebpackPage;

  beforeEach(() => {
    page = new LoginRegWebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
