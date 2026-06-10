// check-site.js
const { chromium } = require("playwright");

async function run() {
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  try {
    await page.goto("https://gerenciador-cardapio.vercel.app/", {
      waitUntil: "networkidle",
      timeout: 30000,
    });

    console.log(`[${new Date().toISOString()}] Site acessado com sucesso`);
  } catch (err) {
    console.error(`[${new Date().toISOString()}] Erro:`, err.message);
  } finally {
    await browser.close();
  }
}

run();
