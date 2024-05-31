# Sample App - Running Locally with Docker

This repository contains a sample web application along with Cypress tests. You can use Docker to run the application locally and execute the tests.

## Prerequisites

Before running the application and tests, make sure you have Docker installed on your system. You can download and install Docker from the [official website](https://www.docker.com/get-started).

## Running the App Locally

To run the sample app locally using Docker, follow these steps:

1. Navigate to the project directory:

   ```bash
   cd praneet_atwal_qa_task
   ```

2. Build the Docker image and run:

   ```bash
   docker-compose up --build -d
   ```

3. Open your web browser and navigate to [http://localhost:8080/sample.html](http://localhost:8080/sample.html) to view the sample app.

## Running the Tests

To run the Cypress tests, make sure the sample app Docker container is running. Then, follow these steps:

1. Navigate to the project directory if you're not already there:

   ```bash
   cd praneet_atwal_qa_task
   ```

2. Install Cypress and its dependencies:

   ```bash
   npm install cypress --save-dev
   ```

3. Run Cypress tests:

   ```bash
   npx cypress run
   ```

Cypress will execute the tests and provide the results in the terminal.

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
