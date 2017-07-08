/*
SQLyog Ultimate v11.33 (64 bit)
MySQL - 10.1.19-MariaDB : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
/*Table structure for table `about` */

CREATE TABLE `about` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `about` */

insert  into `about`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values (1,'Nodejs with mysql','<p>At maintenance.id we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by maintenance.id and how we use it. </p><p> <b>Log Files</b><br> Like many other Web sites, maintenance.id makes use of log files. These files merely logs visitors to the site - usually a standard procedure for hosting companies and a part of hosting services analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user\'s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable. </p>','2017-07-08 14:55:57','2017-07-08 14:55:57');

/*Table structure for table `info` */

CREATE TABLE `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;

/*Data for the table `info` */

insert  into `info`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values (1,'Express Js with mysql','Kick Start for ExpressJs','2017-07-08 14:15:15','2017-07-08 14:15:15');
insert  into `info`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values (6,'Express Js with mysql','Kick Start for ExpressJs','2017-07-08 14:28:29','2017-07-08 14:28:29');
insert  into `info`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values (7,'Express Js with mysql','Kick Start for ExpressJs','2017-07-08 14:36:54','2017-07-08 14:36:54');
insert  into `info`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values (8,'Express Js with mysql','Kick Start for ExpressJs','2017-07-08 14:39:19','2017-07-08 14:39:19');
insert  into `info`(`id`,`title`,`description`,`createdAt`,`updatedAt`) values (9,'Express Js with mysql','Kick Start for ExpressJs','2017-07-08 14:39:19','2017-07-08 14:39:19');

/*Table structure for table `user` */

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fullname` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

/*Data for the table `user` */

insert  into `user`(`id`,`username`,`password`,`fullname`,`email`,`createdAt`,`updatedAt`) values (1,'sintret@gmail.com','admin','Andy Laser','sintret@gmail.com','2017-07-08 22:42:08','2017-07-08 22:42:13');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
