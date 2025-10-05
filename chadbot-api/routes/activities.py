from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models.activity import Activity
from utils.db import db

activities_bp = Blueprint('activities', __name__)

@activities_bp.route('/', methods=['GET'])
@jwt_required()
def get_activities():
    """Get user's activities"""
    try:
        user_id = get_jwt_identity()
        page = request.args.get('page', 1, type=int)
        per_page = request.args.get('per_page', 20, type=int)
        search = request.args.get('search')
        
        query = Activity.query.filter_by(user_id=user_id)
        
        # Apply search filter
        if search:
            query = query.filter(Activity.name.ilike(f'%{search}%'))
        
        activities = query.order_by(Activity.created_at.desc()).paginate(
            page=page, per_page=per_page, error_out=False
        )
        
        return jsonify({
            'activities': [activity.to_dict() for activity in activities.items],
            'total': activities.total,
            'pages': activities.pages,
            'current_page': page
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@activities_bp.route('/<int:activity_id>', methods=['GET'])
@jwt_required()
def get_activity(activity_id):
    """Get specific activity"""
    try:
        user_id = get_jwt_identity()
        activity = Activity.query.filter_by(id=activity_id, user_id=user_id).first()
        
        if not activity:
            return jsonify({'error': 'Activity not found'}), 404
        
        return jsonify({
            'activity': activity.to_dict()
        }), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@activities_bp.route('/', methods=['POST'])
@jwt_required()
def create_activity():
    """Create new activity"""
    try:
        user_id = get_jwt_identity()
        data = request.get_json()
        
        if not data or not data.get('name'):
            return jsonify({'error': 'Name is required'}), 400
        
        activity = Activity()
        activity.user_id = user_id
        activity.name = data['name']
        
        # Optional fields
        if 'sets' in data:
            activity.sets = data['sets']
        if 'reps' in data:
            activity.reps = data['reps']
        if 'weight' in data:
            activity.weight = data['weight']
        if 'duration' in data:
            activity.duration = data['duration']
        if 'notes' in data:
            activity.notes = data['notes']
        
        db.session.add(activity)
        db.session.commit()
        
        return jsonify({
            'message': 'Activity created successfully',
            'activity': activity.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@activities_bp.route('/<int:activity_id>', methods=['PUT'])
@jwt_required()
def update_activity(activity_id):
    """Update activity"""
    try:
        user_id = get_jwt_identity()
        activity = Activity.query.filter_by(id=activity_id, user_id=user_id).first()
        
        if not activity:
            return jsonify({'error': 'Activity not found'}), 404
        
        data = request.get_json()
        
        # Update allowed fields
        allowed_fields = ['name', 'sets', 'reps', 'weight', 'duration', 'notes']
        for field in allowed_fields:
            if field in data:
                setattr(activity, field, data[field])
        
        db.session.commit()
        
        return jsonify({
            'message': 'Activity updated successfully',
            'activity': activity.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@activities_bp.route('/<int:activity_id>', methods=['DELETE'])
@jwt_required()
def delete_activity(activity_id):
    """Delete activity"""
    try:
        user_id = get_jwt_identity()
        activity = Activity.query.filter_by(id=activity_id, user_id=user_id).first()
        
        if not activity:
            return jsonify({'error': 'Activity not found'}), 404
        
        db.session.delete(activity)
        db.session.commit()
        
        return jsonify({
            'message': 'Activity deleted successfully'
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
