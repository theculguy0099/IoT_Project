from flask import Flask, render_template, request, redirect, url_for
import sqlite3

class DBclass:
    def __init__(self, path):
        self.path = path
        self.db = sqlite3.connect(self.path, check_same_thread=False)
        self.cur = self.db.cursor()
    def execute(self, query):
        self.cur.execute(query)
        return self.cur.fetchall()

db = DBclass('wheelchair.db')

app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('home.html')

if __name__ == "__main__":
    app.run(debug=True)
