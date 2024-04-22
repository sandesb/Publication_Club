// functions/getUsers.js

const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const filePath = path.resolve(__dirname, './db.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(jsonData).users; // Assuming your JSON structure has a 'users' property
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
