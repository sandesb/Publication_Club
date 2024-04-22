// functions/getUserById.js

const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;
    const filePath = path.resolve(__dirname, '../db.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(jsonData).users; // Assuming your JSON structure has a 'users' array

    // Find user by ID
    const user = users.find(user => user.id === parseInt(id));

    if (!user) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
