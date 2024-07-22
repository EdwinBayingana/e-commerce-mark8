# Mark8 Ecommerce Application

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Getting Started

Follow these steps to set up the project locally:

### Step 1: Clone the repository

```sh
# The repository link below is not accurate (for anonymity).
# Instead, use the link of the repository from which you are going through this documentation
git clone https://github.com/🎭/e-commerce-mark8.git
cd e-commerce-mark8
```

### Step 2: Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run:

```sh
npm install
```

### Step 3: Run the website

After installing the dependencies, you can run the application with the following commands:

```bash
# Run the Development server
npm run dev

# Run the Production server
npm start

# Only for building the Production server
npm run build
```

### Step 4: Update the .env file

Remember to replace these values in the .env file as demonstrated in the .env.example file.

## Congratulations!

You've successfully run the Next JS website.

If everything is set up _correctly_, you should see your new app running in your browser shortly.

# Running the Project with Docker

To test and run this project using Docker, follow these steps:

## Prerequisites

Docker Desktop: Make sure Docker Desktop is installed and running on your system. You can download it from [Docker's official website.](https://www.docker.com/).

## Setup and Build

1. Build the Docker Image

Build the Docker image with the following command:

```bash
docker build -t your-image-name .

# Example
docker build -t e-commerce-mark8 .
```

2. Run the Docker Container

Start a container from your image with the following command:

```bash
docker run -d -p 3000:3000 --name your-container-name your-image-name
```

Here, keep in mind these points:

- -p 3000:3000 maps port 3000 on your host to port 3000 in the container. Hence, adjust the port numbers as needed.
- --name your-container-name will give your container a name.
- your-image-name is the name of the Docker image you built (you can set it according to your configuration).

3. Access the Application

Open your web browser and go to http://localhost:3000 (or the port you have mapped) to view the application.

## Stopping and Removing the Container

To stop the running container, use:

```bash
docker stop your-container-name
```

To remove the stopped container, use:

```bash
docker rm your-container-name
```

# Troubleshooting

- **Docker Daemon Issues**: If you encounter issues connecting to Docker, ensure Docker Desktop is running and try restarting it.
- **Socket Issues**: If you have problems with the Docker socket, check Docker Desktop's preferences or reinstall Docker Desktop.

If you can't get this to work, see the [Troubleshooting](https://nextjs.org/docs/pages/building-your-application/configuring/debugging) page.
