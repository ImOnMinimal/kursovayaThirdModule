-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 21 2023 г., 20:34
-- Версия сервера: 10.4.26-MariaDB-log
-- Версия PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test`
--

-- --------------------------------------------------------

--
-- Структура таблицы `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `comment` text NOT NULL,
  `post_id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `comments`
--

INSERT INTO `comments` (`id`, `nickname`, `comment`, `post_id`, `date`) VALUES
(1, 'abc', '123', 13, '2023-08-21'),
(2, 'abc33', '123', 13, '2023-08-21');

-- --------------------------------------------------------

--
-- Структура таблицы `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` text NOT NULL,
  `subtitle` text NOT NULL,
  `text` text NOT NULL,
  `tag` varchar(32) DEFAULT NULL,
  `likes` int(11) NOT NULL DEFAULT 0,
  `dislikes` int(11) NOT NULL DEFAULT 0,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `posts`
--

INSERT INTO `posts` (`id`, `title`, `subtitle`, `text`, `tag`, `likes`, `dislikes`, `date`) VALUES
(12, 'title', 'subtitle', 'loremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremasloremas', 'Прошедшие матчи', 117, 2, '2023-08-20'),
(13, 'adsafewrqwesaxzfeqrqwefdsfadsad', 'sdasdasdassda', 'ИХИХХИХИХИХИХХИХИХИИХИИХ', 'Что говорят дотеры', 1, 0, '2023-08-21');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(60) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `email`) VALUES
(1, 'Mineralka', '$2y$10$gLZlmbPpZVMhj2YTAZYQeuY1sekEPs64dpMMW81qydo1C/nsbPiPS', 'Chdv962007@gmail.com'),
(3, 'figgers', '$2y$10$n/x7DncfpgUZC8HAOy5eheFYZUAMI4JYcxZDJ05Y9OE9NT7WILccq', 'Chdv962007@gmail.com'),
(4, 'ImOnMinimal', '$2y$10$iYLZ7Nw9a9aDmcxzvgMu3eFgiKj89WUGmeoL3q3kBmGCF3.hIOfKy', 'Chdv962007@gmail.com'),
(5, '123', '$2y$10$UoPedZoW025xm2JYsXAJSuZ9XTKg0rlh16333XRAh5cLMTumY9eBi', 'Chdv962007@gmail.com'),
(6, '64634', '$2y$10$mG7OHm9qnA370bZnDx7ue.pEYVZUXfCZ.zusbg1gbQ8yVaxtOCCW.', 'Chdv962007@gmail.com'),
(7, '646344', '$2y$10$3.u9iWIMnZPlNatlqtug0ewR55Xti1PPtWfnd5dTMQbLfs7y7SuS2', 'Chdv962007@gmail.com'),
(8, '6463442', '$2y$10$msBrxpDjWQIkVQ94DasHMujl24p4vU8iXc/v2o6Cn8bhh4axiisc6', 'Chdv962007@gmail.com'),
(9, 'gpfssds', '$2y$10$HDToecl1h/SBwxA/ehikFOzzotypXOvYArHRwOMDzqVh2nh07/w8C', 'Chdv962007@gmail.com'),
(10, 'pikemon', '$2y$10$8E1QkV.ct.Yvi1Dab9w3.exKn./1x8MzkzcLVy/SeKnR6gry4cYWK', 'Chdv962007@gmail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
