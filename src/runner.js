const { startViewSessions } = require('./viewerManager');
const config = require('../config/defaults.json');
const { log } = require('./logger');

async function run() {
    log('Starting live viewer simulation');
    await startViewSessions(config);
    log('Live viewer simulation finished');
}

run().catch(err => {
    console.error('Runner error:', err);
});