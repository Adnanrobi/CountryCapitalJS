# Country Capital Microservice

This project is a simple microservice that provides APIs for saving and retrieving country-capital information. It uses Express.js for the web server, Sequelize as the ORM, and MySQL for the database. The service is dockerized for easy development and deployment.

## Prerequisites

- Docker
- Docker Compose

## Getting Started

Follow these steps to get the microservice up and running on your local machine:

### 1. Clone the Repository

First, clone this repository to your local machine:
```git clone https://github.com/Adnanrobi/CountryCapitalJS.git```

### 2. Start the Application and Database with Docker Compose
From the root directory of the project, run:

```docker-compose up``` to build the application and database images, and runs the containers.

### 3. Accessing the Application
Once the containers are up and running, the microservice is accessible at:
```http://localhost:3000```
## API Endpoints

#### Save Country-Capital Information

- To save a new country-capital pair, send a POST request to /api/country/save with JSON body {"country": "Country", "capital": "Capital"}.

#### Retrieve Capital by Country

- To retrieve the capital of a country, send a GET request to /api/country/:countryName.

## Testing
You can test the API using tools like Postman. Make sure to include Basic Authentication headers with your requests.
