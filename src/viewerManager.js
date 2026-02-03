const { chromium } = require('playwright');
const { manageSession } = require('./sessionController');
const { log } = require('./logger');

async function startViewSessions(config) {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();

    const sessions = [];
    for (let i = 0; i < config.viewerCount; i++) {
        sessions.push(manageSession(context, config.streamUrl, config.watchDurationMs, i));
    }

    await Promise.all(sessions);
    await browser.close();
    log('All viewer sessions completed');
}

module.exports = { startViewSessions };