DROP TABLE IF EXISTS driverFeedback;
DROP TABLE IF EXISTS drivers;

CREATE TABLE driverFeedback (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    rating INTEGER NOT NULL DEFAULT 0,
    feedback TEXT,
    tips INTEGER DEFAULT 0
);

CREATE TABLE drivers (
    driver_id INTEGER PRIMARY KEY AUTOINCREMENT,
    driver_name TEXT NOT NULL,
    points INTEGER NOT NULL DEFAULT 0
);
