-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: sinhvien-iuh.c52psgx93rzv.ap-southeast-1.rds.amazonaws.com    Database: quanlysinhvien
-- ------------------------------------------------------
-- Server version	8.0.23

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Dumping data for table `Admins`
--

LOCK TABLES `Admins` WRITE;
/*!40000 ALTER TABLE `Admins` DISABLE KEYS */;
INSERT INTO `Admins` VALUES (1,'locadmin','$2b$10$z1I25lei/uFeScZAqzhFv.ymBKRzIJaxo/bNanYsEF0oTLN3q/nQ2','loc@gmail.com','https://static2.yan.vn/YanNews/2167221/202105/nhan-sac-cua-kim-bum-anh-the-ma-trong-nhu-tac-tuong-94e178d0.jpg','2021-11-18 17:28:23','2021-11-18 17:28:23');
/*!40000 ALTER TABLE `Admins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ClassCourses`
--

LOCK TABLES `ClassCourses` WRITE;
/*!40000 ALTER TABLE `ClassCourses` DISABLE KEYS */;
INSERT INTO `ClassCourses` VALUES (1,'LOP123','DHKTPM14CTT','Mở',60,60,'2021-10-27 10:06:45','2021-11-21 16:45:49',1,1),(2,'LOP123','DHTH14','Mở',60,54,'2021-10-27 10:06:45','2021-12-04 03:19:31',2,1),(3,'LƠP125','DHKT13A','Mở',60,56,'2021-10-27 10:06:45','2021-11-21 16:46:05',3,2),(4,'LOP126','DHTA12','Mở',60,49,'2021-10-27 10:06:45','2021-11-21 16:31:27',4,2),(5,'LOP143','DHOK14','Mở',60,60,'2021-10-27 10:06:45','2021-11-03 15:34:08',5,3),(6,'LOP543','DHIT13','Mở',60,49,'2021-10-27 10:06:45','2021-11-21 16:40:30',6,3),(7,'LOP423','DHTH14C','Mở',100,82,'2021-10-27 10:06:45','2021-11-09 03:44:39',7,4),(8,'LOP443','DHKTPM14A','Mở',60,50,'2021-10-27 10:06:45','2021-10-27 10:06:45',8,4),(9,'LOP098','DHTY14','Mở',60,40,'2021-10-27 10:06:45','2021-10-27 10:06:45',9,5),(10,'LOP556','DHTN13','Mở',60,56,'2021-10-27 10:06:45','2021-11-03 09:35:40',10,6),(11,'LOP977','DHOL14','Mở',60,45,'2021-10-27 10:06:45','2021-10-27 10:06:45',4,7),(12,'LOP786','DHTH14A','Đóng',60,13,'2021-10-27 10:06:45','2021-11-03 09:31:31',6,8),(13,'LOP844','DHKTPM13CTT','Mở',80,47,'2021-10-27 10:06:45','2021-11-21 16:46:18',8,8),(14,'LOP888','DHTH13E','Mở',80,13,'2021-10-27 10:06:45','2021-11-21 15:55:09',9,8);
/*!40000 ALTER TABLE `ClassCourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ClassDetails`
--

LOCK TABLES `ClassDetails` WRITE;
/*!40000 ALTER TABLE `ClassDetails` DISABLE KEYS */;
INSERT INTO `ClassDetails` VALUES (1,'2','1-3','Cơ sở 1 (Thành phố Hồ Chí Minh)','A','A3-02','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'2','4-6','Cơ sở 1 (Thành phố Hồ Chí Minh)','B','B4-02','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(3,'2','7-10','Cơ sở 1 (Thành phố Hồ Chí Minh)','B','B4-6','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(4,'3','1-3','Cơ sở 1 (Thành phố Hồ Chí Minh)','V','V11-02','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(5,'3','4-6','Cơ sở 1 (Thành phố Hồ Chí Minh)','X','X2-04','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(6,'3','9-11','Cơ sở 1 (Thành phố Hồ Chí Minh)','H','H8-09','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(7,'4','1-3','Cơ sở 1 (Thành phố Hồ Chí Minh)','D','D9-10','2021-10-27 10:06:45','2021-10-27 10:06:45',4),(8,'4','4-6','Cơ sở 1 (Thành phố Hồ Chí Minh)','A','A4-12','2021-10-27 10:06:45','2021-10-27 10:06:45',5),(9,'4','7-10','Cơ sở 1 (Thành phố Hồ Chí Minh)','D','D4-03','2021-10-27 10:06:45','2021-10-27 10:06:45',6),(10,'2','4-6','Cơ sở 1 (Thành phố Hồ Chí Minh)','A','A6-09','2021-10-27 10:06:45','2021-10-27 10:06:45',7),(11,'5','1-3','Cơ sở 1 (Thành phố Hồ Chí Minh)','B','B2-12','2021-10-27 10:06:45','2021-10-27 10:06:45',10),(12,'5','4-6','Cơ sở 1 (Thành phố Hồ Chí Minh)','B','B4-02','2021-10-27 10:06:45','2021-10-27 10:06:45',8),(13,'5','7-10','Cơ sở 1 (Thành phố Hồ Chí Minh)','H','H5-02','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(14,'6','4-6','Cơ sở 1 (Thành phố Hồ Chí Minh)','H','H1-11','2021-10-27 10:06:45','2021-10-27 10:06:45',5),(15,'6','7-10','Cơ sở 1 (Thành phố Hồ Chí Minh)','X','X11-12','2021-10-27 10:06:45','2021-10-27 10:06:45',6),(16,'7','9-11','Cơ sở 1 (Thành phố Hồ Chí Minh)','A','A2-11','2021-10-27 10:06:45','2021-10-27 10:06:45',4),(124,'3','9-11','Cơ sở 1 (Thành phố Hồ Chí Minh)','B','B3-04','2021-10-27 10:06:45','2021-10-27 10:06:45',13),(125,'5','1-3','Cơ sở 1 (Thành phố Hồ Chí Minh)','A','A3-07','2021-10-27 10:06:45','2021-10-27 10:06:45',14),(126,'2','1-3','Cơ sở 1 (Thành phố Hồ Chí Minh)','V','V8-06','2021-10-27 10:06:45','2021-10-27 10:06:45',13);
/*!40000 ALTER TABLE `ClassDetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Courses`
--

LOCK TABLES `Courses` WRITE;
/*!40000 ALTER TABLE `Courses` DISABLE KEYS */;
INSERT INTO `Courses` VALUES (1,'543425','Anh Văn 1','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'343242','Toán Cao Cấp 2','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(3,'345242','Java WWW','4','60','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(4,'522321','Kinh Tế Vĩ Mô','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(5,'875654','Kinh Tế Vi Mô','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(6,'676575','Tiếng Anh 1','4','60','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(7,'885575','Tiếng ANh 2','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',4),(8,'342324','Công Nghệ Mới','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(9,'232322','Lập Trình Phân Tán','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(10,'422323','Tư Tưởng Hồ Chí Minh','2','30','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(11,'634334','Java - Hướng Đối Ngoại','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(12,'443343','Tâm Lý Hoc Đại Cương','4','60','2021-10-27 10:06:45','2021-10-27 10:06:45',3),(13,'656565','Lập Trình IOT','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(14,'685645','Hệ Quản Trị Cơ Sở Dữ Liệu','3','45','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(15,'224242','Thể Dục Quốc Phòng','3','45','2021-12-04 05:10:24','2021-12-04 05:10:24',4);
/*!40000 ALTER TABLE `Courses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Learns`
--

LOCK TABLES `Learns` WRITE;
/*!40000 ALTER TABLE `Learns` DISABLE KEYS */;
INSERT INTO `Learns` VALUES (1,0,0,0,0,0,'2021-12-04 03:19:31','2021-12-04 03:19:31',2,1,1);
/*!40000 ALTER TABLE `Learns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Majors`
--

LOCK TABLES `Majors` WRITE;
/*!40000 ALTER TABLE `Majors` DISABLE KEYS */;
INSERT INTO `Majors` VALUES (1,'KTPM','Kỹ Thuật Phần Mềm','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'QTKD','Quản Trị Kinh Doanh','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(5,'TH','Tin Học','2021-11-29 15:54:39','2021-11-29 15:54:39',1);
/*!40000 ALTER TABLE `Majors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `PlanStudys`
--

LOCK TABLES `PlanStudys` WRITE;
/*!40000 ALTER TABLE `PlanStudys` DISABLE KEYS */;
INSERT INTO `PlanStudys` VALUES (1,'Kế Hoạch Khoa CNTT','2021-10-27 10:06:45','2021-12-02 15:43:11',1),(2,'Kế Hoạch Khoa Kinh Tế','2021-10-27 10:06:45','2021-12-02 15:43:24',2),(27,'Kế Hoạch','2021-12-03 16:16:53','2021-12-03 16:19:30',5);
/*!40000 ALTER TABLE `PlanStudys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ProgressLearns`
--

LOCK TABLES `ProgressLearns` WRITE;
/*!40000 ALTER TABLE `ProgressLearns` DISABLE KEYS */;
INSERT INTO `ProgressLearns` VALUES (1,4,131,'2021-10-27 10:06:45','2021-10-27 10:06:45',1);
/*!40000 ALTER TABLE `ProgressLearns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `RegistersCourses`
--

LOCK TABLES `RegistersCourses` WRITE;
/*!40000 ALTER TABLE `RegistersCourses` DISABLE KEYS */;
INSERT INTO `RegistersCourses` VALUES (1,0,0,'2021-12-04 03:19:31','2021-12-04 03:19:31',NULL,1,1,1);
/*!40000 ALTER TABLE `RegistersCourses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Sciences`
--

LOCK TABLES `Sciences` WRITE;
/*!40000 ALTER TABLE `Sciences` DISABLE KEYS */;
INSERT INTO `Sciences` VALUES (1,'CNTT','Công Nghệ Thông TIn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(2,'KT','Kinh Tế','2021-10-27 10:06:45','2021-10-27 10:06:45'),(4,'MAY','May','2021-11-29 17:00:54','2021-11-29 17:00:54'),(5,'OT','Kỹ Thuật Ô Tô','2021-12-04 02:14:17','2021-12-04 02:14:17');
/*!40000 ALTER TABLE `Sciences` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Semesters`
--

LOCK TABLES `Semesters` WRITE;
/*!40000 ALTER TABLE `Semesters` DISABLE KEYS */;
INSERT INTO `Semesters` VALUES (1,'HK1(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(2,'HK2(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',1),(3,'HK1(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(4,'HK2(2020-2021)','2021-10-27 10:06:45','2021-10-27 10:06:45',2),(7,'HK2(2021-2022)','2021-12-03 15:42:48','2021-12-03 16:03:55',1),(13,'HK222(2021-2022)','2021-12-03 16:10:37','2021-12-03 16:37:18',1);
/*!40000 ALTER TABLE `Semesters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Students`
--

LOCK TABLES `Students` WRITE;
/*!40000 ALTER TABLE `Students` DISABLE KEYS */;
INSERT INTO `Students` VALUES (1,18,'18000001','Nguyễn Hữu Lộc','$2b$10$xWtu035dNhJ7Gs1X1LTc0OWno7N5nslVYDL7XDnbbjSiPsMpitoJW','Locdev2000@gmail.com','06/11/2000','Đức Chánh - Mộ Đức','https://toplist.vn/images/800px/trung-tam-anh-mau-hoang-tram-319533.jpg','2021-11-24 03:22:35','2021-12-04 03:09:57',1,1),(120,15,'15000120','Lộc','$2b$10$JwNdBCl5.svCHibyG8D56OWjB6JWBnqm0jIEiSHaaWdVxtZIFJqei','admin@gmail.com','06/11/2000','Đức Chánh','cd430c27-ebc1-48db-98a4-af41b028f1f9.png','2021-11-28 05:10:51','2021-12-04 02:15:11',1,NULL);
/*!40000 ALTER TABLE `Students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Teachers`
--

LOCK TABLES `Teachers` WRITE;
/*!40000 ALTER TABLE `Teachers` DISABLE KEYS */;
INSERT INTO `Teachers` VALUES (1,'GV01','Nguyễn Văn Thành','Thanh@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(2,'GV02','Hoàng Thanh Long','Long@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(3,'GV03','Trần Thị Hà','Ha@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(4,'GV04','Lê Quang Khải','Khai@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(5,'GV05','Nguyễn Văn Tú','Tu@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(6,'GV06','Trần Lê Hoàng','Hoang@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(7,'GV07','Nguyễn Phương Thảo','Thao@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(8,'GV08','Lê Văn Sỉ','Si@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(9,'GV09','Trần Thái An','An@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45'),(10,'GV10','Bùi Thọ','Tho@edu.vn','2021-10-27 10:06:45','2021-10-27 10:06:45');
/*!40000 ALTER TABLE `Teachers` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-04 22:39:44
