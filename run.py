import subprocess
import os

def run_backend():
    # Assuming your Flask app is named app.py and is located in the backend directory
    subprocess.Popen(["python", "backend/app.py"])

def run_frontend():
    # Change to the frontend directory and run npm start
    os.chdir("frontend")
    subprocess.Popen(["npm", "start"])

if __name__ == "__main__":
    run_backend()
    run_frontend()
