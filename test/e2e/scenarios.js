describe('EtsyApp', function() {

  it('has a home page', function() {
    browser.get('http://localhost:8000/app');
    expect(browser.getTitle()).toEqual('DD-Challenge');
  });

});
