# MEANZ

To run UserPOV.py flask app: 
1.run the following code to initialize the database
python init_db.py

2.to run the app run the following code
For Windows CMD:
set FLASK_APP=UserPOV
flask run

For Windows PowerShell:
$env:FLASK_APP="UserPOV"
flask run

Others:
export FLASK_APP=UserPOV
flask run
