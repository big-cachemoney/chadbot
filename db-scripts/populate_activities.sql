-- User 2 (see): Health-conscious focused on weight increase and bulk, 3 times a week
-- Strength training and bulking focused activities
INSERT INTO activities (date, time, user_id, activity_name, sets, repetitions, duration) VALUES
-- Week 1 - Strength and bulking focus
('2024-01-08', '08:00:00', 2, 'Bench Press', 4, 8, NULL),
('2024-01-08', '08:20:00', 2, 'Barbell Squats', 4, 6, NULL),
('2024-01-08', '08:45:00', 2, 'Deadlifts', 3, 5, NULL),
('2024-01-08', '09:00:00', 2, 'Pull-ups', 3, 10, NULL),
('2024-01-10', '08:00:00', 2, 'Overhead Press', 4, 8, NULL),
('2024-01-10', '08:25:00', 2, 'Bent-over Rows', 4, 8, NULL),
('2024-01-10', '08:50:00', 2, 'Leg Press', 4, 10, NULL),
('2024-01-12', '08:00:00', 2, 'Incline Bench Press', 4, 8, NULL),
('2024-01-12', '08:20:00', 2, 'Romanian Deadlifts', 3, 8, NULL),
('2024-01-12', '08:40:00', 2, 'Lat Pulldowns', 4, 10, NULL),

-- Week 2 - Progressive overload
('2024-01-15', '08:00:00', 2, 'Bench Press', 4, 8, NULL),
('2024-01-15', '08:25:00', 2, 'Barbell Squats', 4, 6, NULL),
('2024-01-15', '08:50:00', 2, 'Weighted Pull-ups', 3, 8, NULL),
('2024-01-17', '08:00:00', 2, 'Overhead Press', 4, 8, NULL),
('2024-01-17', '08:25:00', 2, 'Pendlay Rows', 4, 6, NULL),
('2024-01-17', '08:45:00', 2, 'Front Squats', 3, 8, NULL),
('2024-01-19', '08:00:00', 2, 'Close Grip Bench Press', 4, 8, NULL),
('2024-01-19', '08:20:00', 2, 'Barbell Curls', 3, 10, NULL),
('2024-01-19', '08:35:00', 2, 'Tricep Extensions', 3, 12, NULL),

-- Week 3 - Hypertrophy focus
('2024-01-22', '08:00:00', 2, 'Dumbbell Bench Press', 4, 12, NULL),
('2024-01-22', '08:25:00', 2, 'Goblet Squats', 4, 12, NULL),
('2024-01-22', '08:45:00', 2, 'Dumbbell Rows', 4, 12, NULL),
('2024-01-24', '08:00:00', 2, 'Dumbbell Shoulder Press', 4, 12, NULL),
('2024-01-24', '08:25:00', 2, 'Lunges', 3, 10, NULL),
('2024-01-24', '08:45:00', 2, 'Face Pulls', 3, 15, NULL),
('2024-01-26', '08:00:00', 2, 'Incline Dumbbell Press', 4, 12, NULL),
('2024-01-26', '08:25:00', 2, 'Hammer Curls', 3, 12, NULL),
('2024-01-26', '08:40:00', 2, 'Skull Crushers', 3, 12, NULL),

-- Week 4 - Deload and technique
('2024-01-29', '08:00:00', 2, 'Bench Press', 3, 8, NULL),
('2024-01-29', '08:15:00', 2, 'Barbell Squats', 3, 5, NULL),
('2024-01-31', '08:00:00', 2, 'Overhead Press', 3, 8, NULL),
('2024-01-31', '08:15:00', 2, 'Bent-over Rows', 3, 8, NULL);

-- User 3 (nono): Weight loss focus to 90kg, currently inactive (zero activity level)
-- Starting with light activities and progressing
INSERT INTO activities (date, time, user_id, activity_name, sets, repetitions, duration) VALUES
-- Week 1 - Starting light (walking and basic movements)
('2024-01-08', '07:00:00', 3, 'Morning Walk', NULL, NULL, 20),
('2024-01-09', '07:00:00', 3, 'Morning Walk', NULL, NULL, 25),
('2024-01-10', '18:30:00', 3, 'Evening Walk', NULL, NULL, 30),
('2024-01-11', '07:00:00', 3, 'Morning Walk', NULL, NULL, 25),
('2024-01-12', '18:30:00', 3, 'Evening Walk', NULL, NULL, 35),
('2024-01-13', '09:00:00', 3, 'Weekend Walk', NULL, NULL, 45),

-- Week 2 - Adding light strength training
('2024-01-15', '07:00:00', 3, 'Brisk Walk', NULL, NULL, 30),
('2024-01-15', '19:00:00', 3, 'Bodyweight Squats', 3, 10, NULL),
('2024-01-16', '07:00:00', 3, 'Morning Walk', NULL, NULL, 30),
('2024-01-16', '19:00:00', 3, 'Push-ups', 3, 8, NULL),
('2024-01-17', '18:30:00', 3, 'Evening Walk', NULL, NULL, 40),
('2024-01-18', '07:00:00', 3, 'Brisk Walk', NULL, NULL, 35),
('2024-01-18', '19:00:00', 3, 'Bodyweight Lunges', 3, 10, NULL),
('2024-01-19', '18:30:00', 3, 'Evening Walk', NULL, NULL, 45),
('2024-01-20', '09:00:00', 3, 'Park Walk', NULL, NULL, 60),

-- Week 3 - Increasing intensity and adding gym exercises
('2024-01-22', '07:00:00', 3, 'Brisk Walk', NULL, NULL, 40),
('2024-01-22', '19:00:00', 3, 'Treadmill', NULL, NULL, 20),
('2024-01-22', '19:25:00', 3, 'Machine Chest Press', 3, 12, NULL),
('2024-01-23', '07:00:00', 3, 'Morning Walk', NULL, NULL, 35),
('2024-01-23', '19:00:00', 3, 'Stationary Bike', NULL, NULL, 25),
('2024-01-23', '19:30:00', 3, 'Leg Press Machine', 3, 12, NULL),
('2024-01-24', '18:30:00', 3, 'Evening Walk', NULL, NULL, 50),
('2024-01-25', '19:00:00', 3, 'Treadmill', NULL, NULL, 25),
('2024-01-25', '19:30:00', 3, 'Lat Pulldown Machine', 3, 12, NULL),
('2024-01-26', '18:30:00', 3, 'Brisk Walk', NULL, NULL, 45),
('2024-01-27', '10:00:00', 3, 'Long Walk', NULL, NULL, 75),

-- Week 4 - Establishing consistent routine
('2024-01-29', '07:00:00', 3, 'Morning Walk', NULL, NULL, 40),
('2024-01-29', '19:00:00', 3, 'Treadmill', NULL, NULL, 30),
('2024-01-29', '19:35:00', 3, 'Machine Chest Press', 3, 15, NULL),
('2024-01-29', '19:50:00', 3, 'Seated Row Machine', 3, 15, NULL),
('2024-01-30', '07:00:00', 3, 'Brisk Walk', NULL, NULL, 35),
('2024-01-30', '19:00:00', 3, 'Stationary Bike', NULL, NULL, 30),
('2024-01-30', '19:35:00', 3, 'Leg Press Machine', 3, 15, NULL),
('2024-01-30', '19:50:00', 3, 'Leg Curl Machine', 3, 15, NULL),
('2024-01-31', '18:30:00', 3, 'Evening Power Walk', NULL, NULL, 55),
('2024-02-01', '19:00:00', 3, 'Treadmill Intervals', NULL, NULL, 35),
('2024-02-01', '19:40:00', 3, 'Shoulder Press Machine', 3, 15, NULL),
('2024-02-01', '19:55:00', 3, 'Tricep Pushdown', 3, 15, NULL),
('2024-02-02', '18:30:00', 3, 'Evening Walk', NULL, NULL, 50),
('2024-02-03', '10:00:00', 3, 'Hiking Trail Walk', NULL, NULL, 90);

-- Additional cardio sessions for User 3 to support weight loss
INSERT INTO activities (date, time, user_id, activity_name, sets, repetitions, duration) VALUES
('2024-02-05', '19:00:00', 3, 'Swimming', NULL, NULL, 30),
('2024-02-07', '19:00:00', 3, 'Elliptical Trainer', NULL, NULL, 35),
('2024-02-09', '18:00:00', 3, 'Cycling', NULL, NULL, 40),
('2024-02-12', '19:00:00', 3, 'Swimming', NULL, NULL, 35),
('2024-02-14', '19:00:00', 3, 'Elliptical Trainer', NULL, NULL, 40),
('2024-02-16', '17:30:00', 3, 'Cycling', NULL, NULL, 45);