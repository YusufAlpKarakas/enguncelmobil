const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
const port = 3000;

// MySQL bağlantısı
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bordo613613',
  database: 'test_db',
  port: 3306
});

// Veritabanına bağlanma
connection.connect((err) => {
  if (err) {
    console.error('Veritabanına bağlanırken hata oluştu:', err.message);
    return;
  }
  console.log('MySQL bağlantısı başarılı!');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Kullanıcı kaydı endpoint
app.post('/register', async (req, res) => {
  const { full_name, username, email, password } = req.body;
  if (!full_name || !username || !email || !password) {
    return res.status(400).send('Tüm alanlar gereklidir!');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const query = 'INSERT INTO users (full_name, username, email, password) VALUES (?, ?, ?, ?)';
  connection.query(query, [full_name, username, email, hashedPassword], (err, result) => {
    if (err) {
      return res.status(500).send('Kayıt sırasında hata oluştu.');
    }
    res.status(200).send('Kayıt başarılı!');
  });
});

// Kullanıcı girişi endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  connection.query(query, [username], async (err, result) => {
    if (err || result.length === 0) {
      return res.status(400).send('Kullanıcı bulunamadı.');
    }

    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).send('Şifre hatalı.');
    }

    const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
    res.status(200).json({ message: 'Giriş başarılı!', token });
  });
});

// Ürünleri listeleme endpoint (kullanıcı tabanı olmadan)
app.get('/get-products', (req, res) => {
  const query = 'SELECT * FROM products'; // Kullanıcı tabanı olmadan tüm ürünleri çekiyoruz
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err); // Hata mesajını logluyoruz
      return res.status(500).send('Veritabanından ürünler alınırken hata oluştu.');
    }
    res.setHeader('Content-Type', 'application/json'); // Cevabın JSON formatında olduğunu belirtiyoruz
    res.status(200).json(results); // Ürünleri JSON formatında döndürüyoruz
  });
});



// Ürün ekleme endpoint
app.post('/add-product', (req, res) => {
  const { name, price } = req.body;
  const token = req.headers['authorization']?.split(' ')[1];

  if (!name || !price) {
    return res.status(400).send('Ürün adı ve fiyatı eksik.');
  }

  if (!token) {
    return res.status(401).send('Token bulunamadı.');
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Geçersiz token.');
    }

    const userId = decoded.userId;
    const query = 'INSERT INTO products (name, price, user_id) VALUES (?, ?, ?)';
    connection.query(query, [name, price, userId], (err, result) => {
      if (err) {
        return res.status(500).send('Veritabanına veri eklenirken hata oluştu.');
      }
      res.status(200).send('Ürün başarıyla eklendi!');
    });
  });
});

// Favori ürünü ekleme
app.post('/add-favorite', (req, res) => {
  const { productId } = req.body;
  const token = req.headers['authorization']?.split(' ')[1];

  if (!productId) {
    return res.status(400).send('Ürün ID gereklidir.');
  }

  if (!token) {
    return res.status(401).send('Token bulunamadı.');
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Geçersiz token.');
    }

    const userId = decoded.userId;
    // Favori ürün zaten mevcut mu kontrol et
    const checkQuery = 'SELECT * FROM favorites WHERE user_id = ? AND product_id = ?';
    connection.query(checkQuery, [userId, productId], (err, result) => {
      if (err) {
        return res.status(500).send('Veritabanı hatası.');
      }

      // Eğer zaten favorideyse
      if (result.length > 0) {
        return res.status(200).send('Bu ürün zaten favorilere eklenmiş.');
      }

      // Favoriyi ekle
      const query = 'INSERT INTO favorites (user_id, product_id) VALUES (?, ?)';
      connection.query(query, [userId, productId], (err, result) => {
        if (err) {
          return res.status(500).send('Favori eklerken hata oluştu.');
        }
        res.status(200).send('Favori başarıyla eklendi!');
      });
    });
  });
});




// Kullanıcının favori ürünlerini getirme
app.get('/get-favorites', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).send('Token bulunamadı.');
  }

  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).send('Geçersiz token.');
    }

    const userId = decoded.userId;
    const query = `
      SELECT p.* FROM products p
      JOIN favorites f ON p.id = f.product_id
      WHERE f.user_id = ?
    `;
    
    connection.query(query, [userId], (err, results) => {
      if (err) {
        return res.status(500).send('Favori ürünleri çekerken hata oluştu.');
      }
      res.status(200).json(results);
    });
  });
});

// Favori ürünü kaldırma
app.delete('/remove-favorite/:id', (req, res) => {
  const productId = req.params.id;  // Ürün ID'si URL parametresinden alınır
  const token = req.headers['authorization']?.split(' ')[1];  // Authorization başlığından token alınır

  if (!token) {
    return res.status(401).json({ success: false, error: 'Token bulunamadı.' });
  }

  // Token doğrulama işlemi
  jwt.verify(token, 'secret_key', (err, decoded) => {
    if (err) {
      return res.status(403).json({ success: false, error: 'Geçersiz token.' });
    }

    const userId = decoded.userId; // Kullanıcı ID'si token'dan alınır

    // Favori ürünü veritabanından silme sorgusu
    const query = 'DELETE FROM favorites WHERE user_id = ? AND product_id = ?';
    
    connection.query(query, [userId, productId], (err, result) => {
      if (err) {
        console.error('Veritabanı hatası:', err); // Detaylı hata loglaması
        return res.status(500).json({ success: false, error: 'Favori kaldırılırken hata oluştu.' });
      }

      // Eğer herhangi bir satır silinmediyse (yani ürün favorilerde yok)
      if (result.affectedRows === 0) {
        return res.status(404).json({ success: false, error: 'Bu ürün favorilerde yok.' });
      }

      res.status(200).json({ success: true, message: 'Favori başarıyla kaldırıldı!' });
    });
  });
});






// Sunucuyu başlat
app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde çalışıyor.`);
});
