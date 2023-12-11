-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: projeto
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `sobrenome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `setor` varchar(255) NOT NULL,
  `contato` varchar(255) NOT NULL,
  `Datacontrato` varchar(255) DEFAULT NULL,
  `cpf` varchar(255) NOT NULL,
  `admin` tinyint NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `IDX_4a257d2c9837248d70640b3e36` (`email`),
  UNIQUE KEY `IDX_cf5672007a15c02a389381d7bf` (`contato`),
  UNIQUE KEY `IDX_fd04577de1de205c8a1f529731` (`cpf`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Luan','Honório','Luan@gmail.com','qwq897123d','Administração','82988762632','2023-11-30','98375263087',1,'2023-11-30 15:00:33','2023-12-01 16:27:05'),(2,'Glaucos','Costa','Glaucoscosta@gmaIL.COM','QWEQ23E123123QW','Administração','82988912301','2023-09-06','12121212121',1,'2023-12-01 14:45:51',NULL),(3,'mariana','silva','marisillva@gmail.com','329ru3hf29','Jurídico','827373475','2020-02-01','23423423234',0,'2023-12-01 15:24:12',NULL),(4,'carlos','vasconselos','carlosvas@gmail.com','adsfq2n342r3','Tecnologia da Informação','8291231233432','2023-10-27','1232445567890',0,'2023-12-01 15:36:31',NULL),(9,'Amanda','Silva','amanda.silva@gmail.com','p@ssw0rd123','Recursos Humanos','81987654321','2023-10-15','12345678901',0,'2023-12-01 16:45:57',NULL),(10,'Carlos','Souza','carlos.souza@hotmail.com','securePwd456','TI','1122334455','2023-09-20','98765432109',0,'2023-12-01 16:46:08',NULL),(12,'Rafael','Oliveira','rafael.oliveira@gmail.com','securePass123','Vendas','987654321','2023-11-10','45678901234',0,'2023-12-01 16:49:15',NULL),(13,'Ana','Ferreira','ana.Ferreira@hotmail.com','pass1234','Logística','123456789','2023-08-25','09876543210',0,'2023-12-01 16:49:37',NULL),(14,'Fernanda','Martins','fernanda.martins@yahoo.com','f3rn@Pwd','Desenvolvimento','9988776655','2023-10-05','56789012345',0,'2023-12-01 16:53:09',NULL),(15,'Pedro','Santos','pedro.santos@gmail.com','securePass789','Administração','5551234567','2023-09-30','32109876543',1,'2023-12-01 16:54:09',NULL),(20,'Patrícia','Oliveira','patricia.oliveira@gmail.com','p@tr1Pwd','Logística','9555666777','2023-10-15','43378901234',0,'2023-12-01 16:56:35',NULL),(21,'Gustavo','Martins','gustavo.martins@hotmail.com','gust@v0Pwd','Vendas','9911223344','2023-11-20','67890123456',0,'2023-12-01 16:57:28',NULL),(23,'Hugo','Oliveira','hugo.oliveira@gmail.com','hug0Pwd123','Logística','9665666777','2023-10-10','89012345678',0,'2023-12-01 16:57:56',NULL),(25,'Leticia','Mendes','leticia.mendes@gmail.com','let1Pwd456','Administração','999654321','2023-09-25','90127656789',1,'2023-12-01 16:58:50',NULL),(26,'Leonardo','Silva','leonardo.silva@hotmail.com','le0Pwd789','Vendas','9911122233','2023-11-01','01234567890',0,'2023-12-01 16:58:59',NULL),(28,'Vanessa','Ribeiro','vanessa.ribeiro@yahoo.com','v@nessaPwd123','Administração','9000776655','2023-12-15','10005678901',1,'2023-12-01 16:59:19',NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-07 17:13:49
