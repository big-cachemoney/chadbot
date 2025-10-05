import os
import uuid
from datetime import datetime
from werkzeug.utils import secure_filename

def allowed_file(filename, allowed_extensions):
    """Check if file extension is allowed"""
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in allowed_extensions

def generate_unique_filename(filename):
    """Generate unique filename"""
    name, ext = os.path.splitext(secure_filename(filename))
    unique_id = str(uuid.uuid4())[:8]
    return f"{name}_{unique_id}{ext}"

def format_datetime(dt):
    """Format datetime to ISO string"""
    if dt is None:
        return None
    return dt.isoformat()

def parse_datetime(dt_string):
    """Parse ISO datetime string"""
    if not dt_string:
        return None
    try:
        return datetime.fromisoformat(dt_string.replace('Z', '+00:00'))
    except ValueError:
        return None

def calculate_age(birth_date):
    """Calculate age from birth date"""
    if not birth_date:
        return None
    
    today = date.today()
    return today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))

def calculate_bmi(weight, height):
    """Calculate BMI from weight (kg) and height (cm)"""
    if not weight or not height:
        return None
    
    height_m = height / 100
    return round(weight / (height_m ** 2), 2)

def paginate_query(query, page, per_page):
    """Paginate SQLAlchemy query"""
    return query.paginate(
        page=page, 
        per_page=per_page, 
        error_out=False
    )

def create_response(data=None, message=None, status_code=200):
    """Create standardized API response"""
    response = {}
    
    if message:
        response['message'] = message
    
    if data is not None:
        if isinstance(data, list):
            response['data'] = data
        elif isinstance(data, dict):
            response.update(data)
        else:
            response['data'] = data
    
    return response

def handle_database_error(error):
    """Handle database errors"""
    if "UNIQUE constraint failed" in str(error):
        return "Resource already exists", 409
    elif "FOREIGN KEY constraint failed" in str(error):
        return "Referenced resource not found", 400
    elif "NOT NULL constraint failed" in str(error):
        return "Required field is missing", 400
    else:
        return "Database error occurred", 500

def validate_file_size(file, max_size_mb=16):
    """Validate file size"""
    if file:
        file.seek(0, 2)  # Seek to end
        size = file.tell()
        file.seek(0)  # Reset to beginning
        
        max_size_bytes = max_size_mb * 1024 * 1024
        if size > max_size_bytes:
            return False, f"File size exceeds {max_size_mb}MB limit"
    
    return True, None
