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
-- Table structure for table `classcourses`
--

DROP TABLE IF EXISTS `classcourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classcourses` (
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
  CONSTRAINT `classcourses_ibfk_1` FOREIGN KEY (`TeacherId`) REFERENCES `teachers` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `classcourses_ibfk_2` FOREIGN KEY (`CourseId`) REFERENCES `courses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `classdetails`
--

DROP TABLE IF EXISTS `classdetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classdetails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `lichhoc` varchar(255) NOT NULL,
  `coso` varchar(255) NOT NULL,
  `daynha` varchar(255) NOT NULL,
  `phong` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ClassCourseId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ClassCourseId` (`ClassCourseId`),
  CONSTRAINT `classdetails_ibfk_1` FOREIGN KEY (`ClassCourseId`) REFERENCES `classcourses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `courses`
--

DROP TABLE IF EXISTS `courses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courses` (
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
  CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`SemesterId`) REFERENCES `semesters` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `learns`
--

DROP TABLE IF EXISTS `learns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learns` (
  `id` int NOT NULL AUTO_INCREMENT,
  `diemquatrinh` float DEFAULT '0',
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
  CONSTRAINT `learns_ibfk_1` FOREIGN KEY (`ClassCourseId`) REFERENCES `classcourses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `learns_ibfk_2` FOREIGN KEY (`RegistersCourseId`) REFERENCES `registerscourses` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `learns_ibfk_3` FOREIGN KEY (`StudentId`) REFERENCES `students` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `majors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `manganh` varchar(255) DEFAULT NULL,
  `tennganh` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `ScienceId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `manganh` (`manganh`),
  KEY `ScienceId` (`ScienceId`),
  CONSTRAINT `majors_ibfk_1` FOREIGN KEY (`ScienceId`) REFERENCES `sciences` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `planstudys`
--

DROP TABLE IF EXISTS `planstudys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `planstudys` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenkehoach` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `MajorId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `MajorId` (`MajorId`),
  CONSTRAINT `planstudys_ibfk_1` FOREIGN KEY (`MajorId`) REFERENCES `majors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `registerscourses`
--

DROP TABLE IF EXISTS `registerscourses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registerscourses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tongdiem` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `SemesterId` int NOT NULL,
  `CourseId` int NOT NULL,
  `StudentId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `SemesterId` (`SemesterId`),
  KEY `CourseId` (`CourseId`),
  KEY `StudentId` (`StudentId`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `sciences`
--

DROP TABLE IF EXISTS `sciences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sciences` (
  `id` int NOT NULL AUTO_INCREMENT,
  `makhoa` varchar(255) NOT NULL,
  `tenkhoa` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `makhoa` (`makhoa`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `semesters`
--

DROP TABLE IF EXISTS `semesters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `semesters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tenhocky` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `PlanStudyId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `PlanStudyId` (`PlanStudyId`),
  CONSTRAINT `semesters_ibfk_1` FOREIGN KEY (`PlanStudyId`) REFERENCES `planstudys` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mssv` varchar(255) NOT NULL,
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
  UNIQUE KEY `mssv` (`mssv`),
  KEY `MajorId` (`MajorId`),
  KEY `PlanStudyId` (`PlanStudyId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `magiaovien` varchar(255) NOT NULL,
  `tengiaovien` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-30 17:04:22
