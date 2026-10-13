# 🔗 URL Shortener

A simple and efficient URL Shortener built with **Node.js, Express.js, and MongoDB**. This project allows users to convert long URLs into short, unique links and automatically redirects users to the original website when the short URL is accessed.

---

## 🚀 Features

- ✅ Express.js backend server
- ✅ Generate unique short URLs using NanoID
- ✅ Store URL mappings in MongoDB
- ✅ Redirect users from short URL to original URL
- ✅ Clean MVC folder structure


---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- NanoID
- Dotenv

---

## 📁 Project Structure

```
BACKEND
│
├── src
│   ├── controllers
│   ├── db
│   ├── models
│   ├── routes
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 📌 API Endpoints

### Create Short URL

```http
POST /api/url/create
```

#### Request Body

```json
{
  "originalUrl": "https://www.google.com"
}
```

#### Response

```json
{
  "message": "Short URL created successfully",
  "shortUrl": "http://localhost:3000/api/url/Ab12Cd"
}
```

---

### Redirect to Original URL

```http
GET /api/url/:shortCode
```

Example:

```
http://localhost:3000/api/url/Ab12Cd
```

Automatically redirects to:

```
https://www.google.com
```

---

## 🗄️ Database Schema

| Field | Type | Description |
|------|------|-------------|
| originalUrl | String | Original long URL |
| shortCode | String | Unique short identifier |
| createdAt | Date | Auto-generated timestamp |
| updatedAt | Date | Auto-generated timestamp |

---

## ✅ Completed Tasks

- ✔ Created a backend server using **Express.js**
- ✔ Built an API to accept long URLs and generate unique short codes
- ✔ Stored URL mappings in **MongoDB**
- ✔ Implemented automatic redirection from short URL to original URL
- ✔ Followed a clean MVC architecture

---

## 🔮 Future Improvements

- User Authentication
- URL Analytics (Visit Count)
- Custom Short URLs
- URL Expiration
- QR Code Generation
- Frontend Interface
- Deployment

---


## 👨‍💻 Author

**Md Yasin Reza**

Backend Developer | MERN Stack Developer