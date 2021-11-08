const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.uol.com.br/");
  const text = await page.evaluate(() => {
    return document.querySelector(".title__element.headlineMain__title")
      .innerText;
  });
  await page.goto("https://twitter.com/login");
  await page.waitForTimeout(10000);
  await page.type('[name="username"]', "[SEU USUÁRIO]");
  await page.click(
    '[class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]'
  );
  await page.waitForTimeout(5000);
  await page.type('[name="password"]', "[SUA SENHA]");
  await page.click(
    '[class="css-901oao r-1awozwy r-jwli3a r-6koalj r-18u37iz r-16y2uox r-37j5jr r-a023e6 r-b88u0q r-1777fci r-rjixqe r-bcqeeo r-q4m81j r-qvutc0"]'
  );
  await page.waitForTimeout(5000);
  await page.click(
    '[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'
  );
  await page.type(
    '[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]',
    text
  );
  await page.waitForTimeout(5000);
  await page.click('[data-testid="tweetButtonInline"]');
  await page.screenshot({ path: "example.png" });
})();
