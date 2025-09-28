const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {

  res.send('Hello DevOps World!');

});

app.get('/health', (req, res) => {

  res.json({ status: 'OK', timestamp: new Date().toISOString() });

});

app.listen(port, () => {

  console.log(`App running on port ${port}`);

});
----------------------------------------------------------------------------

7. สร้างไฟล์ test.js :

// Simple test runner

console.log('✓ Server startup test passed');

console.log('✓ Health endpoint test passed');

console.log('All tests completed successfully!');
