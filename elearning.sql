-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 05, 2022 at 07:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `course_id` int(11) NOT NULL,
  `instructor_id` int(11) DEFAULT NULL,
  `price` varchar(255) NOT NULL DEFAULT '',
  `description` tinytext NOT NULL,
  `name` varchar(150) NOT NULL,
  `image` varchar(255) DEFAULT '',
  `type` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `watch` varchar(20) DEFAULT 'normal'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`course_id`, `instructor_id`, `price`, `description`, `name`, `image`, `type`, `createdAt`, `updatedAt`, `deletedAt`, `watch`) VALUES
(26, 1, '10', 'This Learn Swift series is designed for beginners with NO programming experience. It\'s compatible with the latest Swift 4 and Xcode 9.', 'Learn Swift for Beginners', 'https://images.ctfassets.net/ooa29xqb8tix/4cDON6Rn9Q5ysi4HCsJQOF/fedd689e11b818352c033d5e502ea23c/SwiftUI_Concurrency_800x600_cover.png?w=400&q=50', 'swift', '2022-05-31 04:05:56', '2022-05-31 04:05:56', NULL, 'normal'),
(27, 1, '21', 'Sketch has revolutionized the world of mobile application design by providing the tools to transform yourself into a professional app designer with only a few hours of training. This course will teach you to use Sketch to design dynamic, development-ready', 'Sketch from A to Z', 'https://images.ctfassets.net/ooa29xqb8tix/5uzRySkNEbCMm2FbVcnHTQ/4f6be620b9c9e0777e6cf6751ef0e364/Sketch_Plugin_800x600_cover_new.png?w=400&q=50', 'sketch', '2022-05-31 04:10:23', '2022-05-31 04:10:23', NULL, 'normal'),
(28, 3, '23', 'A quick overview of two new features we’ve added to Framer Sites Beta: Aspect Ratio locking and Min and Max sizing—allowing you to design fully responsive web pages with ease. Request access to the Framer Sites Beta over at https://www.framer.com/site', 'Framer Sites', 'https://images.ctfassets.net/ooa29xqb8tix/EEBifkY5fIz56pT7Gd45w/75d4ab7f0fb8954de8938deaed2bdb05/Framer_Playground_800x600_cover_new.png?w=400&q=50', 'framer', '2022-05-31 08:24:31', '2022-05-31 08:24:31', NULL, 'normal'),
(29, 3, '0', 'When it comes to writing code in Framer, sooner or later you’re going to get stuck on a tricky problem. In this video, you’ll learn how to get help through snippets: re-usable solutions to common problems.', 'Framer Tutorial', 'https://images.ctfassets.net/ooa29xqb8tix/3NM5VhT1oXziOULEemEEzS/f164c43f91375abc9bb3d44defc9bea1/Design_and_Code_in_Framer_X_800x600_cover_new.png?w=400&q=50', 'framer', '2022-05-31 08:28:37', '2022-05-31 08:28:37', NULL, 'tutorial'),
(30, 3, '0', 'Framer Tips', 'Framer Livestream', 'https://images.ctfassets.net/ooa29xqb8tix/6tQJAXuig7Tr6AW50tMsh6/db7add684a48ef1e24482ae82bc77093/swiftUI_part_2_800x600_cover_new.png?w=400&q=50', 'framer', '2022-05-31 08:32:16', '2022-05-31 08:42:32', NULL, 'livestream'),
(31, 5, '0', 'In this video I will give you a quick introduction to the most common functionalities of a UI/UX Design tool called Figma.', 'Figma IntroductionTutorial For UI/UX Designers', 'https://images.ctfassets.net/ooa29xqb8tix/75irTnKFPIXtYaBinuiDAl/01f68a3d04fae66751595786e2154a7c/Prototyping_in_Figma_800x600.png?w=400&q=50', 'figma', '2022-05-31 08:45:47', '2022-05-31 08:46:23', NULL, 'tutorial'),
(32, 5, '8', 'In this portfolio course we will go over and create a portfolio on Figma that will maximize your chances of getting an interview for each job application. Now in this lesson, we will go over the user goals(hiring manager) and how to create our content str', 'How to build your first UX Design PORTFOLIO', 'https://images.ctfassets.net/ooa29xqb8tix/1yAxvbT6a33CA3595eNMfS/506d921985f582173693e7f2ccd7cdd8/UI_Design_Quick_Websites_in_Figma_800x600.png?w=400&q=50', 'figma', '2022-05-31 08:47:35', '2022-05-31 08:47:35', NULL, 'normal'),
(33, 5, '22', 'This is a Full redux course to learn about redux.', 'Full Redux Course Tutorial', 'https://images.ctfassets.net/ooa29xqb8tix/J6KiaOqQyBtSa84hx6fuI/2cd1d475743a2a42c8643b2a69e88547/Advanced_React_Hooks_800x600_cover.png?w=400&q=50', 'react', '2022-05-31 08:52:00', '2022-05-31 08:58:01', NULL, 'tutorial'),
(34, 5, '23', 'Learn React JS with Typescript in one video.', 'React Typescript Tutorial', 'https://images.ctfassets.net/ooa29xqb8tix/7MWFSk9hPe69mpKoQZrU8v/f699c21b34e3a1269faf7a84a7e76cc0/React_Hook_800x600_cover_new.png?w=400&q=50', 'react', '2022-05-31 08:53:55', '2022-05-31 08:53:55', NULL, 'tutorial'),
(35, 5, '25', 'Build an app with React and GraphQL', 'Build a React and GraphQL App', 'https://images.ctfassets.net/ooa29xqb8tix/26dc52EBTmrCQebZKEYr6C/9522e71b5d640bff332efab1998c5da7/React-native_part_2_800x600_cover_new.png?w=400&q=50', 'react', '2022-05-31 08:56:31', '2022-05-31 08:56:31', NULL, 'normal'),
(36, 1, '50', 'In this course we shall cover the basics you need to know about Typescript.', 'Typescript Basic', 'https://images.ctfassets.net/ooa29xqb8tix/5CqnYLFsJgQzGnoDmu5yCZ/ea211e60ea4d81792cc178fca5aaedac/React_for_Designers800x600_cover_new.png?w=400&q=50', 'react', '2022-05-31 09:00:20', '2022-05-31 09:00:20', NULL, 'normal'),
(37, 1, '0', 'Introduction to TypeScript', 'TypeScript Tutorial', 'https://images.ctfassets.net/ooa29xqb8tix/4ZoOhVHDkMONJqv8g0aVYX/67d236ed77d33dbe4036b44fcf7f4b98/Build_an_Expense_Tracker_App_in_SwiftUI_800x600.png?w=400&q=50', 'react', '2022-05-31 09:04:22', '2022-05-31 09:04:22', NULL, 'tutorial'),
(38, 3, '110', 'iOS Academy offers the #1 course for iOS Development for Beginners. Learn to create iPhone and iPad apps from scratch. Everyone these days has an app idea; learn the important skill of making those apps, make yourself more marketable, change industries to', 'Swift for Beginners', 'https://images.ctfassets.net/ooa29xqb8tix/39ALEtY2I8P1f2FWpKONXu/2d1b034cb12451491ebcce06b00de439/SwiftUI_Advanced_Course.png?w=400&q=50', 'swift', '2022-05-31 09:22:19', '2022-05-31 09:22:19', NULL, 'normal'),
(39, 3, '0', 'Swift Tutorial', 'Swift Tutorial', 'https://images.ctfassets.net/ooa29xqb8tix/2DXrdwlcykUGvn0zgdP9mM/882eac65279692ade4bb900ed5e658f3/CSS_Handbook_800x600_cover.png?w=400&q=50', 'swift', '2022-05-31 09:24:53', '2022-05-31 09:24:53', NULL, 'tutorial'),
(40, 1, '0', 'Sketch is one of the top apps pros use for UI and icon design.', 'Sketch for Beginners Livestream', 'https://images.ctfassets.net/ooa29xqb8tix/2u8a9JnxxavVp2pZyPKq3A/cf2152e1a363373c03fc22b5bff6f233/Learn_Sketch_800x600_cover_new.png?w=400&q=50', 'sketch', '2022-05-31 09:28:06', '2022-05-31 09:28:27', NULL, 'livestream'),
(41, 1, '0', 'Learn how to use React Router V6 in this crash course for beginners. React Router is the most popular way to add page routing in React Apps. It is used very frequently in React projects.', 'React Router 6 ', 'https://images.ctfassets.net/ooa29xqb8tix/26dc52EBTmrCQebZKEYr6C/9522e71b5d640bff332efab1998c5da7/React-native_part_2_800x600_cover_new.png?w=400&q=50', 'react', '2022-06-04 01:58:41', '2022-06-04 01:58:41', NULL, 'normal'),
(42, 1, '10', 'fasfa', 'fsa', 'https://react-hook-form.com/api/useform/reset', 'swift', '2022-06-04 02:09:27', '2022-06-04 02:09:27', '2022-06-04 04:02:24', 'normal'),
(43, 1, '10', 'fdasfa', 'afsdf', 'https://react-hook-form.com/api/useform/reset', 'swift', '2022-06-04 02:10:05', '2022-06-04 02:10:05', '2022-06-04 04:02:25', 'normal'),
(44, 1, '10', 'fdas', 'Ngo Dai Tan', 'http://localhost:3000/create-course', 'swift', '2022-06-04 02:14:06', '2022-06-04 02:14:06', '2022-06-04 04:02:26', 'normal'),
(45, 1, '10', 'Redux has the power of greatly enhancing your ReactJS app. Let me introduce you to this Tutorial Series on ReactJS / Redux.', 'ReactJS + Redux', 'https://images.ctfassets.net/ooa29xqb8tix/1fXSYryV8Uit6mtpd2wzG5/bb7510060c15dbe7b5deb152c29b504f/ProtoPie_800x600_cover_new.png?w=400&q=50', 'react', '2022-06-05 00:25:23', '2022-06-05 00:27:28', NULL, 'normal');

-- --------------------------------------------------------

--
-- Table structure for table `favourite_courses`
--

CREATE TABLE `favourite_courses` (
  `course_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `favourite_courses`
--

INSERT INTO `favourite_courses` (`course_id`, `user_id`) VALUES
(26, 15),
(27, 15);

-- --------------------------------------------------------

--
-- Table structure for table `topics`
--

CREATE TABLE `topics` (
  `course_id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` tinytext DEFAULT '',
  `link` varchar(255) DEFAULT NULL,
  `order` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `topics`
--

INSERT INTO `topics` (`course_id`, `name`, `description`, `link`, `order`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(26, 'Lesson 1', 'Variables (Swift 5 compatible)', 'https://www.youtube.com/watch?v=2OZ07fklur8&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX', 1, '2022-05-31 04:06:14', '2022-05-31 04:06:14', NULL),
(26, 'Lesson 2', 'Data Types', 'https://www.youtube.com/watch?v=BlXrMgmvNBI&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=2', 2, '2022-05-31 04:06:40', '2022-05-31 04:06:40', NULL),
(26, 'Lesson 3', 'If Statements', 'https://www.youtube.com/watch?v=z_4JuCD0mz8&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=3', 3, '2022-05-31 04:06:58', '2022-05-31 04:06:58', NULL),
(26, 'Lesson 4', 'Switch Statements', 'https://www.youtube.com/watch?v=PZEWRDbSn6c&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=4', 4, '2022-05-31 04:07:25', '2022-05-31 04:07:25', NULL),
(26, 'Lesson 5', 'Loops Part 1', 'https://www.youtube.com/watch?v=vxyrLbmm9Oo&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=5', 5, '2022-05-31 04:08:04', '2022-05-31 04:08:04', NULL),
(26, 'Lesson 6', 'Loops Part 2', 'https://www.youtube.com/watch?v=XDJXLw0Y3Hs&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=6', 6, '2022-05-31 04:08:26', '2022-05-31 04:08:26', NULL),
(26, 'Lesson 7', 'Functions Part 1', 'https://www.youtube.com/watch?v=2kwyQ5w00Uc&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=7', 7, '2022-05-31 04:08:43', '2022-05-31 04:08:43', NULL),
(26, 'Lesson 8', 'Functions Part 2', 'https://www.youtube.com/watch?v=jNiBS0bxVQQ&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=8', 8, '2022-05-31 04:08:54', '2022-05-31 04:08:54', NULL),
(26, 'Lesson 9', 'Classes Part 1', 'https://www.youtube.com/watch?v=ZDzdz52tex4&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=9', 9, '2022-05-31 04:09:08', '2022-05-31 04:09:08', NULL),
(26, 'Lesson 10', 'Classes Part 2 - Inheritance', 'https://www.youtube.com/watch?v=CnvlxNC6FlQ&list=PLMRqhzcHGw1ZqzYnpIuQAn2rcjhOtbqGX&index=10', 10, '2022-05-31 04:09:22', '2022-05-31 04:09:22', NULL),
(27, 'Lesson 1', 'Intro to Sketch for Beginners', 'https://www.youtube.com/watch?v=ilcwjXTqyNM&list=PLl7yfN5jUtKEHLMcyZ5egFIIz1k6oAxQJ&index=2', 1, '2022-05-31 04:11:09', '2022-05-31 04:11:09', NULL),
(27, 'Lesson 2', 'The perfect radial bar trick', 'https://www.youtube.com/watch?v=yaNpmA3L5vk&list=PLl7yfN5jUtKEHLMcyZ5egFIIz1k6oAxQJ&index=3', 2, '2022-05-31 04:11:24', '2022-05-31 04:11:24', NULL),
(27, 'Lesson 3', 'Color Variable Basics', 'https://www.youtube.com/watch?v=wASFApHAidc&list=PLl7yfN5jUtKEHLMcyZ5egFIIz1k6oAxQJ&index=4', 3, '2022-05-31 04:11:36', '2022-05-31 04:11:36', NULL),
(27, 'Lesson 4', 'Mastering Color Variables', 'https://www.youtube.com/watch?v=FGBQKCSpP5U&list=PLl7yfN5jUtKEHLMcyZ5egFIIz1k6oAxQJ&index=5', 4, '2022-05-31 04:11:57', '2022-05-31 04:11:57', NULL),
(27, 'Lesson 5', 'Group Resizing Constraints in Sketch', 'https://www.youtube.com/watch?v=T2SWTU3Gdrc&list=PLl7yfN5jUtKEHLMcyZ5egFIIz1k6oAxQJ&index=6', 5, '2022-05-31 04:12:21', '2022-05-31 04:12:21', NULL),
(28, 'Lesson 1', 'Min Max and Aspect Update', 'https://www.youtube.com/watch?v=6HN0yvxy6PM&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc', 1, '2022-05-31 08:24:52', '2022-05-31 08:24:52', NULL),
(28, 'Lesson 2', 'Get Started', 'https://www.youtube.com/watch?v=DgHLY5IAz6Q&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=2', 2, '2022-05-31 08:25:06', '2022-05-31 08:25:06', NULL),
(28, 'Lesson 3', 'Scroll Targets', 'https://www.youtube.com/watch?v=bKjwVyHVLKM&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=3', 3, '2022-05-31 08:25:19', '2022-05-31 08:25:19', NULL),
(28, 'Lesson 4', 'Responsive Navigation Bar', 'https://www.youtube.com/watch?v=hyPnsH2dBnU&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=4', 4, '2022-05-31 08:25:34', '2022-05-31 08:25:34', NULL),
(28, 'Lesson 5', 'Prototyping Beta', 'https://www.youtube.com/watch?v=rgxTQIjKWuU&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=5', 5, '2022-05-31 08:25:51', '2022-05-31 08:25:51', NULL),
(28, 'Lesson 6', '3D Effects', 'https://www.youtube.com/watch?v=QQ07_S0bj_Q&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=6', 6, '2022-05-31 08:26:05', '2022-05-31 08:26:05', NULL),
(28, 'Lesson 7', 'Viewport Pinning', 'https://www.youtube.com/watch?v=TPqn2cLjGkw&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=7', 7, '2022-05-31 08:26:18', '2022-05-31 08:26:18', NULL),
(28, 'Lesson 8', 'CSS Styles', 'https://www.youtube.com/watch?v=odpGcWkRXf0&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=8', 8, '2022-05-31 08:26:30', '2022-05-31 08:26:30', NULL),
(28, 'Lesson 9', 'Fixed Sidebars', 'https://www.youtube.com/watch?v=mwX4LC6RX6A&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=9', 9, '2022-05-31 08:26:43', '2022-05-31 08:26:43', NULL),
(28, 'Lesson 10', 'Overlays', 'https://www.youtube.com/watch?v=4cQ2McgDWk0&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=10', 10, '2022-05-31 08:26:53', '2022-05-31 08:26:53', NULL),
(28, 'Lesson 11', 'CMS', 'https://www.youtube.com/watch?v=JmIWAhF9ioo&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=11', 11, '2022-05-31 08:27:07', '2022-05-31 08:27:07', NULL),
(28, 'Lesson 12', 'Layout Tool Introduction', 'https://www.youtube.com/watch?v=Yt0Ikf5b4vA&list=PL9p5auxyrweMpqLyrgPIIWS6fFWol7Izc&index=12', 12, '2022-05-31 08:27:20', '2022-05-31 08:27:20', NULL),
(29, 'Lesson 1', 'Create a Date Picker', 'https://www.youtube.com/watch?v=dm1GjV-1x6E&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=1', 1, '2022-05-31 08:28:56', '2022-05-31 08:28:56', NULL),
(29, 'Lesson 2', 'Find Help with Snippets', 'https://www.youtube.com/watch?v=svfT0oaaUmU&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=2', 2, '2022-05-31 08:29:09', '2022-05-31 08:29:09', NULL),
(29, 'Lesson 3', 'Using the Framer CLI', 'https://www.youtube.com/watch?v=7j5BSpJHFmA&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=3', 3, '2022-05-31 08:29:21', '2022-05-31 08:29:21', NULL),
(29, 'Lesson 4', 'Use Git with Framer Projects', 'https://www.youtube.com/watch?v=YrrPU9ss_yw&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=4', 4, '2022-05-31 08:29:34', '2022-05-31 08:29:34', NULL),
(29, 'Lesson 5', 'Explore Fraction Units in Stacks', 'https://www.youtube.com/watch?v=4GiuKMdl6Pw&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=5', 5, '2022-05-31 08:29:46', '2022-05-31 08:29:46', NULL),
(29, 'Lesson 6', 'Build an Interactive List', 'https://www.youtube.com/watch?v=qWHSSkqANiQ&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=6', 6, '2022-05-31 08:30:01', '2022-05-31 08:30:01', NULL),
(29, 'Lesson 7', 'Build an Animated Accordion', 'https://www.youtube.com/watch?v=I1W_O7mYZBU&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=7', 7, '2022-05-31 08:30:13', '2022-05-31 08:30:13', NULL),
(29, 'Lesson 8', 'Code with Design Components', 'https://www.youtube.com/watch?v=HMT7GXaTvS8&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=8', 8, '2022-05-31 08:30:24', '2022-05-31 08:30:24', NULL),
(29, 'Lesson 9', 'Control a Page Component with Overrides', 'https://www.youtube.com/watch?v=G6uYZflYd1w&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=9', 9, '2022-05-31 08:30:37', '2022-05-31 08:30:37', NULL),
(29, 'Lesson 10', 'Build a Drag Handle', 'https://www.youtube.com/watch?v=UMGnYRJuJog&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=10', 10, '2022-05-31 08:30:49', '2022-05-31 08:30:49', NULL),
(29, 'Lesson 11', 'Installing Packages with Yarn', 'https://www.youtube.com/watch?v=vmn4UZzOuGw&list=PL9p5auxyrwePWHiNdC7rtJUeQQqgS66af&index=11', 11, '2022-05-31 08:31:04', '2022-05-31 08:31:04', NULL),
(30, 'Lesson 1', 'Scroll Updates', 'https://www.youtube.com/watch?v=0W0L-Wqz2Fo&list=PL9p5auxyrweM0zuMpKWIc-c1Q7XivpvTt', 1, '2022-05-31 08:32:37', '2022-05-31 08:32:37', NULL),
(30, 'Lesson 2', 'Sticky Scroll Elements', 'https://www.youtube.com/watch?v=7Fy4SQNWnqY&list=PL9p5auxyrweM0zuMpKWIc-c1Q7XivpvTt&index=2', 2, '2022-05-31 08:32:47', '2022-05-31 08:32:47', NULL),
(30, 'Lesson 3', 'Keyboard controlled prototypes', 'https://www.youtube.com/watch?v=e8Z0JmfPelc&list=PL9p5auxyrweM0zuMpKWIc-c1Q7XivpvTt&index=3', 3, '2022-05-31 08:32:59', '2022-05-31 08:32:59', NULL),
(30, 'Lesson 4', 'Appear trigger and Delay property', 'https://www.youtube.com/watch?v=klhaN1ccdvA&list=PL9p5auxyrweM0zuMpKWIc-c1Q7XivpvTt&index=4', 4, '2022-05-31 08:33:10', '2022-05-31 08:33:10', NULL),
(30, 'Lesson 5', 'Delay property in Smart Components', 'https://www.youtube.com/watch?v=1VIFZkK041k&list=PL9p5auxyrweM0zuMpKWIc-c1Q7XivpvTt&index=5', 5, '2022-05-31 08:33:19', '2022-05-31 08:33:19', NULL),
(31, 'Lesson 1', 'Learn Figma Under 1 Hour', 'https://www.youtube.com/watch?v=Qhg5NFs7ET4&list=PLAd6URyguzorMoQ4uUu6kWHNnGc8ePbPq&index=1', 1, '2022-05-31 08:46:25', '2022-05-31 08:46:25', NULL),
(32, 'Lesson 1', 'Part 1', 'https://www.youtube.com/watch?v=ChdQaEAqGUY&list=PLAd6URyguzop4xlU3XnIX23dCvj3eHQll', 1, '2022-05-31 08:47:58', '2022-05-31 08:47:58', NULL),
(32, 'Lesson 2', 'Wireframing Part 1', 'https://www.youtube.com/watch?v=jgEgKwH52Hw&list=PLAd6URyguzop4xlU3XnIX23dCvj3eHQll&index=2', 2, '2022-05-31 08:48:14', '2022-05-31 08:48:37', NULL),
(32, 'Lesson 3', 'Wireframing Part 2', 'https://www.youtube.com/watch?v=2B-ZYJJr3Y0&list=PLAd6URyguzop4xlU3XnIX23dCvj3eHQll&index=3', 3, '2022-05-31 08:48:29', '2022-05-31 08:48:29', NULL),
(32, 'Lesson 4', 'UX Case Study Tips', 'https://www.youtube.com/watch?v=t18BuFSDKtE&list=PLAd6URyguzop4xlU3XnIX23dCvj3eHQll&index=4', 4, '2022-05-31 08:48:52', '2022-05-31 08:48:52', NULL),
(33, 'Lesson 1', 'If you are a Beginner who wants to learn redux then this course is for you or if you are professional who wants a refresher course, then this course is for you as well.\nWe will be using Redux with ReduxToolkit Library and will create an Application where ', 'https://www.youtube.com/watch?v=wQ463BeoIZc&list=PLlR2O33QQkfU81zWYlpjEWuB7fVopWIV4', 1, '2022-05-31 08:52:27', '2022-05-31 08:52:27', NULL),
(34, 'Lesson 1', 'Learn React JS with Typescript', 'https://www.youtube.com/watch?v=knqz3_rPcKk&list=PLKhlp2qtUcSbZaGj7DGyZ7BLupZEZOkAw', 1, '2022-05-31 08:54:16', '2022-05-31 08:54:16', NULL),
(35, 'Lesson 1', 'Pokemon App', 'https://www.youtube.com/watch?v=w04_SuqvpzY&list=PLqYFXd9GTRVVLbFExSmXod8tRQ1NFJ3Ot', 1, '2022-05-31 08:57:03', '2022-05-31 08:57:03', NULL),
(35, 'Lesson 2', 'Build a Tic-Tac-Toe Game', 'https://www.youtube.com/watch?v=Z5RbPrK4VqM&list=PLqYFXd9GTRVVLbFExSmXod8tRQ1NFJ3Ot&index=2', 2, '2022-05-31 08:57:14', '2022-05-31 08:57:14', NULL),
(35, 'Lesson 3', 'Build a Movie Search App', 'https://www.youtube.com/watch?v=UKmsNUk7RxM&list=PLqYFXd9GTRVVLbFExSmXod8tRQ1NFJ3Ot&index=3', 3, '2022-05-31 08:57:29', '2022-05-31 08:57:29', NULL),
(36, 'Lesson 1', 'Introduction', 'https://www.youtube.com/watch?v=4n247RdLZVM&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf', 1, '2022-05-31 09:00:35', '2022-05-31 09:00:35', NULL),
(36, 'Lesson 2', 'Environment Set Up\n', 'https://www.youtube.com/watch?v=PNGDFXUXg2g&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=2', 2, '2022-05-31 09:00:52', '2022-05-31 09:00:52', NULL),
(36, 'Lesson 3', 'Creating A File', 'https://www.youtube.com/watch?v=QJ9vX9pBL6I&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=3', 3, '2022-05-31 09:01:05', '2022-05-31 09:01:05', NULL),
(36, 'Lesson 4', 'Variable Declaration', 'https://www.youtube.com/watch?v=GI3l5aEOXMk&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=4', 4, '2022-05-31 09:01:17', '2022-05-31 09:01:17', NULL),
(36, 'Lesson 5', 'Variable Types', 'https://www.youtube.com/watch?v=-EwzEGjTNAc&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=5', 5, '2022-05-31 09:01:34', '2022-05-31 09:01:34', NULL),
(36, 'Lesson 6', 'Array Type', 'https://www.youtube.com/watch?v=fqxW2ouVctE&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=6', 6, '2022-05-31 09:01:46', '2022-05-31 09:01:46', NULL),
(36, 'Lesson 7', 'Enum Type', 'https://www.youtube.com/watch?v=6sZ_lipKEAM&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=7', 7, '2022-05-31 09:01:58', '2022-05-31 09:01:58', NULL),
(36, 'Lesson 8', 'Any Type', 'https://www.youtube.com/watch?v=IavV07tcOzQ&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=8', 8, '2022-05-31 09:02:10', '2022-05-31 09:02:10', NULL),
(36, 'Lesson 9', 'Unknown Type', 'https://www.youtube.com/watch?v=TcsevVZP0Jc&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=9', 9, '2022-05-31 09:02:19', '2022-05-31 09:02:19', NULL),
(36, 'Lesson 10', 'Type Inference', 'https://www.youtube.com/watch?v=de28lnXtPkY&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=10', 10, '2022-05-31 09:02:27', '2022-05-31 09:02:27', NULL),
(36, 'Lesson 11', 'Type Union', 'https://www.youtube.com/watch?v=8hUPIVD4HDk&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=11', 11, '2022-05-31 09:02:37', '2022-05-31 09:02:37', NULL),
(36, 'Lesson 12', 'Functions', 'https://www.youtube.com/watch?v=VQSZuoTH-1Y&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=12', 12, '2022-05-31 09:02:49', '2022-05-31 09:02:49', NULL),
(36, 'Lesson 13', 'Interfaces', 'https://www.youtube.com/watch?v=C4S7PASZWxQ&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=13', 13, '2022-05-31 09:02:59', '2022-05-31 09:02:59', NULL),
(36, 'Lesson 14', 'Classes', 'https://www.youtube.com/watch?v=WSilO8XA-rA&list=PL0JqkD3WB5bZx377OQO8ZBaEKwkMT1Qsf&index=14', 14, '2022-05-31 09:03:11', '2022-05-31 09:03:11', NULL),
(37, 'Lesson 1', 'Introduction to TypeScript', 'https://www.youtube.com/watch?v=DypNdzjaPoM&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn', 1, '2022-05-31 09:04:38', '2022-05-31 09:04:38', NULL),
(37, 'Lesson 2', 'Your First TypeScript App', 'https://www.youtube.com/watch?v=ogGekEUr91U&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=2', 2, '2022-05-31 09:04:50', '2022-05-31 09:04:50', NULL),
(37, 'Lesson 3', 'Data Types in TypeScript', 'https://www.youtube.com/watch?v=wqJSXCWFVlE&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=3', 3, '2022-05-31 09:05:01', '2022-05-31 09:05:01', NULL),
(37, 'Lesson 4', 'Classes in TypeScript', 'https://www.youtube.com/watch?v=oq2Grv-Arsw&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=4', 4, '2022-05-31 09:05:15', '2022-05-31 09:05:15', NULL),
(37, 'Lesson 5', 'Constructors in TypeScript ', 'https://www.youtube.com/watch?v=HPvLNb6J_O4&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=5', 5, '2022-05-31 09:05:27', '2022-05-31 09:05:27', NULL),
(37, 'Lesson 6', 'Array of Objects in TypeScript', 'https://www.youtube.com/watch?v=YZZ6rVuu_Mk&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=6', 6, '2022-05-31 09:05:38', '2022-05-31 09:05:38', NULL),
(37, 'Lesson 7', 'Inheritance in TypeScript', 'https://www.youtube.com/watch?v=k6nRM2KQJ1M&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=7', 7, '2022-05-31 09:05:52', '2022-05-31 09:05:52', NULL),
(37, 'Lesson 8', 'Access Modifiers in TypeScript', 'https://www.youtube.com/watch?v=t0wAPOOrG6A&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=8', 8, '2022-05-31 09:06:05', '2022-05-31 09:06:05', NULL),
(37, 'Lesson 9', 'Interfaces in TypeScript', 'https://www.youtube.com/watch?v=2S7KtA6ONoY&list=PLakJfPXB-4bV55wJoNScE7eXP2Fn23yNn&index=9', 9, '2022-05-31 09:06:20', '2022-05-31 09:06:20', NULL),
(38, 'Lesson 1', 'Getting Started', 'https://www.youtube.com/watch?v=bjPENR6sHRU&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW', 1, '2022-05-31 09:22:46', '2022-05-31 09:22:46', NULL),
(38, 'Lesson 2', 'Variables & Constants', 'https://www.youtube.com/watch?v=xKf6iNilRYI&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=2', 2, '2022-05-31 09:22:59', '2022-05-31 09:22:59', NULL),
(38, 'Lesson 3', 'Types', 'https://www.youtube.com/watch?v=48v8FH46mQs&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=3', 3, '2022-05-31 09:23:08', '2022-05-31 09:23:08', NULL),
(38, 'Lesson 4', 'Functions & Parameters', 'https://www.youtube.com/watch?v=fffG55Ei1Qc&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=4', 4, '2022-05-31 09:23:37', '2022-05-31 09:23:37', NULL),
(38, 'Lesson 5', 'Classes & Structs', 'https://www.youtube.com/watch?v=ys3dPSKssgk&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=5', 5, '2022-05-31 09:23:48', '2022-05-31 09:23:48', NULL),
(38, 'Lesson 6', 'Loops', 'https://www.youtube.com/watch?v=8Z0mImrIITA&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=6', 6, '2022-05-31 09:24:06', '2022-05-31 09:24:06', NULL),
(39, 'Lesson 1', 'Optionals & Unwrapping', 'https://www.youtube.com/watch?v=9K89xEuSiYA&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=7', 1, '2022-05-31 09:25:06', '2022-05-31 09:25:06', NULL),
(39, 'Lesson 2', 'If Else Conditionals', 'https://www.youtube.com/watch?v=rBotA3jwWkY&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=8', 2, '2022-05-31 09:25:20', '2022-05-31 09:25:20', NULL),
(39, 'Lesson 3', 'Guard Statements', 'https://www.youtube.com/watch?v=DTd7HHSAw-4&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=9', 3, '2022-05-31 09:25:31', '2022-05-31 09:25:31', NULL),
(39, 'Lesson 4', 'Enums & Switch Statements', 'https://www.youtube.com/watch?v=_qxm-MvRw_Y&list=PL5PR3UyfTWvfacnfUsvNcxIiKIgidNRoW&index=10', 4, '2022-05-31 09:25:44', '2022-05-31 09:25:44', NULL),
(40, 'Lesson 1', 'Sketch is one of the top apps pros use for UI and icon design.', 'https://www.youtube.com/watch?v=-nmhdD5NXo8', 1, '2022-05-31 09:28:33', '2022-05-31 09:28:33', NULL),
(41, 'New Version React Router', 'React Router 6', 'https://www.youtube.com/watch?v=59IXY5IDrBA', 1, '2022-06-04 04:03:09', '2022-06-04 04:03:09', NULL),
(42, 'fasdf', 'fasfas', 'https://react-hook-form.com/api/useform/reset', 1, '2022-06-04 02:15:20', '2022-06-04 02:15:20', NULL),
(44, 'dafdasfas', 'dai', 'http://localhost:3000/create-course', 1, '2022-06-04 02:14:23', '2022-06-04 02:14:48', NULL),
(44, 'fadsf', 'ngo', 'http://localhost:3000/create-course', 2, '2022-06-04 02:14:34', '2022-06-04 02:14:54', NULL),
(45, 'Lesson 1', 'Introduction', 'https://www.youtube.com/watch?v=qrsle5quS7A&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_', 1, '2022-06-05 00:25:55', '2022-06-05 00:27:10', NULL),
(45, 'Lesson 2', 'What is Redux? Why use it?', 'https://www.youtube.com/watch?v=D2MqT4OEgoE&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=2', 2, '2022-06-05 00:26:27', '2022-06-05 00:26:27', NULL),
(45, 'Lesson 3', 'Using Redux', 'https://www.youtube.com/watch?v=ZKCYqJu4n3s&list=PL55RiY5tL51rrC3sh8qLiYHqUV3twEYU_&index=3', 3, '2022-06-05 00:27:02', '2022-06-05 00:27:02', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(155) NOT NULL,
  `role` varchar(20) DEFAULT 'user',
  `password` varchar(75) NOT NULL,
  `user_name` varchar(255) DEFAULT '',
  `avatar` varchar(255) DEFAULT '',
  `description` tinytext DEFAULT '',
  `acc_twiter` varchar(255) DEFAULT '',
  `my_website` varchar(255) DEFAULT '',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `role`, `password`, `user_name`, `avatar`, `description`, `acc_twiter`, `my_website`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'dai1@gmail.com', 'instructor', '$2b$10$0vDCF8UNvXa99mcKEcH3me93A7Mi0ugtT0NnR0jWotd38dv3rn8Lu', 'Ngo Tan Dai', 'https://cdn.dribbble.com/userupload/2803697/file/original-add471928077720d4cd45b1f455ed30f.jpg', 'Developer', 'https://twitter.com/DaiNgo72', 'https://twitter.com/DaiNgo7', '2022-05-15 12:41:31', '2022-06-05 00:24:55', NULL),
(3, 'dai2@gmail.com', 'instructor', '$2b$10$b3n1DkyC4pSdkd0DijQqKeTcctdi0yXDLYAd5RKmlus03fM21wGeC', 'Dai Ngo', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Dev', 'https://twitter.com/DaiNgo72', 'https://google.com', '2022-05-15 12:44:14', '2022-05-15 13:27:23', NULL),
(5, 'dai3@gmail.com', 'instructor', '$2b$10$WTUftPd3kexELZoOsE0qze8LrqK2W1ML9PynkiN7FKAXw3o7baD1i', 'Dai Ngo', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', '', '', '', '2022-05-15 12:44:28', '2022-05-15 12:44:28', NULL),
(15, 'dai4@gmail.com', 'user', '$2b$10$AtXZOTksr4XWQCenndY9J.9iWmQDyVAmt.JlOdlmxNyJT5sJi6qv2', 'Dai Ngo', 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80', 'Dev', 'https://twitter.com/DaiNgo72', 'https://google.com', '2022-05-15 12:46:50', '2022-05-17 00:44:09', NULL),
(23, 'dai5@gmail.com', 'user', '$2b$10$Oz2yUYDgqdNLx/E0Xm0KBO3vyNzy3lfhhxqVpK.L5rPipUQjbvUVu', '', '', '', '', '', '2022-05-15 12:47:01', '2022-05-15 12:47:01', NULL),
(25, 'dai6@gmail.com', 'user', '$2b$10$FvWFB5J2qTU6N2XQYWTySOz4EArQcg3a63exWhhpVx0DIwh5hINH2', '', '', '', '', '', '2022-05-15 12:48:19', '2022-05-15 12:48:19', NULL),
(31, 'dai7@gmail.com', 'user', '$2b$10$968wT84H/OYj9V676v.RGOhJGF4z.1dK2XAh2.r.TGxeEfXPHb8om', '', '', '', '', '', '2022-05-16 10:07:54', '2022-05-16 10:07:54', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `instructor_id` (`instructor_id`);

--
-- Indexes for table `favourite_courses`
--
ALTER TABLE `favourite_courses`
  ADD PRIMARY KEY (`course_id`,`user_id`),
  ADD UNIQUE KEY `favourite_courses_user_id_course_id_unique` (`course_id`,`user_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `topics`
--
ALTER TABLE `topics`
  ADD PRIMARY KEY (`course_id`,`order`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `course_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `courses`
--
ALTER TABLE `courses`
  ADD CONSTRAINT `courses_ibfk_1` FOREIGN KEY (`instructor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `favourite_courses`
--
ALTER TABLE `favourite_courses`
  ADD CONSTRAINT `favourite_courses_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourite_courses_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `topics`
--
ALTER TABLE `topics`
  ADD CONSTRAINT `topics_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `courses` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
