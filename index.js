import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Ana test rotası
app.get('/', (req, res) => {
    res.json({ 
        status: 'BAMİR Backend Aktif — BAMİR Online Store\'s',
        timestamp: new Date(),
        message: 'KHELL AI Engine Ready! 🔥'
    });
});

// API endpoint'leri
app.get('/api/products', (req, res) => {
    res.json([
        {
            id: 1,
            name: 'BAMİR Premium Product',
            price: 199,
            stock: 50
        }
    ]);
});

app.post('/api/order', (req, res) => {
    const { productId, quantity } = req.body;
    res.json({
        success: true,
        message: 'Order received',
        order: { productId, quantity, date: new Date() }
    });
});

// Port ayarı
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🔥 BAMİR Backend Çalışıyor: ${PORT}`);
});

export default app;
