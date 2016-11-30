var mongojs = require('mongojs');
var databaseUrl = "zoo";
var collections = ["animals"];
var db = mongojs(databaseUrl, collections);

db.animals.insert({"name":"Panda", "numlegs":4, "class":"mammal", "weight": 254, "whatIWouldReallyCallIt":"Captain Fuzzy Face"})
db.animals.insert({"name":"Dog", "numlegs":4, "class":"mammal", "weight": 60, "whatIWouldReallyCallIt":"Captain Fuzzy Face II"})
db.animals.insert({"name":"Lion", "numlegs":4, "class":"mammal", "weight": 300, "whatIWouldReallyCallIt":"Grumbles"})
db.animals.insert({"name":"Zebra", "numlegs":4, "class":"mammal", "weight": 500, "whatIWouldReallyCallIt":"Stripes"})
db.animals.insert({"name":"Chameleon", "numlegs":4, "class":"Reptile", "weight": 5, "whatIWouldReallyCallIt":"Scales"})

db.close();
