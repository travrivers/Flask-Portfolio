from flask import Flask
from flask import render_template

app = Flask(__name__)

app.debug = True

@app.route('/')
def home():
    return render_template('hello.html')

@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html')

@app.route('/dogs')
def dogs():
    return render_template('dogs.html')

@app.route('/games')
def games():
    return render_template('games.html')


