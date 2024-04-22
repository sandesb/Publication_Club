// functions/getUsersBySemester.js

const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  try {
    const { sem } = event.queryStringParameters;
    const filePath = path.resolve(__dirname, 'db.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const users = JSON.parse(jsonData).users; // Assuming your JSON structure has a 'users' array

    // Filter users based on semester key
    const filteredUsers = users.filter(user => user.semester === sem);

    return {
      statusCode: 200,
      body: JSON.stringify(filteredUsers),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
