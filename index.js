import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Static files - public klasörü
app.use(express.static(path.join(__dirname, 'public')));

// Ana sayfa - HTML döndür
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API endpoint'leri
app.get('/api/products', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'BAMİR Premium Product',
            price: 199,
            stock: 50,
            brand: 'BAMİR Online Store\'s'
        }
    ]);
});

app.post('/api/order', (req, res) => {
    const { productId, quantity } = req.body;
    res.json({
        success: true,
        message: 'Sipariş KHELL AI tarafından alındı!',
        order: { productId, quantity, date: new Date() }
    });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🔥 KHELL AI Backend Çalışıyor: ${PORT}`);
});

export default app;
