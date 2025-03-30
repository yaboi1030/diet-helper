from flask import Flask, render_template

app = Flask(__name__, template_folder=".")

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/handling images')
def handling_images():
    return render_template('handling_images.html')

if __name__ == '__main__':
    app.run(debug=True)
