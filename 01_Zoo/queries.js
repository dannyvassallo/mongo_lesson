/* 18.2 Queries -  INSERTIN ANIMALS and Introduce Sorting Results by a field.
 * ===================================================== */

// A) An example of animals you can insert into the zoo db
// =================================================================

use zoo
db.animals.insert({"name":"Panda", "numlegs":4, "class":"mammal", "weight": 254, "whatIWouldReallyCallIt":"Captain Fuzzy Face"})
db.animals.insert({"name":"Dog", "numlegs":4, "class":"mammal", "weight": 60, "whatIWouldReallyCallIt":"Captain Fuzzy Face II"})
db.animals.insert({"name":"Lion", "numlegs":4, "class":"mammal", "weight": 300, "whatIWouldReallyCallIt":"Grumbles"})
db.animals.insert({"name":"Zebra", "numlegs":4, "class":"mammal", "weight": 500, "whatIWouldReallyCallIt":"Stripes"})
db.animals.insert({"name":"Chameleon", "numlegs":4, "class":"Reptile", "weight": 5, "whatIWouldReallyCallIt":"Scales"})



// B) Sorting results by field name
// ================================

// The format of a sort follows db.COLLECTION_NAME.find().sort({FIELD:1})
// A value of 1 is for ascending order

// A value of -1 is for descending order

// In the mongo shell, using the animals collection that you created in 18.2.2:
// NOTE: Remember to add .pretty() afterwards so the results are readable!


// 1. Show them how to sort by id
// The id contains a timestamp, so sorting by id will sort by when they were entered to the database
db.animals.find().sort({_id:1})
db.animals.find().sort({_id:-1})

// 2. Show them how to sort by an integer - numlegs:
db.animals.find().sort({numlegs:1})
db.animals.find().sort({numlegs:-1})


// 3. Show them how to sort by a string - class:
db.animals.find().sort({class:1})
db.animals.find().sort({class:-1})
