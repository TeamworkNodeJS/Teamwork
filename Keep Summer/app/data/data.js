// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// // const connectionString = 'mongodb://localhost:27017/summer';
// const connectionString = 'mongodb://Admin:admin@ds143532.mlab.com:43532/summer';

//     MongoClient.connect(connectionString)
//     .then((db) => {
//         console.log('MongoDB running');
//         const collectionName = 'publishers';
//         db.collection(collectionName)
//         .find({
//             'name': 'Nadine Sykora',
//         })
//         .toArray()
//         .then((result) => {
//             console.log(result);
//         });

//         db.close();
//     })
//     .catch((error) => {
//         console.log(error);
//     });

