from functools import wraps
from flask import request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.user import User

def admin_required(f):
    """Decorator to require admin privileges"""
    @wraps(f)
    @jwt_required()
    def decorated_function(*args, **kwargs):
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user or not user.is_admin:
            return jsonify({'error': 'Admin privileges required'}), 403
        
        return f(*args, **kwargs)
    return decorated_function

def user_required(f):
    """Decorator to require user authentication"""
    @wraps(f)
    @jwt_required()
    def decorated_function(*args, **kwargs):
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        
        if not user:
            return jsonify({'error': 'User authentication required'}), 401
        
        return f(*args, **kwargs)
    return decorated_function

def validate_json(f):
    """Decorator to validate JSON request"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not request.is_json:
            return jsonify({'error': 'Request must be JSON'}), 400
        
        return f(*args, **kwargs)
    return decorated_function

def rate_limit(max_requests=100, window=3600):
    """Simple rate limiting decorator"""
    from collections import defaultdict, deque
    import time
    
    requests = defaultdict(deque)
    
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            client_ip = request.remote_addr
            current_time = time.time()
            
            # Clean old requests
            while requests[client_ip] and requests[client_ip][0] <= current_time - window:
                requests[client_ip].popleft()
            
            # Check rate limit
            if len(requests[client_ip]) >= max_requests:
                return jsonify({'error': 'Rate limit exceeded'}), 429
            
            # Add current request
            requests[client_ip].append(current_time)
            
            return f(*args, **kwargs)
        return decorated_function
    return decorator
