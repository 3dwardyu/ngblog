import { NgblogPage } from './app.po';

describe('ngblog App', () => {
  let page: NgblogPage;

  beforeEach(() => {
    page = new NgblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
