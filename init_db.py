import sqlite3

connection = sqlite3.connect('database.db')


driverFeedback_lst = [(1,3,"Ninja1 was very good",1),
(2,1,"",3),
(3,1,"Ninja3 was very good",0),
(4,1,"",3),
(5,1,"Ninja5 was very good",2),
(6,2,"",3),
(7,3,"Ninja7 was very good",0),
(8,2,"",5),
(9,1,"Ninja9 was very good",3),
(10,5,"",3)]

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

cur.executemany("INSERT INTO driverFeedback VALUES (?, ?, ?, ?)",
            driverFeedback_lst
            )

cur.executemany("INSERT INTO drivers VALUES (?, ?, ?)",
            drivers_lst
            )

connection.commit()
connection.close()
