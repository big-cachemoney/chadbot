INSERT INTO activities (date, time, user_id, activity_name, sets, repetitions, duration) VALUES
-- Chest & Triceps Days
('2024-09-20', '08:30:00', 1, 'bench-press', 4, 10, NULL),
('2024-09-20', '08:45:00', 1, 'incline-press', 3, 12, NULL),
('2024-09-20', '09:00:00', 1, 'tricep-extensions', 3, 15, NULL),
('2024-09-20', '09:10:00', 1, 'push-ups', 3, 20, NULL),

('2024-09-17', '07:15:00', 1, 'dumbbell-press', 4, 10, NULL),
('2024-09-17', '07:30:00', 1, 'cable-flyes', 3, 12, NULL),
('2024-09-17', '07:45:00', 1, 'tricep-pushdown', 3, 15, NULL),

-- Back & Biceps Days
('2024-09-19', '17:45:00', 1, 'deadlifts', 4, 8, NULL),
('2024-09-19', '18:00:00', 1, 'lat-pulldowns', 3, 12, NULL),
('2024-09-19', '18:15:00', 1, 'bicep-curls', 3, 15, NULL),
('2024-09-19', '18:25:00', 1, 'seated-rows', 3, 12, NULL),

('2024-09-14', '08:00:00', 1, 'pull-ups', 3, 10, NULL),
('2024-09-14', '08:15:00', 1, 'barbell-rows', 4, 10, NULL),
('2024-09-14', '08:30:00', 1, 'hammer-curls', 3, 12, NULL),

-- Leg Days
('2024-09-18', '16:30:00', 1, 'squats', 4, 8, NULL),
('2024-09-18', '16:45:00', 1, 'leg-press', 3, 12, NULL),
('2024-09-18', '17:00:00', 1, 'lunges', 3, 10, NULL),
('2024-09-18', '17:10:00', 1, 'leg-extensions', 3, 15, NULL),

('2024-09-11', '07:30:00', 1, 'deadlifts', 4, 6, NULL),
('2024-09-11', '07:45:00', 1, 'leg-curls', 3, 12, NULL),
('2024-09-11', '08:00:00', 1, 'calf-raises', 4, 20, NULL),

-- Shoulder Days
('2024-09-16', '17:00:00', 1, 'overhead-press', 4, 10, NULL),
('2024-09-16', '17:15:00', 1, 'lateral-raises', 3, 15, NULL),
('2024-09-16', '17:25:00', 1, 'front-raises', 3, 12, NULL),

-- Cardio Days
('2024-09-15', '08:00:00', 1, 'treadmill', NULL, NULL, 1800),
('2024-09-15', '08:30:00', 1, 'jumping-jacks', NULL, NULL, 300),
('2024-09-12', '17:45:00', 1, 'stationary-bike', NULL, NULL, 1500),
('2024-09-12', '18:10:00', 1, 'burpees', 3, 10, NULL),

-- Core/Ab Days
('2024-09-13', '07:00:00', 1, 'plank', NULL, NULL, 180),
('2024-09-13', '07:05:00', 1, 'russian-twists', 3, 20, NULL),
('2024-09-13', '07:15:00', 1, 'leg-raises', 3, 15, NULL),

-- Rest Days (no activities on these days)
-- 2024-09-10, 2024-09-07, 2024-09-04, etc.

-- Continuing the pattern for 100 days (showing more examples)
('2024-09-06', '08:30:00', 1, 'bench-press', 4, 8, NULL),
('2024-09-06', '08:45:00', 1, 'dips', 3, 12, NULL),

('2024-09-05', '17:30:00', 1, 'bent-over-rows', 4, 10, NULL),
('2024-09-05', '17:45:00', 1, 'face-pulls', 3, 15, NULL),

('2024-09-03', '07:15:00', 1, 'squats', 5, 5, NULL),
('2024-09-03', '07:30:00', 1, 'bulgarian-split-squats', 3, 10, NULL),

('2024-09-02', '16:00:00', 1, 'shoulder-press', 4, 10, NULL),
('2024-09-02', '16:15:00', 1, 'upright-rows', 3, 12, NULL),

('2024-08-30', '08:00:00', 1, 'incline-bench', 4, 10, NULL),
('2024-08-30', '08:15:00', 1, 'skull-crushers', 3, 12, NULL),

-- More entries to cover 100 days...
('2024-08-29', '17:45:00', 1, 'pull-ups', 4, 8, NULL),
('2024-08-29', '18:00:00', 1, 't-bar-rows', 3, 10, NULL),

('2024-08-28', '07:30:00', 1, 'leg-press', 4, 12, NULL),
('2024-08-28', '07:45:00', 1, 'walking-lunges', 3, 10, NULL),

('2024-08-27', '16:30:00', 1, 'arnold-press', 3, 12, NULL),
('2024-08-27', '16:45:00', 1, 'rear-delt-flyes', 3, 15, NULL),

('2024-08-26', '08:15:00', 1, 'elliptical', NULL, NULL, 1200),
('2024-08-26', '08:35:00', 1, 'mountain-climbers', NULL, NULL, 240),

-- Continue this pattern with proper body part grouping and rest days
-- Approximately 3-4 workout days per week, 1-2 cardio days, 2-3 rest days

('2024-08-23', '17:00:00', 1, 'close-grip-bench', 4, 10, NULL),
('2024-08-23', '17:15:00', 1, 'cable-crossovers', 3, 12, NULL),

('2024-08-22', '07:45:00', 1, 'rack-pulls', 4, 6, NULL),
('2024-08-22', '08:00:00', 1, 'lat-pulldowns', 3, 10, NULL),

('2024-08-21', '16:00:00', 1, 'hack-squats', 4, 8, NULL),
('2024-08-21', '16:15:00', 1, 'good-mornings', 3, 12, NULL);