#!/usr/bin/env python3
"""
Seed script to populate the database with initial data
"""
from app import app, db
from models.user import User
from models.activity import Activity
from datetime import datetime

def seed_sample_activities():
    """Seed the database with sample activities for admin user"""
    # Get admin user
    admin = User.query.filter_by(username='admin').first()
    if not admin:
        print("Admin user not found. Please create admin user first.")
        return
    
    activities_data = [
        {
            'user_id': admin.id,
            'name': 'Push-ups',
            'sets': 3,
            'reps': 15,
            'weight': None,
            'duration': None,
            'notes': 'Classic bodyweight exercise for chest, shoulders, and triceps'
        },
        {
            'user_id': admin.id,
            'name': 'Squats',
            'sets': 3,
            'reps': 20,
            'weight': None,
            'duration': None,
            'notes': 'Fundamental lower body exercise'
        },
        {
            'user_id': admin.id,
            'name': 'Running',
            'sets': None,
            'reps': None,
            'weight': None,
            'duration': 30,
            'notes': '30-minute cardio session'
        },
        {
            'user_id': admin.id,
            'name': 'Plank',
            'sets': 3,
            'reps': None,
            'weight': None,
            'duration': 60,
            'notes': 'Hold for 60 seconds each set'
        },
        {
            'user_id': admin.id,
            'name': 'Deadlift',
            'sets': 4,
            'reps': 8,
            'weight': 60.0,
            'duration': None,
            'notes': 'Compound strength exercise with 60kg barbell'
        }
    ]
    
    for activity_data in activities_data:
        # Check if activity already exists for this user
        existing_activity = Activity.query.filter_by(
            name=activity_data['name'], 
            user_id=admin.id
        ).first()
        if not existing_activity:
            activity = Activity.from_dict(activity_data)
            db.session.add(activity)
            print(f"Added activity: {activity_data['name']}")
        else:
            print(f"Activity already exists: {activity_data['name']}")
    
    db.session.commit()
    print("Sample activities seeded successfully!")

def seed_admin_user():
    """Create an admin user"""
    admin_data = {
        'username': 'admin',
        'password': 'AdminPass123!'
    }
    
    # Check if admin already exists
    existing_admin = User.query.filter_by(username='admin').first()
    if not existing_admin:
        admin = User()
        admin.username = admin_data['username']
        admin.set_password(admin_data['password'])
        
        db.session.add(admin)
        db.session.commit()
        print("Admin user created successfully!")
    else:
        print("Admin user already exists!")

if __name__ == '__main__':
    with app.app_context():
        print("Starting database seeding...")
        
        # Create tables
        db.create_all()
        print("Database tables created!")
        
        # Seed data
        seed_admin_user()
        seed_sample_activities()
        
        print("Database seeding completed!")
