import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const API_KEY = process.env.API_KEY;

// Fetch News Helper
function fetchNews(url, res) {
  axios.get(url)
    .then(response => {
      const totalResults = response.data.totalResults || 0;
      if (totalResults > 0) {
        res.json({
          status: 200,
          success: true,
          message: "Successfully fetched news",
          data: response.data
        });
      } else {
        res.json({
          status: 200,
          success: true,
          message: "No more results",
          data: []
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        status: 500,
        success: false,
        message: "Failed to fetch news",
        error: error.message
      });
    });
}

// Route
app.get("/all-news", (req, res) => {
  const query = req.query.q || 'technology';
  const pageSize = parseInt(req.query.pageSize) || 40;
  const page = parseInt(req.query.page) || 1;

  let url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&pageSize=${pageSize}&page=${page}&apiKey=c0d3fc744adc495b94ff66ab25a2c845`;
  fetchNews(url, res);
});
app.options("/top-headlines",cors());app.get("/top-headlines", (req, res) => {
 // const query = req.query.q || 'technology';
  const pageSize = parseInt(req.query.pageSize) || 80;
  const page = parseInt(req.query.page) || 1;
  const category = req.query.category || "business";


  let url = `https://newsapi.org/v2/top-headlines?q=${category}&pageSize=${pageSize}&page=${page}&apiKey=c0d3fc744adc495b94ff66ab25a2c845`;
  fetchNews(url, res);
});
//country
app.options("/country/:iso",cors());
app.get("/country/:iso", (req, res) => {
  const query = req.query.q || 'technology';
  const pageSize = parseInt(req.query.pageSize) || 80;
  const page = parseInt(req.query.page) || 1;
  const country = req.params.iso;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&page=${page}&pageSize=${pageSize}&apiKey=c0d3fc744adc495b94ff66ab25a2c845`;

  fetchNews(url, res);
});



// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
