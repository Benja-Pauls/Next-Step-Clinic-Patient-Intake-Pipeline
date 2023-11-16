import subprocess
import os

def run_backend():
    # Assuming your Flask app is named app.py and is located in the backend directory
    subprocess.Popen(["python", "backend/app.py"])

def run_frontend():
    # Change the working directory to the "frontend" directory
    frontend_dir = os.path.join(os.path.dirname(__file__), 'frontend')
    os.chdir(frontend_dir)

    # Run npm start from the "frontend" directory
    subprocess.Popen(["npm", "start"])

if __name__ == "__main__":
    run_backend()
    run_frontend()
