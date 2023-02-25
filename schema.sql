DROP TABLE IF EXISTS driverFeedback;
DROP TABLE IF EXISTS drivers;

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


