# Cloud Portfolio Project

A cloud-hosted portfolio website built to showcase my software engineering projects, technical skills, and education while demonstrating hands-on experience with AWS cloud services and serverless architecture.

## Live Website

**Portfolio URL:** dlaeumkssb5wt.cloudfront.net 

---

# Overview

This project serves as both a professional portfolio and a cloud engineering project.

The website is hosted on AWS and features a custom visitor analytics system built using serverless AWS services. Visitors can explore my projects, technical skills, education, and contact information while analytics are collected through a fully cloud-based backend.

---

# Features

- Responsive portfolio website
- Project showcase with dedicated project detail pages
- Technical skills section
- Education section
- Contact section with GitHub, LinkedIn, email, and resume links
- Cloud-hosted infrastructure using AWS
- Serverless visitor analytics system
- Tracks:
  - Unique Visitors
  - Returning Visitors
  - Total Visits
- Owner exclusion functionality to prevent self-generated analytics
- HTTPS delivery through AWS CloudFront

---

# Architecture

```text
User
  ↓
CloudFront
  ↓
Amazon S3
  ↓
Portfolio Website
  ↓
API Gateway
  ↓
AWS Lambda
  ↓
Amazon DynamoDB
```

---

# AWS Services Used

## Amazon S3

Used to host the static website files:

- HTML
- CSS
- JavaScript
- Images
- Resume PDF

## Amazon CloudFront

Provides:

- Global content delivery
- HTTPS encryption
- Improved performance
- Reduced latency

## Amazon API Gateway

Handles communication between the portfolio frontend and backend analytics system.

## AWS Lambda

Processes visitor analytics requests and communicates with DynamoDB.

## Amazon DynamoDB

Stores visitor analytics data including:

- Unique Visitors
- Returning Visitors
- Total Visits

---

# Visitor Analytics System

The portfolio includes a custom visitor tracking solution built using AWS serverless services.

### Tracked Metrics

- Total Visits
- Unique Visitors
- Returning Visitors

### How It Works

1. A visitor accesses the portfolio.
2. JavaScript checks the browser's local storage.
3. New visitors receive a unique identifier.
4. Returning visitors reuse their existing identifier.
5. Requests are sent through API Gateway.
6. Lambda processes the request.
7. Visitor statistics are stored in DynamoDB.
8. Updated statistics are displayed on the website.

### Owner Exclusion

The site includes an owner flag stored in local storage that allows the portfolio owner to view analytics without increasing visitor counts.

---

# Technologies Used

## Frontend

- HTML5
- CSS3
- JavaScript

## Cloud & Backend

- AWS S3
- AWS CloudFront
- AWS API Gateway
- AWS Lambda
- Amazon DynamoDB

## Development Tools

- Git
- GitHub
- Visual Studio Code

---

# Project Structure

```text
Cloud-Portfolio/
│
├── images/
│
├── Pages/
│   ├── projects.html
│
├── style_sheets/
│   ├── style.css
│   └── projects.css
│
├── index.html
├── script.js
├── Resume.pdf
└── README.md
```

---

# Learning Outcomes

Through this project, I gained experience with:

- Static website hosting on AWS
- Content Delivery Networks (CDNs)
- Serverless application development
- API integration
- DynamoDB data modeling
- Cloud architecture design
- AWS IAM permissions
- Frontend deployment workflows
- Debugging cloud infrastructure issues

---

# Future Improvements

- Custom domain integration
- Route 53 DNS configuration
- CI/CD pipeline with GitHub Actions
- Additional project case studies
- Dark mode support
- Analytics dashboard
- Infrastructure as Code (Terraform or CloudFormation)

---

# Author

**Omar Fofana**

Computer Science Graduate  
Aspiring Software Engineer

GitHub: https://github.com/omarf72

LinkedIn: "https://linkedin.com/in/omar-fofana" 
