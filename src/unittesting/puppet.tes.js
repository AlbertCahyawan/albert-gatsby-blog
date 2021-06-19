
// pupeteer must have program to run
const puppeteer = require('puppeteer')
describe(`page`, () => { 
  test('testing pupeteer', async () => {
      const browser = await puppeteer.launch({
          headless: false,
          slowMo:80,
          args: ['--windows-size=1920,1080']
      })
      const page = await browser.newPage();

      await page.goto(
        'http://localhost:8000/'
      );
      await page.click('#post-0') 
      const finalText = await page.$eval('#blog-exit', el => el.textContent)
      expect(finalText).toBe('return') 

  // to prevent timeout 
  }, 10000) 

})