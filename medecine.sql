CREATE DATABASE  IF NOT EXISTS `medecine` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `medecine`;
-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: medecine
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `admis`
--

DROP TABLE IF EXISTS `admis`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admis` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `email` varchar(255) DEFAULT NULL,
  `pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admis`
--

LOCK TABLES `admis` WRITE;
/*!40000 ALTER TABLE `admis` DISABLE KEYS */;
INSERT INTO `admis` (`id`, `email`, `pass`) VALUES (1,'sylla@gmail.com','00000000');
/*!40000 ALTER TABLE `admis` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rendezvous`
--

DROP TABLE IF EXISTS `rendezvous`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rendezvous` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'Primary Key',
  `create_time` datetime DEFAULT NULL COMMENT 'Create Time',
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `phone` int unsigned DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rendezvous`
--

LOCK TABLES `rendezvous` WRITE;
/*!40000 ALTER TABLE `rendezvous` DISABLE KEYS */;
INSERT INTO `rendezvous` (`id`, `create_time`, `firstname`, `lastname`, `phone`, `email`, `message`) VALUES (1,'2022-02-21 14:17:02','ibrahim ','sylla ',225,'ibrahim@gmail.com','je vous en prie c\'est urgent.\r\ndemain je passerai merci.  '),(2,'2022-02-21 14:38:58','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(3,'2022-02-21 14:39:01','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(4,'2022-02-21 14:39:03','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(5,'2022-02-21 14:39:06','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(6,'2022-02-21 14:39:08','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(7,'2022-02-21 14:39:12','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(8,'2022-02-21 14:39:16','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(9,'2022-02-21 14:39:18','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(10,'2022-02-21 14:39:20','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(11,'2022-02-21 14:39:21','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein'),(12,'2022-02-21 14:39:23','ibrahim','sylla',225,'sekou@gmail.com','j\'ai pris mon rendez-vous hein donc faite vite hein');
/*!40000 ALTER TABLE `rendezvous` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-21 13:45:43
