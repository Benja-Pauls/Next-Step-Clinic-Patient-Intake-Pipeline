from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/example', methods=['GET', 'POST'])
def example_route():
    if request.method == 'POST':
        data = request.json
        # Process data
        return jsonify({'response': 'Processed data'})
    else:
        return jsonify({'response': 'Example GET response'})

if __name__ == '__main__':
    app.run(debug=True)
