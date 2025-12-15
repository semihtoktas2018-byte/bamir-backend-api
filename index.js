// BAMİR Online Store’s – Backend Başlangıç Sunucusu
// Express sunucu altyapısı kurulumu

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// JSON desteği
app.use(express.json());

// Ana test endpoint'i
app.get('/', (req, res) => {
    res.json({
        status: "online",
        message: "BAMİR Backend API aktif",
        brand: "BAMİR Online Store’s"
    });
});

// Sunucuyu çalıştır
app.listen(port, () => {
    console.log(`BAMİR Backend API çalışıyor → Port: ${port}`);
});
