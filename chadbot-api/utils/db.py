from flask_sqlalchemy import SQLAlchemy

# Create the SQLAlchemy object (no app yet)
db = SQLAlchemy()


def init_db(app):
    """Bind SQLAlchemy to the Flask app."""
    db.init_app(app)
    with app.app_context():
        db.create_all()