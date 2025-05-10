# URL Shortener Service

A Node.js application that provides URL shortening functionality with visit tracking capabilities, built using Express.js and MongoDB.

## Project Structure

- `index.js` - Main application entry point
- `connect.js` - MongoDB connection handler
- `controllers/url.js` - URL shortening and analytics logic
- `models/url.js` - MongoDB schema definition
- `routes/url.js` - API route definitions

## Features

- Generate short URLs using nanoid
- Redirect users to original URLs
- Track visit history with timestamps
- Get analytics for URL visits

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/url` | Create a short URL |
| GET | `/:shortId` | Redirect to original URL |
| GET | `/url/analytics/:shortId` | Get visit statistics |

## Prerequisites

- Node.js
- MongoDB running locally on port 27017

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Make sure MongoDB is running locally

4. Start the server:

```bash
npm start
```

The server will start on port 8001.

## Usage Examples

### Create a Short URL

```bash
curl -X POST http://localhost:8001/url \
  -H "Content-Type: application/json" \
  -d '{"url": "https://www.example.com"}'
```

Response:
```json
{
  "id": "generated-short-id"
}
```

### Get Analytics

```bash
curl http://localhost:8001/url/analytics/your-short-id
```

Response:
```json
{
  "totalClicks": 42
}
```

### Access Short URL

Simply visit `http://localhost:8001/your-short-id` in a browser to be redirected to the original URL.

## Technical Details

- Uses `nanoid` for generating unique short IDs
- MongoDB schema includes:
  - shortId (unique identifier)
  - redirectUrl (original URL)
  - visitHistory (array of timestamps)
- Automatic visit tracking on each redirect
- Express.js middleware for request handling
- Mongoose for MongoDB interactions

## Dependencies

```json
{
  "express": "^5.1.0",
  "mongoose": "^8.14.1",
  "nanoid": "^5.1.5",
  "nodemon": "^3.1.10"
}
```

## Development

The project uses nodemon for automatic server restarts during development. The server will reload automatically when you make changes to the code.
