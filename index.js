require('dotenv').config();
const express = require('express');
const app = express();

// Orduyu ayağa kaldır
app.use(express.json());

// Ana test rotası
app.get('/', (req, res) => {
    res.send('BAMİR Backend Aktif — BAMİR Online Store’s');
});

// Port ayarı
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🔥 BAMİR Backend Çalışıyor: ${PORT}`);
});

