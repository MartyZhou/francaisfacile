describe('angularjs homepage todo list', () => {
  beforeAll(async () => {
    browser.ignoreSynchronization = true;
  });

  it('should add a todo', async () => {
      await browser.get('https://savoirs.rfi.fr/fr/apprendre-enseigner/langue-francaise/journal-en-fran%C3%A7ais-facile');
  
      // await browser.get('https://martyzhou.github.io/francaisfacile/');

      let articleContainer = await element(by.css('.view-content'));
      // let articleContainer = await element(by.css('.home'));
      // let articleList = await articleContainer.all(by.tagName('a'));
      let articleList = await articleContainer.all(by.css('.aside'));
      await articleList[0].click();
  
      await browser.sleep(2000);
    });
  });