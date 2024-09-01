const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'public')));

// Route for serving video
app.get('/videos/:filename', (req, res) => {
    const filePath = path.join(__dirname, 'videos', req.params.filename);
    res.sendFile(filePath);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

