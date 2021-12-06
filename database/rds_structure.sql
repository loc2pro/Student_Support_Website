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
-- Table structure for table `Admins`
--

DROP TABLE IF EXISTS `Admins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Admins` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `password` (`password`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ClassCourses`
--

DROP TABLE IF EXISTS `ClassCourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ClassCourses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `malop` varchar(255) NOT NULL,
  `tenlop` varchar(255) NOT NULL,
  `trangthai` varchar(255) DEFAULT NULL,
  `soluong` int NOT NULL,
  `soluongDK` int NOT NULL DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `TeacherId` int DEFAULT NULL,
  `CourseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `TeacherId` (`TeacherId`),
  KEY `CourseId` (`CourseId`),
  CONSTRAINT `ClassCourses_ibfk_1` FOREIGN KEY (`TeacherId`) REFERENCES `Teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `ClassCourses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ClassDetails`
--

DROP TABLE IF EXISTS `ClassDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ClassDetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lichhoc` varchar(255) NOT NULL DEFAULT 'Đang cập nhập',
  `ca` varchar(255) NOT NULL,
  `coso` varchar(255) NOT NULL DEFAULT 'Đang cập nhập',
  `daynha` varchar(255) NOT NULL DEFAULT 'Đang cập nhập',
  `phong` varchar(255) NOT NULL DEFAULT 'Đang cập nhập',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ClassCourseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClassCourseId` (`ClassCourseId`),
  CONSTRAINT `ClassDetails_ibfk_1` FOREIGN KEY (`ClassCourseId`) REFERENCES `ClassCourses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Courses`
--

DROP TABLE IF EXISTS `Courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Courses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mahocphan` varchar(255) NOT NULL,
  `tenhocphan` varchar(255) NOT NULL,
  `sotinchi` varchar(255) NOT NULL,
  `sotiet` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SemesterId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `mahocphan` (`mahocphan`),
  KEY `SemesterId` (`SemesterId`),
  CONSTRAINT `Courses_ibfk_1` FOREIGN KEY (`SemesterId`) REFERENCES `Semesters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Learns`
--

DROP TABLE IF EXISTS `Learns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Learns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `diemquatrinh1` float DEFAULT '0',
  `diemquatrinh3` float DEFAULT '0',
  `diemquatrinh2` float DEFAULT '0',
  `diemgiuaky` float DEFAULT '0',
  `diemcuoiky` float DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ClassCourseId` int DEFAULT NULL,
  `RegistersCourseId` int DEFAULT NULL,
  `StudentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClassCourseId` (`ClassCourseId`),
  KEY `RegistersCourseId` (`RegistersCourseId`),
  KEY `StudentId` (`StudentId`),
  CONSTRAINT `Learns_ibfk_1` FOREIGN KEY (`ClassCourseId`) REFERENCES `ClassCourses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Learns_ibfk_2` FOREIGN KEY (`RegistersCourseId`) REFERENCES `RegistersCourses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Learns_ibfk_3` FOREIGN KEY (`StudentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Majors`
--

DROP TABLE IF EXISTS `Majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Majors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manganh` varchar(255) DEFAULT NULL,
  `tennganh` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ScienceId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `manganh` (`manganh`),
  KEY `ScienceId` (`ScienceId`),
  CONSTRAINT `Majors_ibfk_1` FOREIGN KEY (`ScienceId`) REFERENCES `Sciences` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `PlanStudys`
--

DROP TABLE IF EXISTS `PlanStudys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `PlanStudys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenkehoach` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MajorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MajorId` (`MajorId`),
  CONSTRAINT `PlanStudys_ibfk_1` FOREIGN KEY (`MajorId`) REFERENCES `Majors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ProgressLearns`
--

DROP TABLE IF EXISTS `ProgressLearns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ProgressLearns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tinchi` int NOT NULL,
  `tinchiyeucau` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `StudentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `StudentId` (`StudentId`),
  CONSTRAINT `ProgressLearns_ibfk_1` FOREIGN KEY (`StudentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `RegistersCourses`
--

DROP TABLE IF EXISTS `RegistersCourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `RegistersCourses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tongdiem` float DEFAULT '0',
  `hocphi` tinyint(1) DEFAULT '0',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ProgressLearnId` int DEFAULT NULL,
  `SemesterId` int DEFAULT NULL,
  `CourseId` int DEFAULT NULL,
  `StudentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ProgressLearnId` (`ProgressLearnId`),
  KEY `SemesterId` (`SemesterId`),
  KEY `CourseId` (`CourseId`),
  KEY `StudentId` (`StudentId`),
  CONSTRAINT `RegistersCourses_ibfk_1` FOREIGN KEY (`ProgressLearnId`) REFERENCES `ProgressLearns` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RegistersCourses_ibfk_2` FOREIGN KEY (`SemesterId`) REFERENCES `Semesters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RegistersCourses_ibfk_3` FOREIGN KEY (`CourseId`) REFERENCES `Courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `RegistersCourses_ibfk_4` FOREIGN KEY (`StudentId`) REFERENCES `Students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Sciences`
--

DROP TABLE IF EXISTS `Sciences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Sciences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `makhoa` varchar(255) NOT NULL,
  `tenkhoa` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `makhoa` (`makhoa`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Semesters`
--

DROP TABLE IF EXISTS `Semesters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Semesters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenhocky` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PlanStudyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PlanStudyId` (`PlanStudyId`),
  CONSTRAINT `Semesters_ibfk_1` FOREIGN KEY (`PlanStudyId`) REFERENCES `PlanStudys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Students`
--

DROP TABLE IF EXISTS `Students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `khoa` int DEFAULT NULL,
  `mssv` varchar(255) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `dateOfBirth` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MajorId` int DEFAULT NULL,
  `PlanStudyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MajorId` (`MajorId`),
  KEY `PlanStudyId` (`PlanStudyId`),
  CONSTRAINT `Students_ibfk_1` FOREIGN KEY (`MajorId`) REFERENCES `Majors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Students_ibfk_2` FOREIGN KEY (`PlanStudyId`) REFERENCES `PlanStudys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `Teachers`
--

DROP TABLE IF EXISTS `Teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `magiaovien` varchar(255) NOT NULL,
  `tengiaovien` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `magiaovien` (`magiaovien`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-04 22:40:59
