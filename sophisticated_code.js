/*
 * Filename: sophisticated_code.js
 * Description: Complex and elaborate JavaScript code showcasing different functionalities and techniques.
 */

// Importing external libraries
const axios = require('axios');
const moment = require('moment');
const _ = require('lodash');

// Constants
const API_URL = 'https://api.example.com/data';
const DATE_FORMAT = 'YYYY-MM-DD';

// Global variables
let data = [];

// Function to fetch data from API
async function fetchData() {
  try {
    const response = await axios.get(API_URL);
    data = response.data;
    console.log('Data fetched successfully!');
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Function to process data
function processData() {
  try {
    const processedData = [];

    // Filter data by specific conditions
    const filteredData = _.filter(data, { status: 'active', category: 'A' });

    // Group data by date
    const groupedData = _.groupBy(filteredData, 'date');

    // Iterate over grouped data
    _.forEach(groupedData, (group, date) => {
      const processedGroup = [];

      // Iterate over group and perform calculations
      _.forEach(group, (item) => {
        const processedItem = {
          id: item.id,
          price: item.price,
          discounted: false,
          discount: null,
        };

        // Apply discount if price is greater than 1000
        if (item.price > 1000) {
          processedItem.discounted = true;
          processedItem.discount = item.price * 0.1;
        }

        processedGroup.push(processedItem);
      });

      processedData.push({
        date,
        items: processedGroup,
      });
    });

    console.log('Data processed successfully!', processedData);
  } catch (error) {
    console.error('Error processing data:', error.message);
  }
}

// Function to display data in a formatted way
function displayData() {
  if (data.length === 0) {
    console.log('No data available to display.');
  } else {
    console.log(JSON.stringify(data, null, 2));
  }
}

// Function to calculate average price
function calculateAveragePrice() {
  if (data.length === 0) {
    console.log('No data available to calculate average price.');
  } else {
    const totalPrice = _.sumBy(data, 'price');
    const averagePrice = totalPrice / data.length;
    console.log('Average Price:', averagePrice.toFixed(2));
  }
}

// Function to find latest date
function findLatestDate() {
  if (data.length === 0) {
    console.log('No data available to find latest date.');
  } else {
    const dates = _.map(data, 'date');
    const sortedDates = _.sortBy(dates, date => moment(date, DATE_FORMAT));
    const latestDate = _.last(sortedDates);
    console.log('Latest Date:', latestDate);
  }
}

// Execute code
fetchData();
processData();
displayData();
calculateAveragePrice();
findLatestDate();

// ...more code and functionalities...