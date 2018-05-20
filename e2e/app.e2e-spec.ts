import { UnamonitoriaAngularPage } from './app.po';

describe('unamonitoria-angular App', () => {
  let page: UnamonitoriaAngularPage;

  beforeEach(() => {
    page = new UnamonitoriaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
