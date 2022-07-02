-- MySQL Script generated by MySQL Workbench
-- Thu Jun 30 05:26:56 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`user` (
  `rut` VARCHAR(10) NOT NULL,
  `name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `password` VARCHAR(200) NOT NULL,
  `role` ENUM('0', '1', '2', '3') NOT NULL,
  PRIMARY KEY (`rut`),
  UNIQUE INDEX `rut_UNIQUE` (`rut` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`school`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`school` (
  `name` VARCHAR(200) NOT NULL,
  `director_rut` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`name`),
  INDEX `rut_idx` (`director_rut` ASC),
  UNIQUE INDEX `director_rut_UNIQUE` (`director_rut` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC),
  CONSTRAINT `school__rut`
    FOREIGN KEY (`director_rut`)
    REFERENCES `mydb`.`user` (`rut`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`grade`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`grade` (
  `school_name` VARCHAR(200) NOT NULL,
  `grade` CHAR(2) NOT NULL,
  `teacher_rut` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`school_name`, `grade`),
  INDEX `teacher_rut_idx` (`teacher_rut` ASC),
  CONSTRAINT `grade_teacher_rut`
    FOREIGN KEY (`teacher_rut`)
    REFERENCES `mydb`.`user` (`rut`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `grade_school_name`
    FOREIGN KEY (`school_name`)
    REFERENCES `mydb`.`school` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`student`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`student` (
  `rut` VARCHAR(10) NOT NULL,
  `grade` CHAR(2) NOT NULL,
  `school_name` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`rut`),
  UNIQUE INDEX `rut_UNIQUE` (`rut` ASC),
  INDEX `school_name_idx` (`school_name` ASC),
  CONSTRAINT `student_school`
    FOREIGN KEY (`school_name`)
    REFERENCES `mydb`.`school` (`name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `student_rut`
    FOREIGN KEY (`rut`)
    REFERENCES `mydb`.`user` (`rut`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`subjects`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`subjects` (
  `idSubject` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idSubject`),
  UNIQUE INDEX `idSubject_UNIQUE` (`idSubject` ASC),
  UNIQUE INDEX `name_UNIQUE` (`name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`course_subject`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`course_subject` (
  `id_subject` INT NOT NULL,
  `school_name` VARCHAR(200) NOT NULL,
  `grade` CHAR(2) NOT NULL,
  PRIMARY KEY (`id_subject`, `school_name`, `grade`),
  INDEX `grade_idx` (`school_name` ASC, `grade` ASC),
  CONSTRAINT `course_subject_id_subject`
    FOREIGN KEY (`id_subject`)
    REFERENCES `mydb`.`subjects` (`idSubject`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `grade`
    FOREIGN KEY (`school_name` , `grade`)
    REFERENCES `mydb`.`grade` (`school_name` , `grade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`evaluations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`evaluations` (
  `id_subject` INT NOT NULL,
  `school_name` VARCHAR(200) NOT NULL,
  `grade` CHAR(2) NOT NULL,
  `date` DATE NOT NULL,
  `type` VARCHAR(45) NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_subject`, `school_name`, `grade`, `name`),
  CONSTRAINT `evaluations_course_subject`
    FOREIGN KEY (`id_subject` , `school_name` , `grade`)
    REFERENCES `mydb`.`course_subject` (`id_subject` , `school_name` , `grade`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`qualifications`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`qualifications` (
  `id_subject` INT NOT NULL,
  `school_name` VARCHAR(200) NOT NULL,
  `grade` CHAR(2) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `qualification` DECIMAL(1,1) NULL,
  `student_rut` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id_subject`, `school_name`, `grade`, `name`, `student_rut`),
  INDEX `student_rut_idx` (`student_rut` ASC),
  CONSTRAINT `qualifications_evaluations`
    FOREIGN KEY (`id_subject` , `school_name` , `grade` , `name`)
    REFERENCES `mydb`.`evaluations` (`id_subject` , `school_name` , `grade` , `name`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `qualifications_student_rut`
    FOREIGN KEY (`student_rut`)
    REFERENCES `mydb`.`student` (`rut`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- Cuentas de prueba
INSERT INTO user VALUES ('19776112', 'Angelo', 'Alvear', '$2b$10$YNMVEHQ/PZkiSoISCrpszufsbipm6YEdX1.jwpk2mjYMOzZekG7oi', '0');
INSERT INTO user VALUES ('12345678', 'Michelle', 'Blanco', '$2b$10$TkqQIWfWZxjYH02HyH8LfOK8unsMtuUxtBbg4/m1MrMwguXUJP2FG', '1');
INSERT INTO user VALUES ('20100200', 'Lucio', 'Roldan', '$2b$10$Nui/0lKNkIA6R12f6FZh3.KBvGS5xSufwGi62SvEUe2Dx5J1vljJa', '2');
INSERT INTO user VALUES ('17200300', 'Abel', 'Orozco', '$2b$10$t1Z864AgteKdEpIA3tPlCOvAo3xV6gABfvj6Z/uNIxruEShk5CSG.', '3');

-- Profesores
INSERT INTO user VALUES ('19669630', 'Rafael', 'Fuentes', '$2b$10$sYalwHFiltH27vEwW9GwSufHayygbi8QXNQMALoJSlj0ijojDub1C', '2');
INSERT INTO user VALUES ('13388974', 'Olga', 'Santos', '$2b$10$hMhrFRC/Foh.ovi3/YB0fepiaqxvfTgryC6O96B5ZHOFMM.m1RKwy', '2');
INSERT INTO user VALUES ('13998433', 'Noelia', 'Herrera', '$2b$10$0/4en7NBqZHaX17gr.v/7OFNeHap5uv1SnFKPKbjObj5eEQPIcuae', '2');
INSERT INTO user VALUES ('19516133', 'Francisca', 'Aguilar', '$2b$10$yTcG1vZ42uWn8ljj8Y9uH.1Uu1YVU5yd8vDvUe6dyjN.sNKjbFfE2', '2');

-- Estudiantes
INSERT INTO user VALUES ('10100200', 'Rodrigo', 'Maturana', '$2b$10$t1Z864AgteKdEpIA3tPlCOvAo3xV6gABfvj6Z/uNIxruEShk5CSG.', '3');
INSERT INTO user VALUES ('12312311', 'Camila', 'Figueroa', '$2b$10$t1Z864AgteKdEpIA3tPlCOvAo3xV6gABfvj6Z/uNIxruEShk5CSG.', '3');
INSERT INTO user VALUES ('20123321', 'Rosa', 'Moya', '$2b$10$t1Z864AgteKdEpIA3tPlCOvAo3xV6gABfvj6Z/uNIxruEShk5CSG.', '3');

-- Administradores de colegios
INSERT INTO user VALUES ('11123123', 'Vicente', 'Cuadra', '$2b$10$TkqQIWfWZxjYH02HyH8LfOK8unsMtuUxtBbg4/m1MrMwguXUJP2FG', '1');

-- Escuela
INSERT INTO school VALUES ('Colegio Presbiteriano', '12345678');
INSERT INTO school VALUES ('Liceo Sebastián Piñera', '11123123');

INSERT INTO student VALUES ('10100200', '2B', 'Colegio Presbiteriano');
INSERT INTO student VALUES ('12312311', '3M', 'Colegio Presbiteriano');
INSERT INTO student VALUES ('20123321', '4M', 'Liceo Sebastián Piñera');