const { log } = require('./logger');

async function manageSession(context, streamUrl, duration, index) {
    const page = await context.newPage();
    log(`Viewer session ${index + 1} opening stream`);
    await page.goto(streamUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(duration);
    await page.close();
    log(`Viewer session ${index + 1} closed`);
}

module.exports = { manageSession };