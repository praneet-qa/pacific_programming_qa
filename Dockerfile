# Use an official Python image as a base
FROM python:3.9-alpine

# Set the working directory
WORKDIR /app

# Copy the HTML file to the working directory
COPY app/sample.html .

# Expose port 8000
EXPOSE 8080

# Run the Python HTTP server
CMD ["python3", "-m", "http.server", "8080"]