# 📚 Mini Project Authentication & Testing API - Learning Management System (LMS)

## 📌 Deskripsi

Project ini adalah RESTful API sederhana untuk sistem Learning Management System (LMS). API ini dibuat menggunakan **Node.js** dan **Express.js** untuk mengelola data seperti users, categories dan courses.

---

## 🚀 Fitur Utama

- ✅ Authentication (JWT)
- ✅ CRUD Users
- ✅ CRUD Categories
- ✅ CRUD Courses
- ✅ CRUD Transactions
- ✅ Relasi antar tabel
- ✅ Caching
- ✅ API Testing menggunakan Postman

---

## 🛠️ Teknologi yang Digunakan

- Node.js
- Express.js
- MySQL
- Cache
- JWT Authentication
- Postman (API Testing)

---

## 📂 Struktur Project

```
mini-project-api/
│
├── config/           # Konfigurasi database
├── controller/       # Logic controller
├── models/           # Query database
├── router/           # Routing API
├── postman/          # File collection Postman
│   └── mini_project_postman.json
├── app.js            # Entry point
├── package.json
└── README.md
```

---

## ⚙️ Cara Menjalankan Project

### 1. Clone Repository

```
git clone https://github.com/username/nama-repo.git
```

### 2. Masuk ke Folder Project

```
cd nama-repo / nama-project
```

### 3. Install Dependencies

```
npm install
```

### 4. Setup Database

- Buat database di MySQL atau
- Import file SQL (yang ada di file database)
- Atur konfigurasi di file `.env` atau `config/database.js`

Contoh:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=lms_db

JWT_SECRET = secretkey
```

### 5. Jalankan Server

```
npm run dev
```

Server akan berjalan di:

```
http://localhost:3000
```

---

## 🔐 Authentication

Gunakan endpoint login :
POST / auth/login
Gunakan token di header:
Authorization : Bearer token

---

## 🔗 Endpoint API

### 📁 Users

- GET `/users` → Ambil semua category
- GET `/users/:id` → Ambil category berdasarkan ID
- POST `/users` → Tambah category
- PUT `/users/:id` → Update category
- DELETE `/users/:id` → Hapus category

### 📁 Categories

- GET `/categories` → Ambil semua category
- GET `/categories/:id` → Ambil category berdasarkan ID
- POST `/categories` → Tambah category
- PUT `/categories/:id` → Update category
- DELETE `/categories/:id` → Hapus category

### 📁 Courses

- GET `/courses` → Ambil semua category
- GET `/courses/:id` → Ambil category berdasarkan ID
- POST `/courses` → Tambah category
- PUT `/courses/:id` → Update category
- DELETE `/courses/:id` → Hapus category

### Relasi

- GET `/courses/with-relations` → Menampilkan course dengan relasi tabel lain
- GET `/courses/course-count` → Menghitung jumlah course per instructor

### 📁 Transactions

- GET `/transactions` → Ambil semua transactions
- GET `/transactions/:id` → Ambil transactions berdasarkan ID
- POST `/transactions` → Tambah transactions
- PUT `/transactions/:id` → Update transactions
- DELETE `/transactions/:id` → Hapus transactions

### Relasi

- GET `/transactions/details` → Menampilkan transaksi dengan detail relasi

---

## 🧪 Testing API

Gunakan Postman:

1. Buka Postman
2. Klik **Import**
3. Pilih file:

```
postman/mini_project.postman_collection.json
```

---

## ⚠️ Catatan Penting

- Pastikan database sudah terkoneksi dengan benar
- Jangan upload file `.env` ke GitHub
- Gunakan `.gitignore` untuk menghindari file sensitif

---

## 👨‍💻 Author

Mini Project ini dibuat untuk pembelajaran Backend Development menggunakan Express.js.

---

## 📄 License

Project ini bebas digunakan untuk keperluan belajar.
