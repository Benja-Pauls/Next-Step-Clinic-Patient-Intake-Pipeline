from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/send-message', methods=['POST'])
def send_message():
    if request.method == 'POST':
        data = request.json  # Get the JSON data sent from the front-end
        user_message = data.get('message')  # Extract the user's message from the JSON data
        print(user_message)
        # Process the user's message (You can perform any processing or logic here)
        # For now, let's just echo back the user's message as a response
        bot_response = f'You said: {user_message}'

        # Return the bot's response as JSON
        return jsonify({'reply': bot_response})
    else:
        return jsonify({'error': 'Invalid request'})

if __name__ == '__main__':
    app.run(debug=True)
