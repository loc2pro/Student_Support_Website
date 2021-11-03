-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: quanlysinhvien
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `classcourses`
--

LOCK TABLES `classcourses` WRITE;
/*!40000 ALTER TABLE `classcourses` DISABLE KEYS */;
INSERT INTO `classcourses` VALUES (1,'LOP123','DHKTPM14CTT','Mở',30,40,'2021-10-27 10:06:45','2021-10-27 10:06:45',1,1),(2,'LOP123','DHTH14','Mở',25,40,'2021-10-27 10:06:45','2021-10-27 10:06:45',2,1),(3,'LƠP125','DHKT13A','Mở',20,40,'2021-10-27 10:06:45','2021-10-27 10:06:45',1,2),(4,'LOP126','DHTA12','Mở',20,45,'2021-10-27 10:06:45','2021-10-27 10:06:45',2,2),(5,'LOP143','DHOK14','Mở',14,60,'2021-10-27 10:06:45','2021-10-27 10:06:45',1,3),(6,'LOP543','DHIT13','Mở',23,40,'2021-10-27 10:06:45','2021-10-27 10:06:45',2,3),(7,'LOP423','DHTH14C','Mở',55,80,'2021-10-27 10:06:45','2021-10-27 10:06:45',2,4),(8,'LOP443','DHKTPM14A','Mở',44,50,'2021-10-27 10:06:45','2021-10-27 10:06:45',1,4),(9,'LOP098','DHTY14','Mở',23,40,'2021-10-27 10:06:45','2021-10-27 10:06:45',1,5),(10,'LOP556','DHTN13','Mở',51,55,'2021-10-27 10:06:45','2021-10-27 10:06:45',2,6),(11,'LOP977','DHOL14','Mở',22,45,'2021-10-27 10:06:45','2021-10-27 10:06:45',2,7);
/*!40000 ALTER TABLE `classcourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `classdetails`
--

LOCK TABLES `classdetails` WRITE;
/*!40000 ALTER TABLE `classdetails` DISABLE KEYS */;
INSERT INTO `classdetails` VALUES (1,'Thứ 2 (Tiết 4 -> 6 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','A','A4-02','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'Thứ 4 (Tiết 1 -> 3 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','B','B3-02','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(3,'Thứ 5 (Tiết 1 -> 3 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','C','C1-12','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(4,'Thứ 5 (Tiết 4 -> 6 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','D','D4-02','2021-10-27 10:06:45','2021-10-27 10:06:45',4),(5,'Thứ 2 (Tiết 4 -> 6 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','E','E5-07','2021-10-27 10:06:45','2021-10-27 10:06:45',5),(6,'Thứ 3 (Tiết 7 -> 10 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','E','E4-02','2021-10-27 10:06:45','2021-10-27 10:06:45',6),(7,'Thứ 4 (Tiết 7 -> 10 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','F','F11-12','2021-10-27 10:06:45','2021-10-27 10:06:45',7),(8,'Thứ 5 (Tiết 9 -> 11 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','H','H4-03','2021-10-27 10:06:45','2021-10-27 10:06:45',8),(9,'Thứ 6 (Tiết 1 -> 3 )','Cơ sở 1 (Thành phố Hồ Chí Minh)','V','V11-05','2021-10-27 10:06:45','2021-10-27 10:06:45',9);
/*!40000 ALTER TABLE `classdetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `courses`
--

LOCK TABLES `courses` WRITE;
/*!40000 ALTER TABLE `courses` DISABLE KEYS */;
INSERT INTO `courses` VALUES (1,'543425','Anh Văn 1','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'343242','Toán Cao Cấp 2','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(3,'345242','Java WWW','4','60','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(4,'522321','Kinh Tế Vĩ Mô','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(5,'875654','Kinh Tế Vi Mô','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(6,'676575','Tiếng Anh 1','4','60','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(7,'885575','Tiếng ANh 2','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',4);
/*!40000 ALTER TABLE `courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `learns`
--

LOCK TABLES `learns` WRITE;
/*!40000 ALTER TABLE `learns` DISABLE KEYS */;
/*!40000 ALTER TABLE `learns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `majors`
--

LOCK TABLES `majors` WRITE;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
INSERT INTO `majors` VALUES (1,'KTPM','Kỹ Thuật Phần Mềm','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'QTKD','Quản Trị Kinh Doanh','2021-10-27 10:06:45','2021-10-27 10:06:45',2);
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `planstudys`
--

LOCK TABLES `planstudys` WRITE;
/*!40000 ALTER TABLE `planstudys` DISABLE KEYS */;
INSERT INTO `planstudys` VALUES (1,'Kế Hoạch CNTT','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'Kế Hoạch KT','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(3,'Kế hoạch học tập khoa Kinh Tế','2021-10-30 08:42:47','2021-10-30 08:42:47',1),(4,'Kế hoạch học tập khoa Kinh Tế','2021-10-30 08:42:53','2021-10-30 08:42:53',2);
/*!40000 ALTER TABLE `planstudys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `registerscourses`
--

LOCK TABLES `registerscourses` WRITE;
/*!40000 ALTER TABLE `registerscourses` DISABLE KEYS */;
/*!40000 ALTER TABLE `registerscourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `sciences`
--

LOCK TABLES `sciences` WRITE;
/*!40000 ALTER TABLE `sciences` DISABLE KEYS */;
INSERT INTO `sciences` VALUES (1,'CNTT','Công Nghệ Thông TIn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(2,'KT','Kinh Tế','2021-10-27 10:06:45','2021-10-27 10:06:45');
/*!40000 ALTER TABLE `sciences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `semesters`
--

LOCK TABLES `semesters` WRITE;
/*!40000 ALTER TABLE `semesters` DISABLE KEYS */;
INSERT INTO `semesters` VALUES (1,'HK1(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'HK2(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(3,'HK1(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(4,'HK2(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',2);
/*!40000 ALTER TABLE `semesters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (1,'18090131','Nguyễn Hữu Lộc','$2b$10$kl039WN2F/sG5tyc4VguceWoI53YzX8fhjFUcXZ5AJpzV/c4x4My.','locdev2000@gmail.com','06/11/2000','Đức Chánh','https://topquangngai.vn/wp-content/uploads/2021/02/chup-anh-the-dep-quang-ngai-7.jpg','2021-10-27 10:06:45','2021-10-27 10:06:45',1,1),(2,'123456','Nguyễn Lộc','$2b$10$kl039WN2F/sG5tyc4VguceWoI53YzX8fhjFUcXZ5AJpzV/c4x4My.','locdevid@gmail.com','06/11/2000','Hồ Chí Minh','https://toplist.vn/images/800px/dino-studio-anh-vien-cho-be-va-gia-dinh-317623.jpg','2021-10-27 10:06:45','2021-10-27 10:06:45',2,2),(3,'180901311','Nguyễn Hữu Lộc','$2b$10$kl039WN2F/sG5tyc4VguceWoI53YzX8fhjFUcXZ5AJpzV/c4x4My.','loc@gmail.com',NULL,NULL,NULL,'2021-10-28 16:31:28','2021-10-28 16:31:28',NULL,NULL);
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (1,'GV01','Nguyễn Văn Thành','Thanh@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(2,'GV02','Hoàng Thanh Long','Long@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-31 14:50:55
