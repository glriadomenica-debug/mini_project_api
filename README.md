# 📚 Mini Project API - Learning Management System (LMS)

## 📌 Deskripsi

Project ini adalah RESTful API sederhana untuk sistem Learning Management System (LMS). API ini dibuat menggunakan **Node.js** dan **Express.js** untuk mengelola data seperti users, categories, dan courses.

---

## 🚀 Fitur Utama

* ✅ CRUD Users
* ✅ CRUD Categories
* ✅ CRUD Courses
* ✅ Relasi antara Course dan Category
* ✅ API Testing menggunakan Postman

---

## 🛠️ Teknologi yang Digunakan

* Node.js
* Express.js
* MySQL
* Postman (API Testing)

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
├── app.js / index.js # Entry point
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
cd nama-repo
```

### 3. Install Dependencies

```
npm install
```

### 4. Setup Database

* Buat database di MySQL
* Import file SQL (jika ada)
* Atur konfigurasi di file `.env` atau `config/database.js`

Contoh:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=nama_database
```

### 5. Jalankan Server

```
npm start
```

Server akan berjalan di:

```
http://localhost:3000
```

---

## 🔗 Endpoint API

### 📁 Categories

* GET `/categories` → Ambil semua category
* GET `/categories/:id` → Ambil category berdasarkan ID
* POST `/categories` → Tambah category
* PUT `/categories/:id` → Update category
* DELETE `/categories/:id` → Hapus category

---

## 🧪 Testing API

Gunakan Postman:

1. Buka Postman
2. Klik **Import**
3. Pilih file:

```
postman/mini_project_postman.json
```

---

## ⚠️ Catatan Penting

* Pastikan database sudah terkoneksi dengan benar
* Jangan upload file `.env` ke GitHub
* Gunakan `.gitignore` untuk menghindari file sensitif

---

## 👨‍💻 Author

Mini Project ini dibuat untuk pembelajaran Backend Development menggunakan Express.js.

---

## 📄 License

Project ini bebas digunakan untuk keperluan belajar.
