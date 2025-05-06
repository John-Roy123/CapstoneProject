-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema quickmath
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema quickmath
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `quickmath` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `quickmath` ;

-- -----------------------------------------------------
-- Table `quickmath`.`accounts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `quickmath`.`accounts` (
  `id` BIGINT NOT NULL,
  `average_score` DOUBLE NULL DEFAULT NULL,
  `password` VARCHAR(255) NOT NULL,
  `role` VARCHAR(255) NOT NULL,
  `top_score` INT NULL DEFAULT NULL,
  `username` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `UKk8h1bgqoplx0rkngj01pm1rgp` (`username` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `quickmath`.`accounts_seq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `quickmath`.`accounts_seq` (
  `next_val` BIGINT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `quickmath`.`game_result`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `quickmath`.`game_result` (
  `id` BIGINT NOT NULL,
  `account_username` VARCHAR(255) NULL DEFAULT NULL,
  `score` INT NOT NULL,
  `gameDate` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `game_date` DATE NULL DEFAULT NULL,
  `game_mode` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `quickmath`.`game_result_seq`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `quickmath`.`game_result_seq` (
  `next_val` BIGINT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;



