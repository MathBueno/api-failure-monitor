const fs = require('fs');
const fetch = require('node-fetch'); // precisa instalar: npm install node-fetch@2
const apis = require('./apis.json');

(async () => {
    const logs = [];

    for (let url of apis) {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                logs.push({
                    api: url,
                    status: res.status,
                    message: res.statusText,
                    timestamp: new Date().toISOString()
                });
            } else {
                logs.push({
                    api: url,
                    status: res.status,
                    message: "OK",
                    timestamp: new Date().toISOString()
                });
            }
        } catch (err) {
            logs.push({
                api: url,
                status: "ERROR",
                message: err.message,
                timestamp: new Date().toISOString()
            });
        }
    }

    fs.writeFileSync('logs.json', JSON.stringify(logs, null, 4), 'utf-8');
    console.log("Logs gerados em logs.json");
})();