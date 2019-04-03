from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route('/')
def landing():
    return render_template('landing.html')

@app.route('/home')
def home():
    return render_template('hello.html')

@app.route('/aboutme')
def aboutme():
    return render_template('aboutme.html')

@app.route('/dogs')
def dogs():
    return render_template('dogs.html')

@app.route('/things')
def things():
    return render_template('things.html')

@app.route('/apps')
def games():
    return render_template('apps.html')

@app.route('/colorguesser')
def colorguesser():
    return render_template('colorguesser.html')

@app.route('/circles')
def circles():
    return render_template('circles.html')

@app.route('/fancytodo')
def fancytodo():
    return render_template('fancytodo.html')

if __name__ == '__main__':
    app.run(debug=True) 
