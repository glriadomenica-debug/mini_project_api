create table `users` (
`id` INT not null AUTO_INCREMENT primary key,
`nama` VARCHAR(255) not null,
`email` VARCHAR(100) not null,
`role` VARCHAR(100)	 not null,
`created_at` DATETIME not null ,
`created_by` VARCHAR(255) not null,
`updated_at` DATETIME not null,
`update_by` VARCHAR(255) not null
);

create table `categories` (
`id` INT not null auto_increment primary key,
`nama_category` VARCHAR(100) not null,
`deskripsi` TEXT not null,
`created_at` DATETIME not null ,
`created_by` VARCHAR(255) not null,
`updated_at` DATETIME not null,
`update_by` VARCHAR(255) not null
);

create table `courses` (
`id` INT not null auto_increment primary key,
`nama_course` VARCHAR(100) not null,
`price` int not null,
`kuota` int not null,
`id_category`int not null,
`id_users` int not null,
`created_at` DATETIME not null ,
`created_by` VARCHAR(255) not null,
`updated_at` DATETIME not null,
`update_by` VARCHAR(255) not null,
foreign key (id_category) references categories(id),
foreign key (id_users) references users(id)
);

insert into users values (1,'Gloria Domenica','glriadomenica@gmail.com','admin', '2026-03-15 13:33:30','admin','2026-03-15', 'admin');

insert into users values (2,'Nicodemos Pereria','pereira@gmail.com','admin', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(3,'Lara Milana','Lara@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(4,'Jenes Til','contoh@gmail.com','studen', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(5,'Olivio da Costa','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(6,'Loria','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(7,'Susana Santi','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:40', 'admin'),
(8,'Tiffany','contoh@gmail.con','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(9,'Zendaya','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(10,'Xania Xanita','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(11,'Lauren','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(12,'Ivania','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(13,'Vania','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(14,'Maria de Fatima','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(15,'Flora','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(16,'Fiona','contoh@gmail.com','student', '2026-03-15 13:45:30','admin','2026-03-15 13:45:30', 'admin'),
(17,'Elsia Belo','contoh@gmail.com','student','2026-03-15 13:45:30', 'admin','2026-03-15 13:45:30', 'admin' );


insert into categories values (1, 'Programming','Belajar pemrograman', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(2, 'Web Development','Membuat Website', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(3,'Mobile Development','Membuat aplikasi mobile', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(4,'Data Science','Analisis dan pengolahan data','2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(5,'UI/UX Design','Desain tampilan aplikasi', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(6,'Digital Marketing','Pemasarn Digital', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(7,'Cyber Security', 'Keamanan sistem dan jaringan', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(8,'Cloud Computing','Belajar layanan cloud dan server', '2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(9, 'Database','Pengelolaan dan desain database','2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin'),
(10,'DevOps','Automasi deployment dan manajemen sistem','2026-03-15 14:00:00','admin', '2026-03-15 14:00:00', 'admin');

update users set role ='instructor' where id in (2,3,4,5,6,7,8,9,10,11);


INSERT INTO courses values (1,'Python Basic Programming',150000,30,1,2,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(2,'Java Programming Fundamental',220000,25,1,3,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(3,'Laravel Web Development',200000,20,2,4,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(4,'React JS for Beginners',250000,18,2,5,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(5,'Vue JS Basic',180000,20,2,6,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(6,'Android Mobile Development',320000,15,3,7,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(7,'Flutter Mobile Development',300000,20,3,8,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(8,'Data Analysis with Python',270000,20,4,9,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(9,'Machine Learning Basic',350000,15,4,10,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(10,'UI Design with Figma',120000,35,5,11,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(11,'UX Research Fundamentals',140000,25,5,2,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(12,'Digital Marketing Strategy',160000,30,6,3,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(13,'SEO Optimization Course',190000,22,6,4,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(14,'Cyber Security Basic',400000,12,7,5,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(15,'Advanced Cyber Security',650000,10,7,6,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(16,'AWS Cloud Computing',450000,15,8,7,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(17,'Google Cloud Platform',470000,12,8,8,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(18,'MySQL Database Design',170000,25,9,9,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(19,'DevOps with Docker',320000,15,10,10,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin'),
(20,'Kubernetes for DevOps',500000,10,10,11,'2026-03-15 16:00:00','admin','2026-03-15 16:00:00','admin');





