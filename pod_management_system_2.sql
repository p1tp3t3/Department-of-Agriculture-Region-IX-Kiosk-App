-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 29, 2025 at 02:29 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pod_management_system_2`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrative`
--

CREATE TABLE `administrative` (
  `user_id` varchar(15) NOT NULL,
  `type` varchar(255) NOT NULL,
  `program_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admission`
--

CREATE TABLE `admission` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` varchar(255) NOT NULL,
  `confirmed` tinyint(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:04'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `admission_reason`
--

CREATE TABLE `admission_reason` (
  `admission_id` int(11) NOT NULL,
  `student_id` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `appointment_title` varchar(255) NOT NULL,
  `date_time_appoint` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `description` text NOT NULL,
  `canceled` tinyint(1) DEFAULT NULL,
  `canceled_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:10'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_request`
--

CREATE TABLE `appointment_request` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `appointment_id` int(11) DEFAULT NULL,
  `appointment_title` varchar(255) NOT NULL,
  `request_type` enum('schedule','reschedule','cancel') NOT NULL,
  `date_time_appoint` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `description` text NOT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `confirmed_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:12',
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:12'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `complaint`
--

CREATE TABLE `complaint` (
  `case_number` int(11) NOT NULL,
  `complainant_id` varchar(15) NOT NULL,
  `student_id` varchar(15) NOT NULL,
  `complaint_description` text NOT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `complaint_status` enum('pending','ongoing','solved','closed') NOT NULL,
  `complaint_summary` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `complaint_evidence_file`
--

CREATE TABLE `complaint_evidence_file` (
  `complaint_case_number` int(11) NOT NULL,
  `file_type` varchar(3) NOT NULL,
  `evidence_file` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `complaint_possible_offense`
--

CREATE TABLE `complaint_possible_offense` (
  `complaint_case_number` int(11) NOT NULL,
  `possible_offense` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `complaint_violation`
--

CREATE TABLE `complaint_violation` (
  `complaint_case_number` int(11) NOT NULL,
  `violation_id` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:06'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `education_background`
--

CREATE TABLE `education_background` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `student_id` varchar(15) NOT NULL,
  `education_type` varchar(255) NOT NULL,
  `school_address` varchar(255) NOT NULL,
  `program` varchar(255) DEFAULT NULL,
  `year_level` varchar(255) NOT NULL,
  `transferee` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE `faculty` (
  `user_id` varchar(15) NOT NULL,
  `faculty_type` varchar(255) NOT NULL,
  `program_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`user_id`, `faculty_type`, `program_id`) VALUES
('SK6tvrsrNwr6lmH', 'faculty_member', 1),
('vsbbQhDI8PHARmB', 'faculty_member', 3),
('OcaHnzM4vbYhV4I', 'faculty_member', 7),
('v75oyDbFZf8Es8R', 'faculty_member', 2),
('wfACm5TQKhKN32T', 'faculty_member', 1),
('mRbcd0TJvr4LBsK', 'faculty_member', 5),
('6xROm1w4o22UtEc', 'faculty_member', 7),
('dazmgkvMIDSoqq1', 'faculty_member', 6),
('1HmmRGodcNNbgzE', 'faculty_member', 1),
('TcQgJidplgZ0ThG', 'faculty_member', 5);

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `family`
--

CREATE TABLE `family` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `family_name` varchar(25) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `family_member`
--

CREATE TABLE `family_member` (
  `family_id` bigint(20) UNSIGNED NOT NULL,
  `parent_id` varchar(15) DEFAULT NULL,
  `child_id` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gate_pass`
--

CREATE TABLE `gate_pass` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `qrcode_source_code` varchar(255) NOT NULL,
  `confirmed` tinyint(1) DEFAULT NULL,
  `confirmed_at` timestamp NULL DEFAULT NULL,
  `date_time_expiration` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:13'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `gate_pass_reason`
--

CREATE TABLE `gate_pass_reason` (
  `gatepass_id` int(11) NOT NULL,
  `reason` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `history_type` enum('complaint','referral','admission','violation','appointment','gatepass') NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `itrc`
--

CREATE TABLE `itrc` (
  `user_id` varchar(15) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `user_update_token` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `itrc`
--

INSERT INTO `itrc` (`user_id`, `active`, `user_update_token`) VALUES
('G9EfomRmAp9JaRj', 0, 'pykZbZE7xq');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_03_11_153147_create_program_table', 1),
(5, '2025_03_11_154204_create_family_table', 1),
(6, '2025_03_11_163057_create_complaint_table', 1),
(7, '2025_03_11_163111_create_referral_table', 1),
(8, '2025_03_11_163118_create_admission_table', 1),
(9, '2025_03_11_163132_create_violation_table', 1),
(10, '2025_03_11_163208_create_appointment_table', 1),
(11, '2025_03_11_163227_create_gate_pass_table', 1),
(12, '2025_03_11_163243_create_notification_table', 1),
(13, '2025_03_12_093255_create_history_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `sender_id` varchar(255) NOT NULL,
  `receiver_id` varchar(255) NOT NULL,
  `notif_type` enum('complaint','referral','admission','violation','appointment','gatepass','call_in') NOT NULL,
  `content` text NOT NULL,
  `read_since` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parent`
--

CREATE TABLE `parent` (
  `user_id` varchar(15) NOT NULL,
  `parent_role` varchar(255) NOT NULL,
  `work_occupation` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `parent`
--

INSERT INTO `parent` (`user_id`, `parent_role`, `work_occupation`) VALUES
('kvKHL1PmdUJZar5', 'mother', 'house wife'),
('NuzpBdvOcMskmmG', 'guardian', 'house husband'),
('F3mCrMHi6Q7aabr', 'father', 'house wife'),
('N8GCwPeSJZwzTCR', 'guardian', 'house husband'),
('3XMlM93YsMeDFmZ', 'guardian', 'house wife');

-- --------------------------------------------------------

--
-- Table structure for table `penalty`
--

CREATE TABLE `penalty` (
  `id` double NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:07'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `prefect`
--

CREATE TABLE `prefect` (
  `user_id` varchar(15) NOT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 0,
  `direct_action_token` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `prefect`
--

INSERT INTO `prefect` (`user_id`, `active`, `direct_action_token`) VALUES
('o7rwryPTcd0EHKs', 0, 'SfGVogAd8V');

-- --------------------------------------------------------

--
-- Table structure for table `program`
--

CREATE TABLE `program` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `program`
--

INSERT INTO `program` (`id`, `name`, `logo`, `description`, `created_at`) VALUES
(1, 'BSIT', NULL, 'Bachelor of Science in Information Technology', '2025-03-29 09:31:49'),
(2, 'BLIS', NULL, 'Bachelor of Library and Information Science', '2025-03-29 09:31:49'),
(3, 'BEED', NULL, 'Bachelor of Elementary Education', '2025-03-29 09:31:49'),
(4, 'BSN', NULL, 'Bachelor of Science in Nursing', '2025-03-29 09:31:49'),
(5, 'BSHM', NULL, 'Bachelor of Science in Hospitality Management', '2025-03-29 09:31:49'),
(6, 'BSBA', NULL, 'Bachelor of Science in Business Administration', '2025-03-29 09:31:49'),
(7, 'BSTM', NULL, 'Bachelor of Science in Tourism Management', '2025-03-29 09:31:49');

-- --------------------------------------------------------

--
-- Table structure for table `referral`
--

CREATE TABLE `referral` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `faculty_id` varchar(255) NOT NULL,
  `referred_student_id` varchar(255) NOT NULL,
  `reason_description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:03'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('Riiz8jaKbrXXOK6g5P7JDrOgrYdmqIE2C7lpZQgr', 16, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiSUUzU1lINnQyOEl6M2tqVGQwcTlXckxKNU4zY1dnZ0dubUpKMEFwTyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jb21wbGFpbnQiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxNjt9', 1743250859),
('UcWxkU3LoThrlRY3y3uVAdvoC2WjZbFGoLR6TOAI', 17, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiUG16WEJyeVJDMkxtc25MTUR6TXR0aERWZTRtRXIyTndhOTVIM3RWciI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9wcmVmZWN0L2Rhc2hib2FyZCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fXM6NTA6ImxvZ2luX3dlYl81OWJhMzZhZGRjMmIyZjk0MDE1ODBmMDE0YzdmNThlYTRlMzA5ODlkIjtpOjE3O30=', 1743250744);

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `user_id` varchar(15) NOT NULL,
  `work_type` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `staff`
--

INSERT INTO `staff` (`user_id`, `work_type`) VALUES
('ctvWKD0dWCaIIkI', 'guard'),
('OFuNXijSSvalLw4', 'maintenance_staff'),
('3d2aqr0hmP6UvYB', 'guard'),
('BBIKf9zr77uRJQ7', 'office_staff'),
('jboFHc4qr4NoGVn', 'canteen_staff'),
('cZVGS4XgvLCfLTF', 'canteen_staff'),
('7cLQ0jROJYaxtIX', 'office_staff'),
('9jyp42baTxfN01t', 'guard'),
('qZ1mtcK0InbbTVq', 'maintenance_staff'),
('1246d6YOtmMqX2G', 'guard');

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE `student` (
  `user_id` varchar(15) NOT NULL,
  `program_id` bigint(20) UNSIGNED DEFAULT NULL,
  `year_level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`user_id`, `program_id`, `year_level`) VALUES
('UKp6SmsTm1cGFyJ', 7, 3),
('wkiPJbweGt3jXCj', 5, 3),
('TCyFrEVFiW4V2Ww', 5, 3),
('yZCI43sszpaSsGY', 1, 1),
('N8TrCwF4wuIIEhB', 2, 2),
('VqTZJjpzjcu5KYs', 5, 1),
('d947U4HETrHuFkY', 6, 3),
('cyxmlALuJftEffw', 5, 4),
('MeJDCuh5zDWDFSN', 1, 2),
('22rmX3uonZnULSp', 4, 4);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` varchar(15) NOT NULL,
  `user_type` enum('student','itrc','prefect','faculty','staff','parent','administrative') NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `middle_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `anonymous_name` varchar(255) NOT NULL,
  `profile_picture` varchar(255) NOT NULL,
  `anonymous_profile_picture` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` enum('m','f') NOT NULL,
  `date_of_birth` date NOT NULL,
  `bio_description` text DEFAULT NULL,
  `civil_status` varchar(255) DEFAULT NULL,
  `religion` varchar(255) DEFAULT NULL,
  `citizenship` varchar(255) DEFAULT NULL,
  `current_address` varchar(255) DEFAULT NULL,
  `permanent_address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `contact_number` varchar(11) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `activate` tinyint(1) NOT NULL DEFAULT 0,
  `remember_token` varchar(100) DEFAULT NULL,
  `password_reset_token` varchar(15) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_id`, `user_type`, `first_name`, `middle_name`, `last_name`, `anonymous_name`, `profile_picture`, `anonymous_profile_picture`, `age`, `sex`, `date_of_birth`, `bio_description`, `civil_status`, `religion`, `citizenship`, `current_address`, `permanent_address`, `email`, `contact_number`, `username`, `password`, `activate`, `remember_token`, `password_reset_token`, `created_at`) VALUES
(1, 'UKp6SmsTm1cGFyJ', 'student', 'Maritza', 'Schmidt', 'Bins', 'Dr. Abe Mayert', 'profile-kadetrantow.jpg', 'anonymous-profile-kadetrantow.jpg', 26, 'f', '1999-01-01', 'Dolorem hic omnis itaque ratione itaque corrupti. Voluptate quis odit reprehenderit deserunt non. Vel ipsam eaque laudantium qui occaecati. Repellat ex delectus delectus laborum praesentium temporibus dolor rerum. Qui quia harum aut eum tempore. Nam voluptas sapiente tempore delectus sunt ratione. Aut quos tempore eum rerum et. Sunt ut quos ut recusandae totam. Qui veniam expedita quia laborum est non.', 'single', 'christian', 'chinese', '133 Sean Hollow Apt. 631\nEdnafort, WY 01899', '61812 Green Shoals\nWest Lina, NM 25336', 'mohamed.kuvalis@example.net', '09763530861', 'kadetrantow', '$2y$12$odwGqjB7DVIfoQDCZB0Q3O.eTiKig8fCzzWCA5UdlGwOoc4pH4CQK', 1, 'ObpxOkc26O', 'Cvpuhwsk', '2025-03-29 01:33:12'),
(2, 'wkiPJbweGt3jXCj', 'student', 'Lula', 'Wilkinson', 'Dibbert', 'Shane Lind', 'profile-aubree46.jpg', 'anonymous-profile-aubree46.jpg', 26, 'm', '1999-01-01', 'Molestiae qui atque qui quisquam quia voluptatem ut. Nemo accusamus eos similique dolores aut omnis ex. Rerum quia dolorum in et quia qui non. Enim magni voluptas iste architecto. Minima animi nihil maiores occaecati. Sit dolores atque omnis beatae voluptatem reprehenderit. Sequi id a sapiente.', 'in_relationship', 'muslim', 'chinese', '22266 Julie Square\nGorczanychester, NY 18633-7570', '6654 Olson Fall Suite 816\nPipermouth, CT 76735', 'jewell.haley@example.org', '09141661188', 'aubree46', '$2y$12$BHPq75t.0xip/w41UT5QeewB1/9uN76snI41tT5HHK7i1XByCIRtK', 1, 'osPFo2lEo1', '6h5IlbxN', '2025-03-29 01:33:12'),
(3, 'TCyFrEVFiW4V2Ww', 'student', 'Pete', 'Runte', 'Steuber', 'Brionna Flatley', 'profile-janet46.jpg', 'anonymous-profile-janet46.jpg', 26, 'm', '1999-01-01', 'Et aut minima quisquam ut temporibus vel facilis. Magnam autem nesciunt similique inventore. Aliquid et quia blanditiis aspernatur dolorem. Voluptates officiis eligendi et explicabo. Totam id ut repellendus consequatur commodi vero aut ex. Sunt perspiciatis facere nulla occaecati et. Dolores facere totam omnis. Qui quis autem reiciendis vel quaerat veniam laboriosam. Quaerat mollitia dignissimos et molestias nisi velit. Quibusdam libero voluptatem aut et.', 'married', 'catholic', 'british', '67786 Cloyd Harbors Suite 515\nJairoview, OH 99869-9666', '45422 Talia Path Suite 044\nEast Devinfort, AK 58259', 'gschinner@example.org', '09320259374', 'janet46', '$2y$12$UIYWxQXieUWor2suMaHKv.aIlWUhncmbkzEahzlTqAiFgyWpV8OYS', 1, 'gudfDH9YUI', 'dCpsPvKK', '2025-03-29 01:33:12'),
(4, 'yZCI43sszpaSsGY', 'student', 'Roderick', 'Marks', 'Smith', 'Doris Shanahan', 'profile-elainakeeling.jpg', 'anonymous-profile-elainakeeling.jpg', 26, 'f', '1999-01-01', 'Et dolorem ratione unde molestias ea consequatur eum. Nesciunt voluptatem nulla tenetur. Iusto nam minus sint. Ipsum iste repellendus tenetur perferendis voluptas. Commodi pariatur maiores fugit quis. Qui veniam facere aliquid velit.', 'single', 'christian', 'british', '388 Weissnat Highway Suite 283\nPort Beth, DE 86413-6585', '569 Klein Coves\nMcGlynnton, RI 85788', 'kellie72@example.com', '09807611682', 'elainakeeling', '$2y$12$8gbeTsuTt6jyfNN0BP6iv.GyBhLlh7v/18D1BANQy1Occc3F0CjQ.', 1, 'URa6Q7aK3W', 'nJ95KIoD', '2025-03-29 01:33:12'),
(5, 'N8TrCwF4wuIIEhB', 'student', 'Ed', 'Koelpin', 'Nienow', 'Austyn Klein', 'profile-hbeier.jpg', 'anonymous-profile-hbeier.jpg', 26, 'f', '1999-01-01', 'Pariatur molestiae et dolor vero. Saepe earum qui vel aliquam fugit in vel. Molestias sint voluptas explicabo eveniet eos consectetur. Sit perferendis quia dignissimos adipisci autem. Rem nihil ipsum laborum quia sapiente laboriosam reiciendis. Occaecati vel debitis vitae et reprehenderit. Nulla nostrum dignissimos amet quia consequuntur.', 'single', 'catholic', 'filipino', '5738 Theresia Drives\nEast Nicolaport, WY 71963', '93619 Denesik Ramp Suite 646\nLake Franz, ID 46727', 'deja23@example.net', '09954439339', 'hbeier', '$2y$12$/mW1LnquxnMoTy8G5dTEoOj07ibYiHHjpKHg/FRmYGzriWeLleA7u', 1, 'zVgtiygq7i', 'L1ZjZ2XC', '2025-03-29 01:33:12'),
(6, 'VqTZJjpzjcu5KYs', 'student', 'Houston', 'Auer', 'Ferry', 'Sydni Connelly', 'profile-collierthora.jpg', 'anonymous-profile-collierthora.jpg', 26, 'f', '1999-01-01', 'Tenetur corporis consequuntur quas illum occaecati. Optio asperiores velit modi. Sit quos quo a asperiores laborum eius quia culpa. Rerum beatae voluptas veniam cumque error eos est. Et sit facere in sint. Sequi est quas possimus ad expedita. Nisi et qui quia voluptas suscipit eum quisquam. Et nam aspernatur maiores quaerat at voluptate vel. Adipisci et quia provident dolorem a iure molestiae. Eos consectetur et molestiae consequatur nihil saepe. Rem est non et enim id iste.', 'single', 'christian', 'filipino', '9193 Terry Coves Suite 722\nWest Wilhelm, IN 87390-4950', '4761 Jerald Throughway\nNorth Astridland, WI 94443-2984', 'isabelle51@example.com', '09187155169', 'collierthora', '$2y$12$xeuMogwBuCY43EMRhFYMgeowomHBqyXngzbGu/u/qqp5dyNEGxJ0O', 1, 'ZmpZklgqAP', 'ZCq96S5v', '2025-03-29 01:33:13'),
(7, 'd947U4HETrHuFkY', 'student', 'Davonte', 'Ledner', 'Cronin', 'Gerson Schamberger IV', 'profile-maximeheller.jpg', 'anonymous-profile-maximeheller.jpg', 26, 'm', '1999-01-01', 'Itaque id magnam ea vitae quidem tempora rerum vel. A est explicabo facilis nam. Facere porro ex officia et. Ullam qui et quas. Similique natus architecto et est voluptatibus blanditiis. Iure et voluptas odio voluptatibus necessitatibus et mollitia. Quas dolorem assumenda est dolor voluptas. Alias temporibus qui laudantium et qui. Odio ducimus enim placeat qui perferendis cupiditate. Facilis dignissimos alias ea iste qui velit reiciendis. Illum corporis et est numquam odio exercitationem.', 'in_relationship', 'catholic', 'chinese', '818 Moises Square\nNew Robbie, WA 46188', '6127 Christop Rest\nBuckridgeshire, FL 18000', 'nprosacco@example.net', '09998180035', 'maximeheller', '$2y$12$YTJAQFIFRYCO2HQIVOK6OeanVhIK8hRhQdIK7a5DggkmRHNLEYAwK', 1, '6TknpWhlfK', '7ZN71pf6', '2025-03-29 01:33:13'),
(8, 'cyxmlALuJftEffw', 'student', 'Genevieve', 'Collier', 'Oberbrunner', 'Rhea Heidenreich', 'profile-emerson24.jpg', 'anonymous-profile-emerson24.jpg', 26, 'f', '1999-01-01', 'Est blanditiis blanditiis blanditiis assumenda in necessitatibus sapiente debitis. Quibusdam vel provident minima consequatur quisquam sunt sequi. Quia eos repellat sed pariatur. Non eligendi ea accusantium necessitatibus eligendi et dolores. Adipisci dicta dolores ratione rem delectus magni amet. Aut consequatur alias illum cum quo et. Fuga mollitia sunt ut veniam id.', 'single', 'catholic', 'chinese', '41918 Mariane Extensions\nAlejandrahaven, ID 77541-3142', '7817 Joaquin Garden\nLake Yoshikofort, MN 68456', 'towne.spencer@example.org', '09282636466', 'emerson24', '$2y$12$/YkasW/SveHekda0dMIZiedkdRootOSoAYOqPrpZiIMDfgxLY5ldm', 1, '3PcUJoEpVz', 'HNugdstB', '2025-03-29 01:33:13'),
(9, 'MeJDCuh5zDWDFSN', 'student', 'Leopoldo', 'Kreiger', 'Walker', 'Haylie Hoppe', 'profile-kbrekke.jpg', 'anonymous-profile-kbrekke.jpg', 26, 'm', '1999-01-01', 'Commodi laboriosam commodi amet consequatur et facilis. Repudiandae corporis quia excepturi ratione aperiam voluptas. Dignissimos est unde ullam ut ut corrupti quia. Et in nihil natus quia voluptas repudiandae alias et. A assumenda aut libero ex tempora debitis maiores repudiandae. Odit voluptas et et dolorum laudantium odit. Nemo nihil porro error ex amet. Ea quia enim veritatis doloremque. Est sit provident voluptas molestiae ut veniam. Nihil rem quia officiis rerum.', 'married', 'muslim', 'chinese', '117 Yvonne Rest\nEstrellafurt, SD 63701', '80646 Sanford Divide\nLake Lucindaville, MI 16184-1747', 'tkilback@example.com', '09225763945', 'kbrekke', '$2y$12$5/b5MH3pbaFpfQmNYb8Fm.gE94Fp4dgooL/l4jMVBNkFD6HtPF6Cy', 1, 'PZ5PjV65j9', 'HwWZCLl5', '2025-03-29 01:33:13'),
(10, '22rmX3uonZnULSp', 'student', 'Evangeline', 'Nicolas', 'Ryan', 'Savannah Christiansen', 'profile-mabelleharber.jpg', 'anonymous-profile-mabelleharber.jpg', 26, 'f', '1999-01-01', 'Non nisi neque neque esse quasi dolorum. Tempora illo et aut qui veritatis labore. Officiis vero tempora incidunt et. Autem perspiciatis aliquam cum incidunt. Voluptatem et enim dolorem nisi quo. Excepturi quaerat veniam aperiam quibusdam est dolor. Tempore ipsum hic rerum doloribus debitis.', 'married', 'catholic', 'american', '250 Paige Squares Apt. 202\nDejastad, TN 18030-1502', '895 Maymie Locks Apt. 732\nAmarahaven, OR 80385', 'maurice.moen@example.net', '09664896129', 'mabelleharber', '$2y$12$3n36ZEnmJW7WpkbWkSCnCudSqb1O4yZf4uN2EEqZF4FIP6eWmSliG', 1, 'nNDAnMnWhQ', '4Be5UMz4', '2025-03-29 01:33:13'),
(11, 'kvKHL1PmdUJZar5', 'parent', 'Wyatt', 'Shields', 'Beier', 'Madison Morar', 'profile-rfeil.jpg', 'anonymous-profile-rfeil.jpg', 26, 'm', '1999-01-01', 'Qui saepe harum magni voluptatem quae numquam voluptas. Quaerat consequatur consequatur autem dolorem qui. Earum voluptatibus omnis vitae repellendus optio perspiciatis commodi. Consequatur deserunt soluta distinctio. Non ducimus sequi inventore repellendus labore sunt. Ut sequi non tempora vero voluptas nam.', 'single', 'catholic', 'chinese', '57646 Nathen Parks\nChelseaton, PA 62059-6739', '4252 Rebeka Shores Apt. 705\nBlickport, RI 78398', 'lorine01@example.org', '09924066167', 'rfeil', '$2y$12$n9.77yQ56.8Sc9EJjfNA..8ToYhcjL.Lf5er0nZrAP13zrwQV6l3.', 1, 'Cig1N1Au4x', 'rDtjHrwJ', '2025-03-29 01:33:55'),
(12, 'NuzpBdvOcMskmmG', 'parent', 'Branson', 'Oberbrunner', 'Lindgren', 'Miss Liliane Pagac MD', 'profile-rfay.jpg', 'anonymous-profile-rfay.jpg', 26, 'f', '1999-01-01', 'Eum quas omnis a commodi assumenda quisquam quis. Aspernatur dolor et dolore et aperiam. Consequatur nihil ipsa ipsum fugiat voluptatum aut et. Sint et debitis esse ipsa quibusdam et. Exercitationem dolorem soluta commodi provident assumenda. Aut minima quo culpa.', 'in_relationship', 'muslim', 'filipino', '630 Denis Alley\nErnserton, NM 48069-7928', '8559 McKenzie Divide Suite 436\nWest Isobel, MA 32302-9446', 'yvolkman@example.net', '09810363582', 'rfay', '$2y$12$dk/bfvGZsUCp7hnJFTMrOeZAI6BMQMhjYWg/DKDvFMXSklzRVu1vu', 1, 'IioKMtxhz1', 'Q6dYNA8L', '2025-03-29 01:33:55'),
(13, 'F3mCrMHi6Q7aabr', 'parent', 'Dwight', 'Goyette', 'Lakin', 'Kiana Satterfield I', 'profile-tressarutherford.jpg', 'anonymous-profile-tressarutherford.jpg', 26, 'm', '1999-01-01', 'Dolorem accusamus qui quam et. Consectetur quaerat qui est. Ab qui molestiae dolores ex ipsum a. Cum aut minima in reprehenderit similique commodi. Esse animi vel possimus et. Assumenda esse magnam eligendi. Veritatis ut nobis eum distinctio in nulla. Mollitia numquam qui magni maxime aperiam. Alias modi sit harum eum ut commodi. Voluptatem et excepturi alias deserunt tempora.', 'in_relationship', 'christian', 'american', '669 Omari Turnpike Apt. 641\nKobeside, SD 47846', '687 Yost Mountains Suite 785\nWest Waynemouth, NH 04232', 'cecile70@example.com', '09265939696', 'tressarutherford', '$2y$12$nWa9p8vh/eELj8BYfFjuaeWYdoi3OVEJTHev9.s2mqWhXMDxXcmb2', 1, 'nIVp8CCHHB', 'SZE8whx2', '2025-03-29 01:33:55'),
(14, 'N8GCwPeSJZwzTCR', 'parent', 'Soledad', 'Block', 'Cormier', 'Leta Stracke', 'profile-bwilliamson.jpg', 'anonymous-profile-bwilliamson.jpg', 26, 'm', '1999-01-01', 'Non officiis repellendus sit eos magni. Recusandae ea vel vitae autem est. Blanditiis sit qui modi quis qui et. Alias quasi sed quia recusandae. Eos numquam deleniti eius inventore dolorem saepe quibusdam. Dolorum velit reprehenderit dolore iste libero quasi vitae officia. Quo consequatur laudantium assumenda nesciunt quia. Illum fugiat provident quod qui. Veniam tempore quae quia sit nesciunt aut accusantium. Et laudantium dolorum ut et. Doloremque tempore cupiditate et minima. Eum quos corrupti officiis excepturi.', 'married', 'muslim', 'filipino', '391 Elyse Creek Suite 506\nNorth Giovannichester, SC 81532', '690 Zena Station\nWest Juliannehaven, NY 95853', 'choppe@example.com', '09946565054', 'bwilliamson', '$2y$12$ff4c6IKP/lGUTcalEw2jHua4buY8qN2tq0ri.L3c/crnhjJbFge3O', 1, 'qBh3S7tHxs', 'NiSoNN0X', '2025-03-29 01:33:55'),
(15, '3XMlM93YsMeDFmZ', 'parent', 'Josue', 'Stehr', 'Price', 'Maximilian Barton', 'profile-feestverla.jpg', 'anonymous-profile-feestverla.jpg', 26, 'm', '1999-01-01', 'Quia quos non dolor sunt ea ratione. Dolorum soluta eos sint. Ratione et incidunt expedita qui et labore rem. Iusto quisquam officiis assumenda qui a a. Praesentium quo at qui. Nemo voluptatem sint iusto voluptatum accusantium praesentium labore. Rem saepe nesciunt aliquid voluptatibus.', 'married', 'catholic', 'british', '61306 McKenzie Track\nGoldnermouth, ME 65194', '47343 Walker Lakes Suite 767\nBoydville, CT 23686-8937', 'mohammad.tremblay@example.org', '09728550843', 'feestverla', '$2y$12$PKFchJwfGC3x4gQIIqTRWOdzo52BhyWZdAH3KOzdTH6BPDnSe0N1a', 1, 'nrAO65D8L0', 'ewZgs8SE', '2025-03-29 01:33:55'),
(16, 'G9EfomRmAp9JaRj', 'itrc', 'Myrna', 'Howe', 'McLaughlin', 'Chandler Langworth', 'profile-jevongraham.jpg', 'anonymous-profile-jevongraham.jpg', 26, 'm', '1999-01-01', 'Corporis autem et officiis. Voluptatem consequatur voluptas quis doloribus. Dolor nemo libero dignissimos earum quaerat quis reprehenderit. Dolor doloribus rerum soluta aspernatur magni. Asperiores velit inventore velit. Saepe consectetur ad illo in sed. Autem laboriosam et deserunt placeat. Aut repudiandae amet ab explicabo. Rerum voluptatum hic sunt expedita. Natus accusamus doloremque quia et. Quasi veritatis reiciendis quidem voluptate tenetur nisi tempore.', 'single', 'christian', 'filipino', '684 Tillman Well\nLake Krista, MT 99968-8883', '88295 Bednar Roads Apt. 718\nEast Jayceemouth, OR 09686', 'ohills@example.net', '09915262751', 'jevongraham', '$2y$12$ke/cEhUzUO20gxzcJNntKOGcyTAsVaPDTuSL/vzurNaZT.qGmbAwO', 1, 'TcqxlAHrNB', 'K9w08WW4', '2025-03-29 01:34:05'),
(17, 'o7rwryPTcd0EHKs', 'prefect', 'Isom', 'Lakin', 'Raynor', 'Mrs. Marie O\'Kon', 'profile-mazie95.jpg', 'anonymous-profile-mazie95.jpg', 26, 'f', '1999-01-01', 'Est aut a est enim tenetur quam ducimus accusamus. Cumque dolores quia officiis. Explicabo veniam nam natus perspiciatis et asperiores aut similique. Amet veritatis omnis inventore et. Modi quas nulla maiores quam autem rerum. Similique sunt aliquid quas velit odit eligendi ipsa. Rerum odio soluta ea exercitationem et dolores. Ea non occaecati nobis laboriosam voluptatem. Quidem qui est hic deserunt. Officia perspiciatis ducimus voluptatibus in quae. Inventore error autem nam quis quasi inventore maxime mollitia. Officiis praesentium beatae illo numquam et ipsum quia.', 'married', 'catholic', 'british', '78571 Viviane Plaza\nAndytown, ME 02111', '4845 Gutkowski Turnpike\nFletcherbury, WI 23079', 'emily43@example.org', '09505618157', 'mazie95', '$2y$12$Ig/RXXA5SCPFLrGEkj9OMuFgd7D/J6mH3jGcqKAaUz5hOrlRGi79m', 1, 'E7NjdHdjdA', '29lQGg7L', '2025-03-29 01:34:14'),
(18, 'SK6tvrsrNwr6lmH', 'faculty', 'Shane', 'Crooks', 'Runolfsdottir', 'Mr. Payton Witting DDS', 'profile-rueckerruth.jpg', 'anonymous-profile-rueckerruth.jpg', 26, 'm', '1999-01-01', 'Doloribus nemo facilis accusamus qui. Tenetur rerum alias voluptatem dicta fuga velit est. Nemo officia libero sed praesentium recusandae et quibusdam sint. Ipsam itaque ut a eius quis temporibus. Voluptate accusantium saepe quia soluta. Voluptate quae laudantium exercitationem nihil molestiae et. Velit sint consequatur qui aut. Sit iste quia iste facilis et. Ducimus adipisci voluptatum id placeat repellat unde autem nihil. Delectus rerum asperiores nobis quo. Perspiciatis non consectetur et iste distinctio molestias doloremque.', 'single', 'muslim', 'american', '59758 Heidenreich Walk Apt. 926\nPort Jackieport, AR 96438', '773 Willy Flats Apt. 766\nPort Bonnie, IL 22707-6671', 'mayra.heidenreich@example.com', '09594654085', 'rueckerruth', '$2y$12$EwsZ0iR0xU0R60AIRbDCpehqoUWvKoiL/e/e9hV4TVLqrFJUErEOy', 1, 'zbLbQvQDLW', 'W2El1bjf', '2025-03-29 01:35:29'),
(19, 'vsbbQhDI8PHARmB', 'faculty', 'Don', 'Jacobi', 'Bernhard', 'Rowland Towne II', 'profile-kreigerdemond.jpg', 'anonymous-profile-kreigerdemond.jpg', 26, 'f', '1999-01-01', 'Qui qui id magnam cum facere pariatur. Debitis ipsam autem similique molestiae sint porro quidem. Sint fugit maiores itaque fuga. Atque laboriosam a rem magnam a tempore est. Est at quia qui fugiat distinctio voluptatem. Voluptas porro omnis neque. Corporis blanditiis dolorum fuga officiis aspernatur. Vel iste ea fuga sunt repudiandae consequatur atque. Voluptatem magnam blanditiis expedita dolor ea est nam.', 'single', 'catholic', 'american', '26571 Orn Hill Apt. 120\nNew Kalishire, KY 42077', '15579 Reba Flat\nPort Emilietown, MN 29788', 'lyric34@example.org', '09157570592', 'kreigerdemond', '$2y$12$fmdpLQesjjzRm8kkf9yxGeHnV/B7i07TLUouC5/ZHMpTHIeLjV.62', 1, 'um75qKhKKK', 'PuHfoqWq', '2025-03-29 01:35:29'),
(20, 'OcaHnzM4vbYhV4I', 'faculty', 'Frederic', 'Cummerata', 'Pagac', 'Mr. Gaston Borer Jr.', 'profile-randalthiel.jpg', 'anonymous-profile-randalthiel.jpg', 26, 'f', '1999-01-01', 'Voluptate excepturi et nobis. Sunt quia quia esse vel esse nulla dicta et. Aut similique aut rerum dolore a dolorem labore occaecati. Eveniet id quo optio commodi. Eum officiis ut et ut aut. Vitae dolores inventore amet architecto voluptatibus. Iure recusandae quaerat accusantium neque error blanditiis veritatis libero. Cupiditate et est doloribus voluptas quo veniam quo. Et cum soluta quibusdam ut. Dignissimos perspiciatis consequatur dolor sit sint consequatur. Quis illo tenetur eius deserunt qui laboriosam. Dolor eos sunt ipsa.', 'single', 'muslim', 'chinese', '767 Terrence Shoal\nLake Karolannberg, SD 82860-2511', '7189 Alycia Knoll\nKristinmouth, CO 34432', 'spouros@example.net', '09162150540', 'randalthiel', '$2y$12$Y2.7OLzbBCX3WNGukrLpfeQGFglue6ov7FGRyHqHOU.OWlIv6awUW', 1, 'aa2cEFI7uo', 'gFwwIia4', '2025-03-29 01:35:29'),
(21, 'v75oyDbFZf8Es8R', 'faculty', 'Lisandro', 'Stiedemann', 'Stroman', 'Mariah Halvorson', 'profile-melissabernier.jpg', 'anonymous-profile-melissabernier.jpg', 26, 'm', '1999-01-01', 'Et voluptate voluptatem voluptates. Qui ut eaque voluptas eos qui. Facere molestiae est dolores optio quisquam qui et. Corrupti neque itaque quos quia. Et saepe atque labore nihil a. Culpa aut adipisci odit eos voluptate sed. Esse perspiciatis non rerum a eligendi quisquam voluptas. Corrupti reiciendis rerum consectetur. Perspiciatis minus hic consequatur minima. Maiores assumenda voluptatem porro aperiam aliquam.', 'married', 'christian', 'british', '649 Lang Flat Apt. 194\nNew Jodieside, NY 58311-8199', '18652 Albin Green Apt. 759\nFlatleyside, PA 34439', 'mittie38@example.com', '09739856429', 'melissabernier', '$2y$12$nLCpSd6C0VmgZV012Hnl1.5npcQaDEMcnNH77ZG.WcwpFD3Lui65K', 1, 'XljG7j9CV5', 'P2wCBzQr', '2025-03-29 01:35:29'),
(22, 'wfACm5TQKhKN32T', 'faculty', 'Dimitri', 'Ziemann', 'Howell', 'Ruth Bailey DDS', 'profile-brandon68.jpg', 'anonymous-profile-brandon68.jpg', 26, 'f', '1999-01-01', 'Nostrum provident dolores aliquid rerum sint sit necessitatibus. Est a similique fugit inventore. Asperiores qui sunt quasi nihil ea. Et sapiente asperiores delectus odit. Quia corrupti eos vitae vitae qui aut.', 'single', 'muslim', 'chinese', '437 Rae Summit Suite 979\nKuhlmanland, OK 46626-0639', '41590 Dahlia Summit\nEast Madie, MO 96610-8471', 'osinski.favian@example.net', '09426580455', 'brandon68', '$2y$12$QYRc3JAPY9Tf.pXcLwZTN.wTotBSMFSC.4qr73e7Tnm4tGw9gyLra', 1, '5mcKtalPz1', 'NADcc3yd', '2025-03-29 01:35:29'),
(23, 'mRbcd0TJvr4LBsK', 'faculty', 'Scot', 'Hodkiewicz', 'Bergnaum', 'Miss Cheyanne Robel III', 'profile-aurelia21.jpg', 'anonymous-profile-aurelia21.jpg', 26, 'f', '1999-01-01', 'Et non voluptas nihil quia vel. Laborum nulla minus corporis eum dolore reprehenderit. Omnis facere qui sapiente officia et consectetur. Nam omnis exercitationem dolorem autem rerum. In omnis omnis placeat autem quia accusamus molestiae.', 'in_relationship', 'christian', 'british', '32997 Xzavier Stream Suite 757\nEast Aylafurt, AK 85022-1053', '3490 Turcotte Street Apt. 477\nWisokyland, KS 73733', 'reanna70@example.com', '09696181149', 'aurelia21', '$2y$12$YKSDsMjFd8bSB4VIloQQAukaNaUULRZdodaqnoX96ZoMeQLhH1mPC', 1, 'xCf6CpOK3B', '6mPSl1PY', '2025-03-29 01:35:30'),
(24, '6xROm1w4o22UtEc', 'faculty', 'Lee', 'Nolan', 'Waelchi', 'Miss Zoie Dare', 'profile-fferry.jpg', 'anonymous-profile-fferry.jpg', 26, 'f', '1999-01-01', 'Aut voluptas nihil facere ea earum nihil cumque. Dolorem consequuntur quas rem ut facere. Suscipit eligendi dolores corporis rerum. Aut non fugit qui nisi numquam voluptatem qui. Natus dolor quo quia numquam quam sint. Cum sunt et sed accusantium est necessitatibus alias laudantium. Facilis fugit accusamus alias voluptatem rerum. Suscipit ut aliquid natus reprehenderit nostrum qui. Velit optio reiciendis nostrum repellendus temporibus veritatis. Ut odit quia vitae voluptas itaque voluptatem excepturi. Consequatur rerum quo iusto atque consequatur iste ad non.', 'single', 'catholic', 'british', '5193 Morissette Ranch\nLindville, UT 15929-3326', '6197 Lavonne Skyway\nNew Vicentaport, WA 80927-6534', 'rosemary50@example.net', '09524665291', 'fferry', '$2y$12$v0w8OBDGx5vFtu9SUh0xnOOvxCkZ9z.bo9lY4eKGlcOEBSTSg4OZq', 1, 'NF7dgbmGq6', 'o028v4Jq', '2025-03-29 01:35:30'),
(25, 'dazmgkvMIDSoqq1', 'faculty', 'Brennan', 'Osinski', 'Kulas', 'Isom Lynch', 'profile-aimee66.jpg', 'anonymous-profile-aimee66.jpg', 26, 'm', '1999-01-01', 'Dolore eaque autem iure. Quasi accusamus dolor minima non ea. Dicta et rerum veritatis corporis quo placeat. Fugiat animi saepe et officiis magnam nisi. Earum atque corporis amet necessitatibus nisi eos. Reiciendis aliquam consequatur et vitae ea. Inventore officia illo porro provident tempore tempore. Beatae aspernatur blanditiis inventore est hic iure est qui. Sunt officia eveniet itaque eius maiores.', 'in_relationship', 'catholic', 'chinese', '8707 Doyle Mall Apt. 312\nNew Roxanefort, MS 08444', '200 Estella Rue\nJadashire, NM 11013-9814', 'kuhlman.naomi@example.org', '09500336900', 'aimee66', '$2y$12$saVApzQpxtTM7cQFZddZKuW0aUHwVkQTWK38SjRgGAA9nvkI1mdGO', 1, 'B2Bi1pjfLu', 'knQM2Vos', '2025-03-29 01:35:30'),
(26, '1HmmRGodcNNbgzE', 'faculty', 'Shayne', 'Gutkowski', 'Toy', 'Elza Grant', 'profile-louisadibbert.jpg', 'anonymous-profile-louisadibbert.jpg', 26, 'f', '1999-01-01', 'Vel occaecati cum id sint quia qui. Quae dolor maiores pariatur quia et. Aut rerum voluptates quos accusamus. Exercitationem aut aut non unde inventore nam. Quos voluptas voluptatem dolores suscipit voluptatem odio neque. Aut quaerat vero sunt non quasi. Quas totam earum voluptas labore.', 'single', 'christian', 'american', '4755 Davis Orchard\nBrainstad, NE 21149', '77167 Micaela Ridges\nLake Makaylaberg, NC 62959', 'allen76@example.org', '09663936415', 'louisadibbert', '$2y$12$JxZg4WjEx6YTySxdlc3mNuGIF6jqrXEbHeoICBu2FdtwEdVetSfIS', 1, '4x4uarXMja', 'P3jFRUoc', '2025-03-29 01:35:30'),
(27, 'TcQgJidplgZ0ThG', 'faculty', 'Christop', 'Mann', 'Jerde', 'Aaron D\'Amore IV', 'profile-monroe19.jpg', 'anonymous-profile-monroe19.jpg', 26, 'm', '1999-01-01', 'Consequatur illum qui ut voluptatem veritatis dolor. Nulla ea nihil numquam quia a molestiae et eaque. Doloribus dolor possimus ipsam qui quae voluptatem. Tempora est eum earum eos aliquid. Vel qui aliquid nobis doloremque architecto corporis. Tempore ut alias rem quod. Eveniet nihil ut nihil possimus ab. Et et labore voluptate rem et. Ducimus aperiam iste aut consequuntur et. Deserunt maxime enim explicabo et et.', 'married', 'catholic', 'british', '43368 Bednar Prairie Suite 900\nNew Soniaview, KS 86573', '492 Noemy Lakes Apt. 472\nPort Charleneport, ME 95397-4124', 'hreynolds@example.com', '09726597575', 'monroe19', '$2y$12$2ek4pXf9zAvnIQsL3ZcHdO84KsoVW56xszViA9VxdNEc24Bio.JsS', 1, 'pLuzeDekVh', 'dqLdXDYx', '2025-03-29 01:35:30'),
(28, 'ctvWKD0dWCaIIkI', 'staff', 'Melyna', 'Metz', 'Shields', 'Kayla Kunze', 'profile-lonmorar.jpg', 'anonymous-profile-lonmorar.jpg', 26, 'm', '1999-01-01', 'Sunt praesentium nobis non nihil explicabo ea. Qui qui ex aut nesciunt ratione dolorem. Modi dicta nostrum voluptatum sit. Sequi possimus quo modi iusto. Quis earum minus et ea dicta repellat quas. Aut vel ut natus quis. Ex commodi nemo odit. Ut aut dolor iste doloribus nesciunt. Quos culpa iusto nemo.', 'in_relationship', 'christian', 'american', '9211 Batz Branch\nWest Ashleighmouth, NM 53735', '14922 Swift Ridges\nKertzmannland, HI 79476-7484', 'bogisich.jadon@example.net', '09571150478', 'lonmorar', '$2y$12$rAVzRGLTRN/ABPHoEryZEOhOIjTLKNsXUf6tLroFdkUwV458Pd1le', 1, 'lOtHmcRZgc', 'h4Kqn6sS', '2025-03-29 01:36:44'),
(29, 'OFuNXijSSvalLw4', 'staff', 'Lemuel', 'Greenfelder', 'Ondricka', 'Prof. Beth Leuschke Sr.', 'profile-btoy.jpg', 'anonymous-profile-btoy.jpg', 26, 'm', '1999-01-01', 'Labore totam facilis recusandae illo est perferendis. Assumenda corporis optio quo laborum. Ducimus aut velit nobis. Aut sapiente a assumenda quo. Dolores nemo repellendus suscipit sapiente quia quia fugit corporis. Perspiciatis blanditiis et voluptatem ad et dolores. Officiis non alias natus dolor. Exercitationem et voluptas adipisci ut optio. Et enim tempore ab accusantium tempore.', 'in_relationship', 'muslim', 'filipino', '5796 Graham Walk Suite 394\nCartwrightborough, AK 94602-1755', '9324 Osbaldo Terrace Apt. 481\nPort Helen, DC 46920-9254', 'tdietrich@example.net', '09431663540', 'btoy', '$2y$12$Fjo4AmDw9FmSWprVvdcme.nrLDFemrMn6ywnh8Dny4Y.Moq3LsN4S', 1, 'ikNjoMp4ea', 'EjXx6nFf', '2025-03-29 01:36:44'),
(30, '3d2aqr0hmP6UvYB', 'staff', 'Jaylon', 'Emard', 'Cronin', 'Otha Towne III', 'profile-efren82.jpg', 'anonymous-profile-efren82.jpg', 26, 'm', '1999-01-01', 'Ducimus veritatis et repudiandae eligendi. Vero voluptas esse incidunt excepturi debitis molestiae quam. Et quas eligendi quia maiores in. Repellat exercitationem atque alias repudiandae. Nostrum praesentium dolores autem est perspiciatis. Corporis perferendis recusandae at. Veritatis asperiores fuga nihil ea ratione consequuntur. Quia quibusdam est aliquid consequatur et.', 'single', 'catholic', 'american', '85111 D\'Amore Lakes Suite 093\nBrakusberg, FL 72970', '4158 Mante Fall Apt. 898\nHobartville, MI 56213', 'buddy.gibson@example.com', '09431553290', 'efren82', '$2y$12$TnYDb.NEIzx1VY7OmmlC/eZoPxsWivkaiT03JCNb8Dm/D4Re9o6ty', 1, 'RoDUg7Rx9Z', '4E36d8bK', '2025-03-29 01:36:45'),
(31, 'BBIKf9zr77uRJQ7', 'staff', 'Luella', 'Parker', 'Mann', 'Ike Abernathy DVM', 'profile-shanna35.jpg', 'anonymous-profile-shanna35.jpg', 26, 'f', '1999-01-01', 'Odit quis natus molestiae fugiat eum ea nihil. Officiis ipsa nam et debitis nam. Doloremque earum aut repudiandae. Vel nobis nihil alias ut corporis. Alias ratione provident velit omnis minima. Ut ut et atque unde in nemo. Sit rem tempore voluptatem quo.', 'married', 'christian', 'american', '7184 Burdette Park\nKianland, MD 40609', '75809 Johnson Inlet Suite 324\nWest Talia, NV 74628-8578', 'dewitt.runolfsson@example.org', '09847351467', 'shanna35', '$2y$12$vaq1qTVJ5epWGL2dRjeXQOfzn61SqL9k64fhdAAtXWZRR6bh.Zzm.', 1, 'AuUtDoVmHw', 'uqwg08t8', '2025-03-29 01:36:45'),
(32, 'jboFHc4qr4NoGVn', 'staff', 'Aliya', 'Frami', 'Oberbrunner', 'Dr. Jalon Hilpert', 'profile-amie53.jpg', 'anonymous-profile-amie53.jpg', 26, 'm', '1999-01-01', 'Et ut sed cum. Ea maiores molestiae et corporis nemo at. Fugiat iusto provident blanditiis. Architecto dolor doloremque autem assumenda earum mollitia neque et. Accusantium est eum ut. Vero minima eligendi ea corporis laudantium neque sequi.', 'married', 'catholic', 'chinese', '6409 Raphael Circle\nLittleberg, NM 69752-3358', '77851 Kuphal Meadows\nBodeview, OK 26918-5162', 'thagenes@example.com', '09311457958', 'amie53', '$2y$12$eFYzW0lijtlFRMImeatbIOU1w7Baebh8MFg2YOG3oKCrABck34slK', 1, 'uEQjuMU8eM', '1MXPJ3iV', '2025-03-29 01:36:45'),
(33, 'cZVGS4XgvLCfLTF', 'staff', 'Kristopher', 'West', 'Jaskolski', 'Elena Abbott', 'profile-damonbauch.jpg', 'anonymous-profile-damonbauch.jpg', 26, 'f', '1999-01-01', 'Velit molestiae porro harum labore. Maiores voluptatem quibusdam neque quas. Cumque eligendi ut nisi aut impedit. Et nesciunt sint maxime cumque. Et alias ducimus exercitationem sit assumenda consequatur quisquam. Quaerat quis veniam quis saepe ut. Impedit omnis nesciunt similique dolor.', 'married', 'catholic', 'american', '1738 Greenholt Glens Suite 695\nEast Denatown, IL 13369', '62223 Jacobson Brooks\nClevebury, DC 16791-6654', 'jarrod34@example.net', '09621348783', 'damonbauch', '$2y$12$Cu2iPgPiR3JL90d0XsPcoOzZ20iRuZVw2L7fOZgbzffzoZtx9APyu', 1, 'hJtFFUnRds', 'xIAuwjvV', '2025-03-29 01:36:46'),
(34, '7cLQ0jROJYaxtIX', 'staff', 'Ola', 'Larson', 'Marquardt', 'Vicky Skiles', 'profile-albina93.jpg', 'anonymous-profile-albina93.jpg', 26, 'm', '1999-01-01', 'Temporibus nulla ut reprehenderit enim. Voluptatum molestiae sed illo nihil natus dolores. Dolorem nulla tempora est voluptatem quas. Et voluptas nulla rerum laboriosam. Earum totam quod non praesentium. Culpa mollitia autem temporibus tenetur exercitationem.', 'married', 'catholic', 'chinese', '839 Smitham Cliff Suite 683\nEast Mariela, UT 42758-8218', '5562 Goodwin Divide Apt. 673\nNorth Jonas, PA 86823-4061', 'judge.gottlieb@example.com', '09871245433', 'albina93', '$2y$12$qxbc5cECfbBKpL4qwJUQ9uPh3uXSh3Wj8K6iI9aLzVsgZa4SGjrFy', 1, 'BLT8pcGMo3', 'Gdu6pupL', '2025-03-29 01:36:46'),
(35, '9jyp42baTxfN01t', 'staff', 'Lexus', 'Welch', 'Nader', 'Ruthie Ortiz', 'profile-malachi07.jpg', 'anonymous-profile-malachi07.jpg', 26, 'f', '1999-01-01', 'At in nihil quod eum a pariatur et consequatur. Consequatur sapiente quas eius rerum architecto ut. Sit cupiditate ut quod et molestiae eos distinctio. Inventore quod harum perspiciatis qui quisquam eveniet. Error et consequatur molestias laudantium quos sed corporis. Ut ullam esse aut. Facilis accusantium consequatur ratione rerum voluptas molestias iure. Sunt omnis molestiae temporibus tempora ipsam fuga sit. Accusantium voluptatem facilis recusandae est.', 'single', 'christian', 'filipino', '5444 Parker Mall Apt. 447\nEast Melvinashire, NE 29883-8641', '88437 Bailey Glen\nDietrichview, TN 75866', 'daija.kirlin@example.org', '09889176247', 'malachi07', '$2y$12$eDBcEewDiL5aVU/WJxuw4.1mKMSExSyzWoJTUMwwMqCb8/binJViK', 1, 'Wnwukfj3Qm', 'zdwxAXGI', '2025-03-29 01:36:46'),
(36, 'qZ1mtcK0InbbTVq', 'staff', 'Ray', 'Conn', 'Schaden', 'Julie Kertzmann II', 'profile-merlin99.jpg', 'anonymous-profile-merlin99.jpg', 26, 'm', '1999-01-01', 'Blanditiis minus totam voluptas cumque velit sit. Sed dolore accusantium et odio voluptas vel. Iure eveniet ut nihil nihil vero et. Atque aut tempore qui exercitationem. Consequatur sit eius totam quod voluptate quaerat veritatis commodi. Quam culpa et soluta et voluptatum autem ipsa. Ut aut tenetur qui. A voluptatem quisquam mollitia tempore alias. Eligendi laboriosam qui sunt qui. Officiis ad est omnis explicabo perferendis ut amet. Adipisci doloremque eaque ut est. Non modi deserunt recusandae et eligendi nihil officiis sapiente.', 'married', 'christian', 'american', '9333 Cassin Ranch\nClementinaborough, LA 57504-2218', '5940 Friesen Ford\nMackenziestad, MD 09662-0031', 'treutel.blanca@example.com', '09839857412', 'merlin99', '$2y$12$hXkD83GCi1.tX/xt052H7uqFeIibBC74cqLk4O/B/6zEFFcUyKMIG', 1, 'yWUeGgDoKE', 'mOHbHBDF', '2025-03-29 01:36:46'),
(37, '1246d6YOtmMqX2G', 'staff', 'Vidal', 'Ward', 'Weimann', 'Bennie Armstrong PhD', 'profile-glovermallory.jpg', 'anonymous-profile-glovermallory.jpg', 26, 'f', '1999-01-01', 'Natus ea aperiam voluptatem occaecati. Labore ab delectus mollitia non sed. Adipisci doloremque enim sunt ipsam in. Qui doloremque enim necessitatibus molestiae ut. Autem non in animi repellat corporis ipsa. Qui qui debitis et voluptas eaque dolore delectus. Voluptates non placeat vitae et ut dolore.', 'married', 'christian', 'british', '37835 Shaina Lodge\nNew Jamar, IA 07669', '565 Reichel Throughway\nWisozkfort, NC 43053', 'johnston.ferne@example.org', '09238325442', 'glovermallory', '$2y$12$TB91M7SEH2XPfewftKVFQetSWOfuH4R/VU/wGQmrI9hF1IwmeMiFC', 1, 'i3LTVtY9cm', 'w0RqGUpZ', '2025-03-29 01:36:46');

-- --------------------------------------------------------

--
-- Table structure for table `violation`
--

CREATE TABLE `violation` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `violation_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `offense_status` enum('major','minor') NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT '2025-03-29 01:30:05'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `violation_penalty`
--

CREATE TABLE `violation_penalty` (
  `violation_id` int(11) NOT NULL,
  `occurence` int(11) NOT NULL,
  `penalty_id` double NOT NULL,
  `other_penalty` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `administrative`
--
ALTER TABLE `administrative`
  ADD KEY `administrative_program_id_foreign` (`program_id`),
  ADD KEY `administrative_user_id_foreign` (`user_id`);

--
-- Indexes for table `admission`
--
ALTER TABLE `admission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `appointment_request`
--
ALTER TABLE `appointment_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `complaint`
--
ALTER TABLE `complaint`
  ADD PRIMARY KEY (`case_number`),
  ADD KEY `complaint_complainant_id_foreign` (`complainant_id`),
  ADD KEY `complaint_student_id_foreign` (`student_id`);

--
-- Indexes for table `complaint_evidence_file`
--
ALTER TABLE `complaint_evidence_file`
  ADD KEY `complaint_evidence_file_complaint_case_number_foreign` (`complaint_case_number`);

--
-- Indexes for table `complaint_possible_offense`
--
ALTER TABLE `complaint_possible_offense`
  ADD KEY `complaint_possible_offense_complaint_case_number_foreign` (`complaint_case_number`);

--
-- Indexes for table `education_background`
--
ALTER TABLE `education_background`
  ADD PRIMARY KEY (`id`),
  ADD KEY `education_background_student_id_foreign` (`student_id`);

--
-- Indexes for table `faculty`
--
ALTER TABLE `faculty`
  ADD KEY `faculty_program_id_foreign` (`program_id`),
  ADD KEY `faculty_user_id_foreign` (`user_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `family`
--
ALTER TABLE `family`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `family_member`
--
ALTER TABLE `family_member`
  ADD KEY `family_member_family_id_foreign` (`family_id`),
  ADD KEY `family_member_parent_id_foreign` (`parent_id`),
  ADD KEY `family_member_child_id_foreign` (`child_id`);

--
-- Indexes for table `gate_pass`
--
ALTER TABLE `gate_pass`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `gate_pass_qrcode_source_code_unique` (`qrcode_source_code`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `itrc`
--
ALTER TABLE `itrc`
  ADD KEY `itrc_user_id_foreign` (`user_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `parent`
--
ALTER TABLE `parent`
  ADD KEY `parent_user_id_foreign` (`user_id`);

--
-- Indexes for table `penalty`
--
ALTER TABLE `penalty`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prefect`
--
ALTER TABLE `prefect`
  ADD KEY `prefect_user_id_foreign` (`user_id`);

--
-- Indexes for table `program`
--
ALTER TABLE `program`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `referral`
--
ALTER TABLE `referral`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD KEY `staff_user_id_foreign` (`user_id`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD KEY `student_program_id_foreign` (`program_id`),
  ADD KEY `student_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_user_id_unique` (`user_id`),
  ADD UNIQUE KEY `users_anonymous_name_unique` (`anonymous_name`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `violation`
--
ALTER TABLE `violation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admission`
--
ALTER TABLE `admission`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment_request`
--
ALTER TABLE `appointment_request`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `complaint`
--
ALTER TABLE `complaint`
  MODIFY `case_number` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `education_background`
--
ALTER TABLE `education_background`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `family`
--
ALTER TABLE `family`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `gate_pass`
--
ALTER TABLE `gate_pass`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `program`
--
ALTER TABLE `program`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `referral`
--
ALTER TABLE `referral`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `violation`
--
ALTER TABLE `violation`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `administrative`
--
ALTER TABLE `administrative`
  ADD CONSTRAINT `administrative_program_id_foreign` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `administrative_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `complaint`
--
ALTER TABLE `complaint`
  ADD CONSTRAINT `complaint_complainant_id_foreign` FOREIGN KEY (`complainant_id`) REFERENCES `users` (`user_id`),
  ADD CONSTRAINT `complaint_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `complaint_evidence_file`
--
ALTER TABLE `complaint_evidence_file`
  ADD CONSTRAINT `complaint_evidence_file_complaint_case_number_foreign` FOREIGN KEY (`complaint_case_number`) REFERENCES `complaint` (`case_number`) ON DELETE CASCADE;

--
-- Constraints for table `complaint_possible_offense`
--
ALTER TABLE `complaint_possible_offense`
  ADD CONSTRAINT `complaint_possible_offense_complaint_case_number_foreign` FOREIGN KEY (`complaint_case_number`) REFERENCES `complaint` (`case_number`) ON DELETE CASCADE;

--
-- Constraints for table `education_background`
--
ALTER TABLE `education_background`
  ADD CONSTRAINT `education_background_student_id_foreign` FOREIGN KEY (`student_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `faculty`
--
ALTER TABLE `faculty`
  ADD CONSTRAINT `faculty_program_id_foreign` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `faculty_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `family_member`
--
ALTER TABLE `family_member`
  ADD CONSTRAINT `family_member_child_id_foreign` FOREIGN KEY (`child_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `family_member_family_id_foreign` FOREIGN KEY (`family_id`) REFERENCES `family` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `family_member_parent_id_foreign` FOREIGN KEY (`parent_id`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `itrc`
--
ALTER TABLE `itrc`
  ADD CONSTRAINT `itrc_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `parent`
--
ALTER TABLE `parent`
  ADD CONSTRAINT `parent_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `prefect`
--
ALTER TABLE `prefect`
  ADD CONSTRAINT `prefect_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `staff`
--
ALTER TABLE `staff`
  ADD CONSTRAINT `staff_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `student`
--
ALTER TABLE `student`
  ADD CONSTRAINT `student_program_id_foreign` FOREIGN KEY (`program_id`) REFERENCES `program` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `student_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
