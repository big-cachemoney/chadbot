def get_last_activities(username: str):
    """
    :param username:
    :return:
    Latest 15 activities for reference
    """
    query = f"""
    SELECT u.user_name, a.date, a.time, a.activity_name, a.sets, a.repetitions, a.duration, a.sets, a.repetitions, a.duration
    FROM activities a left join users u on a.user_id = u.id
    WHERE u.user_name = '{username}'
    ORDER BY date DESC
    LIMIT 15
            """
    return query

def get_user_info(username: str):
    """
    :param username:
    :return:
    get username info
    """
    query = f"""
    SELECT u.user_name, u.height, u.weight, u.age, u.gender, u.goal, u.activity_level  
    FROM users u
    WHERE u.user_name = '{username}'
            """
    return query


def get_chad_personality(username: str):
    """
    :param username:
    :return:
    get chad personality
    """
    query = f"""
    SELECT u.chad_personality  
    FROM users u
    WHERE u.user_name = '{username}'
            """
    return query

