from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')
    
    # Print the login credentials to the terminal
    print(f"Login attempt - Email: {email}, Password: {password}")

    # Simulate success or failure response
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
