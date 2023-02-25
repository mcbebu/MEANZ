import sqlite3

connection = sqlite3.connect('database.db')


driverFeedback_lst = [(1,3,2,"Ninja1 was very good",1,1),
(2,1,1,"",3,0),
(3,1,1,"Ninja3 was very good",0,1),
(4,2,1,"",3,1),
(5,3,1,"Ninja5 was very good",2,0),
(6,4,2,"",3,1),
(7,5,3,"Ninja7 was very good",0,1),
(8,2,2,"",5,0),
(9,3,1,"Ninja9 was very good",3,1),
(10,6,5,"",3,0)]

drivers_lst = [(1,"Ninja1",0),
(2,"Ninja2",0),
(3,"Ninja3",0),(4,"Ninja4",0),
(5,"Ninja5",0),
(6,"Ninja6",0),
(7,"Ninja7",0),
(8,"Ninja8",0),
(9,"Ninja9",0),
(10,"Ninja10",0)]

with open('schema.sql') as f:
    connection.executescript(f.read())

cur = connection.cursor()

cur.executemany("INSERT INTO drivers VALUES (?, ?, ?)",
            drivers_lst
            )

cur.executemany("INSERT INTO driverFeedback VALUES (?, ?, ?, ?, ?, ?)",
            driverFeedback_lst
            )

connection.commit()
connection.close()
