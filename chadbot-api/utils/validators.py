import re
from datetime import datetime, date

def validate_password(password):
    """Validate password strength"""
    if len(password) < 8:
        return False, "Password must be at least 8 characters long"
    
    if not re.search(r"[A-Z]", password):
        return False, "Password must contain at least one uppercase letter"
    
    if not re.search(r"[a-z]", password):
        return False, "Password must contain at least one lowercase letter"
    
    if not re.search(r"\d", password):
        return False, "Password must contain at least one digit"
    
    if not re.search(r"[!@#$%^&*(),.?\":{}|<>]", password):
        return False, "Password must contain at least one special character"
    
    return True, None

def validate_username(username):
    """Validate username format"""
    if len(username) < 3:
        return False, "Username must be at least 3 characters long"
    
    if len(username) > 20:
        return False, "Username must be less than 20 characters"
    
    if not re.match(r"^[a-zA-Z0-9_]+$", username):
        return False, "Username can only contain letters, numbers, and underscores"
    
    return True, None

def validate_date_format(date_string):
    """Validate date format (YYYY-MM-DD)"""
    try:
        datetime.strptime(date_string, '%Y-%m-%d')
        return True, None
    except ValueError:
        return False, "Date must be in YYYY-MM-DD format"

def validate_datetime_format(datetime_string):
    """Validate datetime format (ISO format)"""
    try:
        datetime.fromisoformat(datetime_string.replace('Z', '+00:00'))
        return True, None
    except ValueError:
        return False, "Datetime must be in ISO format"

def validate_positive_number(value, field_name="Value"):
    """Validate positive number"""
    try:
        num = float(value)
        if num < 0:
            return False, f"{field_name} must be positive"
        return True, None
    except (ValueError, TypeError):
        return False, f"{field_name} must be a valid number"

def validate_integer(value, field_name="Value"):
    """Validate integer"""
    try:
        int(value)
        return True, None
    except (ValueError, TypeError):
        return False, f"{field_name} must be a valid integer"

def validate_required_fields(data, required_fields):
    """Validate required fields in data"""
    missing_fields = []
    for field in required_fields:
        if field not in data or data[field] is None or data[field] == "":
            missing_fields.append(field)
    
    if missing_fields:
        return False, f"Missing required fields: {', '.join(missing_fields)}"
    
    return True, None
