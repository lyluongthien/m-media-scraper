# Media Scraper

## Project Overview
The Media Scraper is a web application designed to scrape media (images and videos) from given web URLs. It includes a backend API built with Node.js and a front-end interface built with React.js. The application supports both server-side and client-side rendering and is designed to run efficiently within a constrained resource environment.

## Features
- **API to scrape media**: Accepts an array of web URLs and extracts images and video links.
- **Authentication**: Includes basic server authentication middleware.
- **Logging and Error Handling**: Middleware for comprehensive logging and error tracking.
- **Database Storage**: Stores scraped data in a SQL database.
- **Front-End Display**: A simple web page to view the scraped images and videos, with pagination and filtering.
- **Scalability**: Designed to handle scraping for up to 5000 URLs concurrently on limited resources (1 CPU, 1GB RAM).
- **Dockerized Deployment**: Fully containerized for easy setup and deployment using Docker Compose.
- **Demo Video**: A demonstration video showcasing the functionality.

## Installation

### Prerequisites
- Node.js (v16 or higher)
- Docker & Docker Compose
- A SQL database (PostgreSQL)

### Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/lyluongthien/m-media-scraper.git
   cd m-media-scraper
   ```

<!-- 2. Create a `.env` file in the root directory with the following variables:
   ```env
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=media_scraper
   API_PORT=5000
   ``` -->

3. Build and run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. Access the application:
   - **API**: `http://localhost:5000`
   - **Front-End**: `http://localhost:3000`

## Usage

### Backend API
1. **Authentication**: Use the jwt authentication header (`Authorization: Bearer <jwt>`).
2. **Scrape Media**: Send a POST request to `/api/scrape` with the following body:
   ```json
   {
     "urls": ["https://example.com", "https://example2.com"]
   }
   ```
3. **Fetch Data**: Use GET requests to retrieve scraped data with pagination and filters.

### Front-End
- Navigate to `http://localhost:3000` to view all images and videos.
- Use the search bar and filters to refine the results.

## Scaling Considerations
For scaling the scraper to handle ~5000 URLs concurrently:
<!-- - **Queue System**: Use a message queue (e.g., RabbitMQ, Redis) to manage URL processing.
- **Batch Processing**: Split the URLs into smaller batches and process them sequentially.
- **Concurrency Control**: Implement concurrency limits using libraries like `p-limit` or worker threads.
- **Database Optimization**: Use connection pooling and indexing to improve database performance.
- **Horizontal Scaling**: Deploy multiple instances of the scraper and load balance between them. -->

## Demo Video
- Watch the demo video here: [Demo Video Link](#) 

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
