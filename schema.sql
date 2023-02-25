DROP TABLE IF EXISTS driverFeedback;
DROP TABLE IF EXISTS drivers;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS rejected_orders;
PRAGMA foreign_keys = ON;


CREATE TABLE drivers (
    driver_id INTEGER PRIMARY KEY AUTOINCREMENT,
    driver_name TEXT NOT NULL,
    points INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE driverFeedback (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    driver_id INTEGER NOT NULL,
    rating INTEGER ,
    feedback TEXT,
    tips INTEGER DEFAULT 0, 
    within_time INTEGER DEFAULT 0,
    FOREIGN KEY (driver_id)
        REFERENCES drivers(driver_id)
);


CREATE TABLE orders (
    order_id INTEGER PRIMARY KEY,
    driver_id INTEGER NOT NULL,
    timeslot_start DATETIME NOT NULL,
    timeslot_end DATETIME NOT NULL,
    attempted_time DATETIME NOT NULL,
    FOREIGN KEY (driver_id)
        REFERENCES drivers(driver_id)
);

CREATE TABLE rejected_orders(
    item_name TEXT NOT NULL,
    points INTEGER NOT NULL
);