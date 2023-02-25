from flask import Flask,request
import sqlite3


app = Flask(__name__)

def get_db_connection():
    conn = sqlite3.connect('database.db')
    conn.row_factory = sqlite3.Row
    return conn


@app.route("/feedback", methods = ["GET"])
def feedback():
    ## render template for form
    return "<h1> Feedback page <h1>"

@app.route("/submitted_feedback", methods = ["POST"])
def submitted_feedbac():
    REWARD_POINTS = 10
    ## update points also
    # order_id = request.form.get('order_id')
    # driver_id = request.form.get('driver_id')
    # rating = request.form.get('rating')
    # feedback = request.form.get('feedback')
    # tips = request.form.get('tips',0)
    # within_time = request.form.get('within_time', 0)
    order_id = request.args.get('order_id')
    driver_id = request.args.get('driver_id')
    rating = request.args.get('rating')
    feedback = request.args.get('feedback')
    tips = request.args.get('tips',0)
    within_time = request.args.get('within_time', 0)

    print(order_id,driver_id,rating,feedback,tips,within_time)    
    points = 0
    if within_time:
        points += REWARD_POINTS

    conn = sqlite3.connect('database.db')
    cur = conn.cursor()
    insertion_query = '''INSERT INTO driverFeedback(order_id, driver_id, rating, feedback, tips, within_time) 
                         VALUES (?,?,?,?,?,?)'''
    row = (order_id,driver_id,rating,feedback,tips,within_time)
    cur.execute(insertion_query, row)

    if points:
        records = conn.execute(f'SELECT points from drivers WHERE {driver_id}= driver_id;').fetchall()
        print(records)
        points += records[0][0]
        conn.execute(f'UPDATE drivers set points = {points} where driver_id = {driver_id};')
    
    conn.commit()
    conn.close()
    return "<h1> You have successfully submitted your feedback <h1>"

@app.route("/",methods = ["GET"])
def hello_world():
    conn = get_db_connection()
    drivers = conn.execute('SELECT * FROM driverFeedback').fetchall()
    conn.close()
    display = []
    for row in drivers:
        within_time = "Yes" if row['within_time'] != 0 else "No"
        display.append(f"<h1>{(row['order_id'],row['rating'],row['feedback'],row['tips'], within_time)}<h1>")
    return "".join(display)

