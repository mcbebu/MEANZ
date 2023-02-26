# Team MEANZ presents...

<h1 align = "center"> <img src="https://user-images.githubusercontent.com/64476154/221387483-ee48e2dd-6abe-48ef-8d84-31f1844fcb19.png" weight=100px height = 100px>  Rewards for Ryos </h1>

## The Issue:
- How might we encourage our drivers to **increase their work performance** by providing on-time deliveries? 
- How might we make it **more convenient** for our consignees to show appreciation to our drivers for a delightful delivery experience?
- How might we find **new homes for returned parcels** still in good condition (that would otherwise take up space in warehouses)?

## Our Idea:
We want to improve the experience for both customers and drivers:
- customers:
  - greater convenience to tip
- drivers:
  - earn points for delivering parcels within the designated time frame
  - also earn points for receiving good ratings
  - can exchange points for returned parcels 
  - incentivised and encouraged to perform better
  
## Our Solution:
For the customers: a webpage to provide feedback in an easy way.

For the drivers: a webpage to track their points and exchange them for rewards.

## How to run our solution:

To run UserPOV.py flask app: 

1. run the following code to initialize the database

`python init_db.py`

2. run the following code to run the app 

For Windows CMD:

```
set FLASK_APP=UserPOV
flask run
```

For Windows PowerShell:

```
$env:FLASK_APP="UserPOV"
flask run
```

Others:

```
export FLASK_APP=UserPOV
flask run
```
