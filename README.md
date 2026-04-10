# 📡 API Failure Monitor

An automated monitoring service that continuously tracks the health of various APIs, detects failures, and logs every incident with detailed diagnostic data (status codes, timestamps, and error messages).

## 🧩 The Problem
In modern distributed systems, APIs can go down silently. Without active observability, technical support and engineering teams only discover outages when users start complaining, leading to longer downtime and poor user experience.

## ✅ The Solution
This tool actively pings a predefined list of API endpoints at regular intervals. If an endpoint fails or times out, the system immediately logs the failure structure for rapid troubleshooting and alerting.

## ⚙️ Tech Stack
- **Python / Node.js** — Scripting and scheduling logic
- **HTTP Requests** — API health checking
- **JSON Logging** — Structured failure tracking

## 📊 Example Log Entry
```json
{
  "endpoint": "https://api.example.com/v1/data",
  "status": "FAILED",
  "statusCode": 503,
  "timestamp": "2026-04-10T14:32:00Z",
  "error": "Service Unavailable"
}
```

## 🚀 How to Run Locally
1. Clone the repository
2. Update the `apis.json` file with the endpoints you want to monitor
3. Install dependencies and run the script
4. Check the `logs.json` file to review detected failures

## 💼 Skills Demonstrated
- Proactive observability and health checks
- API testing and debugging
- Incident logging automation
- Technical support and reliability practices
