import { AngularPhoneAppPage } from './app.po';

describe('angular-phone-app App', () => {
  let page: AngularPhoneAppPage;

  beforeEach(() => {
    page = new AngularPhoneAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
