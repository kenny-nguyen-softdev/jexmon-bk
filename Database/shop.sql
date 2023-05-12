-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 08, 2023 at 09:11 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `chitietdonhang`
--

CREATE TABLE `chitietdonhang` (
  `id` int(11) NOT NULL,
  `madonhang` int(11) NOT NULL,
  `masanpham` int(11) NOT NULL,
  `tensanpham` varchar(200) NOT NULL,
  `giasanpham` int(11) NOT NULL,
  `soluongsanpham` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `chitietdonhang`
--

INSERT INTO `chitietdonhang` (`id`, `madonhang`, `masanpham`, `tensanpham`, `giasanpham`, `soluongsanpham`) VALUES
(1, 1, 1, 'iPhone 12 Pro Max 128GB', 40490000, 1),
(2, 2, 2, 'iPhone 12 Pro Max 128GB', 40490000, 1),
(3, 2, 27, 'Vivo Y21', 4290000, 1),
(4, 2, 26, 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H', 26990000, 1),
(5, 3, 27, 'Vivo Y21', 4290000, 1),
(6, 4, 26, 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H', 26990000, 1);

-- --------------------------------------------------------

--
-- Table structure for table `donhang`
--

CREATE TABLE `donhang` (
  `id` int(11) NOT NULL,
  `tenkhachhang` varchar(200) NOT NULL,
  `sodienthoai` int(11) NOT NULL,
  `diachi` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `donhang`
--

INSERT INTO `donhang` (`id`, `tenkhachhang`, `sodienthoai`, `diachi`, `email`) VALUES
(1, 'Luong Duc', 123456789, 'Hung Yen', 'A@gmail.com'),
(2, 'Luong Trung Duc', 123456789, 'Hung Yen', 'ducduc@gmail.com'),
(3, 'DaoThiThu', 123456789, 'HaNoi', 'phamloan10011@gmail.com'),
(4, 'user3660151', 376658437, 'ascascasc', 'dangkhanh.dev@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `loaisanpham`
--

CREATE TABLE `loaisanpham` (
  `id` int(11) NOT NULL,
  `tenloaisanpham` varchar(200) NOT NULL,
  `hinhanhloaisanpham` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `loaisanpham`
--

INSERT INTO `loaisanpham` (`id`, `tenloaisanpham`, `hinhanhloaisanpham`) VALUES
(1, 'Điện Thoại', 'https://cdn.fptshop.com.vn/Uploads/Originals/2020/10/26/637393169370716242_ip-xr-dd.png'),
(2, 'Laptop', 'https://cdn.nguyenkimmall.com/images/detailed/724/10049049-laptop-lenovo-ideapad-3-14itl6-i3-1115g4-14-inch-82h700dnvn-1_2qns-0w.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

CREATE TABLE `sanpham` (
  `id` int(11) NOT NULL,
  `tensanpham` varchar(200) NOT NULL,
  `giasanpham` int(15) NOT NULL,
  `hinhanhsanpham` varchar(200) NOT NULL,
  `motasanpham` varchar(10000) NOT NULL,
  `idsanpham` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`id`, `tensanpham`, `giasanpham`, `hinhanhsanpham`, `motasanpham`, `idsanpham`) VALUES
(1, 'iPhone 12 Pro Max 128GB', 30990000, 'https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xam-new-600x600-200x200.jpg', '. Máy có một hiệu năng hoàn toàn mạnh mẽ đáp ứng tốt nhiều nhu cầu đến từ người dùng và mang trong mình một thiết kế đầy vuông vức, sang trọng.', 1),
(2, 'iPhone 11 Pro Max 256GB', 26290000, 'https://bachlongmobile.com/media/catalog/product/cache/2/image/040ec09b1e35df139433887a97daa66f/4/_/4_31_1.jpg', 'iphone 11 pro max là smartphone cao cấp có cấu hình mạnh, thiết kế đẹp.', 1),
(3, 'Điện thoại Samsung Galaxy A32', 6150000, 'https://cdn.tgdd.vn/Products/Images/42/234315/samsung-galaxy-a32-4g-thumb-tim-600x600-600x600.jpg', 'thuộc phân khúc tầm trung nhưng sở hữu nhiều ưu điểm vượt trội về màn hình lớn sắc nét, bộ bốn camera 64 MP cùng vi xử lý hiệu năng cao và được bán ra với mức giá vô cùng tốt.', 1),
(4, 'Điện thoại Samsung Galaxy S21 5G', 14990000, 'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg', 'Nổi bật với cụm camera sau được thiết kế đầy mới lạ, phần khuôn hình chữ nhật chứa bộ 3 camera ôm trọn cạnh trái của chiếc', 1),
(5, 'Laptop Apple MacBook Pro M1 2020 16GB/512GB/Space Grey (Z11C)', 40490000, 'https://cdn.tgdd.vn/Products/Images/44/231255/apple-macbook-pro-2020-z11c-4-600x600.jpg', 'Chip Apple M1 là một bộ vi xử lý mạnh mẽ, được ra mắt lần đầu tiên trên máy Mac. Đây là con chip sản xuất trên tiến trình 5 nm, tích hợp CPU 8 lõi với 4 lõi CPU tốc độ và và 4 lõi tiết kiệm năng lượng. Nhờ vậy, thời lượng pin của laptop được kéo dài đến tận 10 tiếng đồng hồ, giúp cho bạn thoải mái làm việc với một hiệu suất cực kỳ cao.', 2),
(6, 'Laptop Acer Aspire 7 A715-42G-R4ST R5-5500U 15.6 inch NH.QAYSV.004', 17890000, 'https://cdn.nguyenkimmall.com/images/detailed/727/10049040-laptop-acer-aspire-7-a715-42g-r4st-r5-5500u-15-6-inch-nh-qaysv-004-1.jpg', 'Màn hình IPS LED LCD 15.6\'\' Full HD hiển thị sắc nét, màu sắc sống động\r\nBộ xử lý AMD Ryzen 5 5500U cho hiệu năng mạnh mẽ, đa nhiệm mượt mà\r\nBàn phím trang bị đèn nền hỗ trợ người dùng trong điều kiện thiếu sáng\r\nỔ cứng SSD 256GB cho tốc độ phản hồi, khởi động máy, mở ứng dụng nhanh\r\nCard đồ họa rời NVIDIA GeForce GTX 1650 có thể chiến các tựa game phổ biến\r\nLaptop trang bị các cổng kết nối phổ biến: USB 3.2, USB 2.0, USB Type C, HDMI,...', 2),
(7, 'Xiaomi Redmi Note 9 Pro (6GB/64GB)\r\n        ', 4990000, 'https://cdn.tgdd.vn/Products/Images/42/221817/xiaomi-redmi-note-9-pro-xam-600x600.jpg', 'Kế thừa truyền thống tích hợp nhiều tính năng cực hấp dẫn trong mức giá cực tốt, Redmi Note 9 Pro khi được ra mắt đã để lại nhiều ấn tượng như: Vi xử lý Snapdragon 720G, màn hình nốt ruồi siêu tràn viền, cụm 4 camera 64 “chấm” và một viên pin khủng 5020 mAh.', 1),
(8, 'Xiaomi Redmi Note 10 (6GB/128GB)\r\n        ', 5490000, 'https://cdn.tgdd.vn/Products/Images/42/222758/xiaomi-redmi-note-10-thumb-green-600x600.jpg', 'đã trình làng chiếc điện thoại mang tên gọi là Xiaomi Redmi Note 10 với điểm nhấn chính là cụm 4 camera 48 MP, chip rồng Snapdragon 678 mạnh mẽ cùng nhiều nâng cấp như dung lượng pin 5.000 mAh và hỗ trợ sạc nhanh 33 W tiện lợi.', 1),
(9, 'Xiaomi Redmi Note 10 Pro (8GB/128GB)\r\n        ', 7090000, 'https://cdn.tgdd.vn/Products/Images/42/229228/xiaomi-redmi-note-10-pro-thumb-xam-600x600-600x600.jpg', 'Kế thừa và nâng cấp từ thế hệ trước, Xiaomi đã cho ra mắt Xiaomi Redmi Note 10 Pro (8GB/128GB) sở hữu một thiết kế cao cấp, sang trọng bên cạnh cấu hình vô cùng mạnh mẽ, hứa hẹn mang đến sự cạnh tranh lớn trong phân khúc smartphone tầm trung.', 1),
(10, 'Xiaomi Mi 10T Pro 5G', 11690000, 'https://cdn.tgdd.vn/Products/Images/42/228136/xiaomi-mi-10t-pro-den-600x600.jpg', 'mẫu smartphone cao cấp của Xiaomi trong năm 2020 cuối cùng cũng được trình làng với loạt những thông số gây “choáng ngợp”: Màn hình tần số quét 144 Hz, vi xử lý Snapdragon 865 và cụm camera khủng 108 MP kèm theo đó là một mức giá dễ chịu cho người dùng.', 1),
(11, 'OPPO Reno6 5G', 12990000, 'https://cdn.tgdd.vn/Products/Images/42/236186/oppo-reno6-5g-aurora-600x600.jpg', 'Màn hình 6.43\", Chip MediaTek Dimensity 900 5G\r\nRAM 8 GB, ROM 128 GB\r\nCamera sau: Chính 64 MP & Phụ 8 MP, 2 MP\r\nCamera trước: 32 MP\r\nPin 4300 mAh, Sạc 65 W', 1),
(12, 'MacBook Pro M1 2020 Space Grey (MYD82SA/A)', 31490000, 'https://cdn.tgdd.vn/Products/Images/44/231253/apple-macbook-pro-2020-m1-myd82saa-3-600x600.jpg', 'M.HÌNH\r\n13.3\", Retina\r\nCPU\r\nApple M1\r\nCARD\r\n8 nhân GPU\r\nPIN\r\nKhoảng 10 tiếng', 2),
(13, 'MacBook Air M1 2020 Gold (MGND3SA/A)', 26090000, 'https://cdn.tgdd.vn/Products/Images/44/231246/apple-macbook-air-2020-mgnd3saa-1-600x600.jpg', 'M.HÌNH\r\n13.3\", Retina\r\nCPU\r\nApple M1\r\nCARD\r\n7 nhân GPU\r\nPIN\r\nKhoảng 10 tiếng', 2),
(14, 'MacBook Pro M1 2020 Space Grey (Z11C)', 40490000, 'https://cdn.tgdd.vn/Products/Images/44/231255/apple-macbook-pro-2020-z11c-4-600x600.jpg', 'M.HÌNH\r\n13.3\", Retina\r\nCPU\r\nApple M1\r\nCARD\r\n8 nhân GPU\r\nPIN\r\nKhoảng 10 tiếng', 2),
(15, 'Dell Gaming G3 15 i7 10750H (P89F002BWH)', 28790000, 'https://cdn.tgdd.vn/Products/Images/44/244385/dell-g3-15-i7-p89f002bwh-16-600x600.jpg', 'M.HÌNH\r\n15.6\", Full HD, 120Hz\r\n\r\nCPU\r\ni7, 10750H, 2.6GHz\r\n\r\nCARD\r\nGTX 1660Ti 6GB\r\n\r\nPIN\r\n4-cell, 68Wh', 2),
(16, 'Lenovo IdeaPad Slim 5 15ITL05 (82FG001PVN)', 16640000, 'https://cdn.tgdd.vn/Products/Images/44/232192/lenovo-ideapad-slim-5-15itl05-i5-82fg001pvn-144320-064322-600x600.jpg', 'M.HÌNH\r\n15.6\", Full HD\r\nCPU\r\ni5, 1135G7, 2.4GHz\r\nCARD\r\nIntel Iris Xe\r\nPIN\r\n3-cell, 45Wh', 2),
(17, 'HP Pavilion 15 eg0505TU i5 1135G7 (46M02PA)', 17090000, 'https://cdn.tgdd.vn/Products/Images/44/244354/hp-pavilion-15-eg0505tu-i5-46m02pa-15-600x600.jpg', 'M.HÌNH\r\n15.6\", Full HD\r\nCPU\r\ni5, 1135G7, 2.4GHz\r\nCARD\r\nIntel Iris Xe\r\nPIN\r\n3-cell, 41Wh', 2),
(18, 'Samsung Galaxy Z Fold2 5G', 50000000, 'https://cdn.tgdd.vn/Products/Images/42/226099/samsung-galaxy-z-fold-2-den-600x600.jpg', 'Màn hình Chính 7.59\" & Phụ 6.23\", Chip Snapdragon 865+\r\nRAM 12 GB, ROM 256 GB\r\nCamera sau: 3 camera 12 MP\r\nCamera trước: Trong 10 MP & Ngoài 10 MP\r\nPin 4500 mAh, Sạc 25 W', 1),
(19, 'Samsung Galaxy Z Fold3 5G 256GB', 41990000, 'https://cdn.tgdd.vn/Products/Images/42/226935/samsung-galaxy-z-fold-3-silver-1-600x600.jpg', 'Màn hình Chính 7.6\" & Phụ 6.2\", Chip Snapdragon 888\r\nRAM 12 GB, ROM 256 GB\r\nCamera sau: 3 camera 12 MP\r\nCamera trước: 10 MP & 4 MP\r\nPin 4400 mAh, Sạc 25 W', 1),
(20, 'Samsung Galaxy Z Flip3 5G 128GB', 24990000, 'https://cdn.tgdd.vn/Products/Images/42/229949/samsung-galaxy-z-flip-3-cream-1-600x600.jpg', 'Màn hình Chính 6.7\" & Phụ 1.9\", Chip Snapdragon 888\r\nRAM 8 GB, ROM 128 GB\r\nCamera sau: 2 camera 12 MP\r\nCamera trước: 10 MP\r\nPin 3300 mAh, Sạc 15 W', 1),
(21, 'Samsung Galaxy A22 Đen', 5290000, 'https://cdn.tgdd.vn/Products/Images/42/249049/samsung-galaxy-a22-den-2-600x600.jpg', 'Màn hình 6.4\", Chip MediaTek MT6769V\r\nRAM 6 GB, ROM 128 GB\r\nCamera sau: Chính 48 MP & Phụ 8 MP, 2 MP, 2 MP\r\nCamera trước: 13 MP\r\nPin 5000 mAh, Sạc 15 W', 1),
(22, 'MSI Gaming GE66 Raider 11UH i7 11800H (259VN)', 70190000, 'https://cdn.tgdd.vn/Products/Images/44/249151/msi-gaming-ge66-raider-11uh-i7-259vn-600x600.jpg', 'M.HÌNH\r\n15.6\", 2K, 240Hz\r\nCPU\r\ni7, 11800H, 2.30 GHz\r\nCARD\r\nRTX 3080 16GB\r\nPIN\r\n4-cell, 99.9Wh', 2),
(23, 'MSI Summit E13 Flip i7 1185G7 (211VN)', 35990000, 'https://cdn.tgdd.vn/Products/Images/44/246951/msi-summit-e13-flip-i7-211vn-19-600x600.jpg', 'M.HÌNH\r\n13.4\", Full HD\r\nCPU\r\ni7, 1185G7, 3GHz\r\nCARD\r\nIntel Iris Xe\r\nPIN\r\n4-cell, 70Wh', 2),
(24, 'MSI Modern 14 B11MOL i3 1115G4 (813VN)', 14690000, 'https://cdn.tgdd.vn/Products/Images/44/250095/msi-modern-14-b11mol-i3-1115g4-8gb-256g-600x600.jpg', 'M.HÌNH\r\n14\", Full HD\r\nCPU\r\ni3, 1115G4, 3GHz\r\nCARD\r\nIntel UHD', 2),
(25, 'Acer Predator Helios PH315 54 78W5 i7 11800H', 30590000, 'https://cdn.tgdd.vn/Products/Images/44/247244/acer-predator-helios-ph315-54-78w5-i7-nhqc5sv001-600x600.jpg', 'M.HÌNH\r\n15.6\", Full HD, 144Hz\r\nCPU\r\ni7, 11800H, 2.30 GHz\r\nCARD\r\nRTX 3050Ti 4GB\r\n\r\nPIN\r\n4-cell, 57Wh', 2),
(26, 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H', 26990000, 'https://cdn.tgdd.vn/Products/Images/44/247243/acer-nitro-gaming-an515-57-727j-i7-nhqd9sv005-10-600x600.jpg', 'M.HÌNH\r\n15.6\", Full HD, 144Hz\r\nCPU\r\ni7, 11800H, 2.30 GHz\r\nCARD\r\nRTX 3050Ti 4GB\r\n\r\nPIN\r\n4-cell, 57Wh', 2),
(27, 'Vivo Y21', 4290000, 'https://cdn.tgdd.vn/Products/Images/42/115343/vivo-y21-white-01-1-600x600.jpg', 'Màn hình 6.51\", Chip MediaTek Helio P35\r\nRAM 4 GB, ROM 64 GB\r\nCamera sau: Chính 13 MP & Phụ 2 MP\r\nCamera trước: 8 MP\r\nPin 5000 mAh, Sạc 18 W', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `phone`) VALUES
(5, 'user3660151', '13122002', 'dangkhanh.dev@gmail.com', '0376658437.'),
(7, 'user3477131', '13122002', 'dangkhanh,dev@gmail.com', '-376658437.'),
(10, 'user2773183', '13122002', 'sacaca@gmail.com', '18903123123.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `donhang`
--
ALTER TABLE `donhang`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sanpham`
--
ALTER TABLE `sanpham`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chitietdonhang`
--
ALTER TABLE `chitietdonhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `donhang`
--
ALTER TABLE `donhang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `loaisanpham`
--
ALTER TABLE `loaisanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sanpham`
--
ALTER TABLE `sanpham`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
