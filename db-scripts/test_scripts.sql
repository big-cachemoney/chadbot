SELECT u.user_name,
       a.date,
       a.time,
       a.activity_name,
       a.sets,
       a.repetitions,
       a.duration,
       a.sets,
       a.repetitions,
       a.duration
FROM activities a
         left join users u on a.user_id = u.id
WHERE u.user_name = 'nono'
ORDER BY date DESC
LIMIT 15