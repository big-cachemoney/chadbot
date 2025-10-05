from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
from utils.db import db

class User(db.Model):
    """User model for authentication and profile management"""
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    user_name = db.Column(db.String(80), unique=True, nullable=False, index=True)
    password_hash = db.Column(db.String(255), nullable=False)
    height = db.Column(db.Float, nullable=True)  # in cm
    weight = db.Column(db.Float, nullable=True)  # in kg
    age = db.Column(db.Integer, nullable=True)
    gender = db.Column(db.String(10), nullable=True)  # 'male', 'female', 'other'
    goal = db.Column(db.Text, nullable=True)  # fitness goal description
    chad_personality = db.Column(db.String(50), nullable=True)  # type of trainer personality
    activity_level = db.Column(db.String(20), nullable=True)  # 'beginner', 'intermediate', 'advanced'
    
    # Relationships
    activities = db.relationship('Activity', backref='user', lazy='dynamic', cascade='all, delete-orphan')
    
    def __repr__(self):
        return f'<User {self.user_name}>'
    
    def set_password(self, password):
        """Hash and set password"""
        self.password_hash = generate_password_hash(password)
    
    def check_password(self, password):
        """Check if provided password matches hash"""
        return check_password_hash(self.password_hash, password)
    
    def to_dict(self):
        """Convert user to dictionary"""
        return {
            'id': self.id,
            'user_name': self.user_name,
            'height': self.height,
            'weight': self.weight,
            'age': self.age,
            'gender': self.gender,
            'goal': self.goal,
            'chad_personality': self.chad_personality,
            'activity_level': self.activity_level,
        }
    
    @staticmethod
    def from_dict(data):
        """Create user from dictionary"""
        user = User()
        for field in ['use_name', 'height', 'weight', 'age', 'gender', 'goal', 'chad_personality', 'activity_level']:
            if field in data:
                setattr(user, field, data[field])
        return user
