describe('angularjs homepage todo list', () => {
  beforeAll(async () => {
    browser.ignoreSynchronization = true;
  });

  it('should add a todo', async () => {
      await browser.get('https://savoirs.rfi.fr/fr/apprendre-enseigner/langue-francaise/journal-en-fran%C3%A7ais-facile');

      let articleContainer = await element(by.css('.view-content'));
      let articleList = await articleContainer.all(by.css('.aside'));

      // TODO, check if journal is sent
      let title1Element = await articleList[0].all(by.tagName('h2'));
      let title1 = await title1Element[0].getText();
      console.log(title1);

      await articleList[0].click();
  
      let articleElement = await element(by.css('.field-name-field-descriptif-trad'));
      let articleText = await articleElement.getText();

      console.log(articleText);

      let mainMediaElement = await element(by.css('.field-name-field-media-principal'));
      let downloadButton = await mainMediaElement.all(by.css('.pl-download'));
      let audioElement = await downloadButton[0].all(by.tagName('a'));
      let audioLink = await audioElement[0].getAttribute('href');

      console.log(audioLink);

      await browser.sleep(2000);
    });
  });