//CREACON DE LA COLEECION E INGRESO DE REGISTROS
//insertmany

/*const { MongoClient } = require('mongodb');
const {faker} = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

// Función para generar un número de teléfono aleatorio
function generatePhoneNumber() {
    let phoneNumber = '0';
    for (let i = 0; i < 9; i++) {
      phoneNumber += Math.floor(Math.random() * 10);
    }
    return phoneNumber;
  }

async function createClientsCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    await db.createCollection('clientes', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'Cliente',
          required: ['nombre', 'apellido', 'telefono', 'direccion', 'correo'],
          properties: {
            nombre: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            apellido: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            telefono: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
              pattern: '^\\d{10}$',
            },
            direccion: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            correo: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
              pattern: '^\\S+@\\S+\\.\\S+$',
            },
          },
        },
      },
    });

    console.log("La colección 'clientes' ha sido creada correctamente.");

    const collection = db.collection('clientes');
    const datos = [];

    for (let i = 0; i < 1999; i++) {

        const nombre = faker.person.firstName();
        const apellido = faker.person.lastName();
        const telefono = generatePhoneNumber();
        const direccion = faker.location.streetAddress();
        const correo = faker.internet.email();

      const cliente = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
        direccion: direccion,
        correo: correo,
      };

      datos.push(cliente);
    }

    const result = await collection.insertMany(datos);
    console.log(`Se han insertado: ${result.insertedCount} datos`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

createClientsCollection();*/



//INSERTONE

/*const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

// Función para generar un número de teléfono aleatorio
function generatePhoneNumber() {
  let phoneNumber = '0';
  for (let i = 0; i < 9; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  return phoneNumber;
}

async function insertSingleClient() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const nombre = faker.person.firstName();
    const apellido = faker.person.lastName();
    const telefono = generatePhoneNumber();
    const direccion = faker.location.streetAddress();
    const correo = faker.internet.email();

    const cliente = {
      nombre: nombre,
      apellido: apellido,
      telefono: telefono,
      direccion: direccion,
      correo: correo,
    };

    const result = await collection.insertOne(cliente);
    console.log(`Se ha insertado el siguiente registro: ${result.insertedId}`);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

insertSingleClient();*/



//METODO FIND PARA HACER BUSQUEDAS DE DATOS QUE CUMPLA CON LA DESCRIPCION 

/*const { MongoClient } = require('mongodb');
const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function searchClientsByLastName(lastName) {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const searchQuery = {
      apellido: lastName
    };

    const searchResult = await collection.find(searchQuery).toArray();
    console.log('Resultados de la búsqueda:');
    console.log(searchResult);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
searchClientsByLastName('Will'); */ // Ejemplo de búsqueda con el apellido "Smith"

//METODO FINDONE PARA HACER UNA BUSQUEDA DE UN SOLO ELEMENTO EN ESPECIFICO


/*const { MongoClient } = require('mongodb');
const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function searchClientByLastName(lastName) {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const searchQuery = {
      apellido: lastName
    };

    const searchResult = await collection.findOne(searchQuery);
    console.log('Resultado de la búsqueda:');
    console.log(searchResult);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

searchClientByLastName('Smith');*/ // Ejemplo de búsqueda con el apellido "Smith"

//UPDATEONE


/*const { MongoClient, ObjectId } = require('mongodb');
const { faker } = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function updateClientById() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const filtro = { _id: new ObjectId("6466f111d80279c601a1bc1c") }; // Filtro para seleccionar el registro por su ID

    const updateDoc = {
      $set: {
        nombre: 'mario', // Cambiar el campo 'nombre' con el nuevo valor
        apellido: 'gomez', // Cambiar el campo 'apellido' con el nuevo valor
      },
    };

    const options = {
      returnOriginal: false, // Obtener el documento después de la actualización
    };

    const result = await collection.findOneAndUpdate(filtro, updateDoc, options);

    if (result.value) {
      console.log('El siguiente registro ha sido actualizado:');
      console.log(result.value);
    } else {
      console.log('No se encontró ningún registro con el ID proporcionado.');
    }
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

updateClientById();*/


//UPDATEMANY

/*const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

// Función para generar un número de teléfono aleatorio
function generatePhoneNumber() {
  let phoneNumber = '0';
  for (let i = 0; i < 9; i++) {
    phoneNumber += Math.floor(Math.random() * 10);
  }
  return phoneNumber;
}

async function updateClients() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const filtro = { };

    const updateDoc = {
      $set: {
        nombre: faker.person.firstName(), // Generar nombre aleatorio
        apellido: faker.person.lastName(), // Generar apellido aleatorio
        telefono: generatePhoneNumber(), // Generar teléfono aleatorio
        direccion: faker.location.streetAddress(), // Generar dirección aleatoria
        correo: faker.internet.email(), // Generar correo electrónico aleatorio
      },
    };

    const options = {
      upsert: false, // No crear nuevos documentos si no se encuentra coincidencia
      returnOriginal: false, // Obtener los documentos actualizados
      validationAction: 'error', // Generar un error si los documentos no cumplen con las validaciones
    };

    const result = await collection.updateMany(filtro, updateDoc, options);

    console.log(`Se han actualizado ${result.modifiedCount} documentos`);

    const updatedDocuments = await collection.find(filtro).toArray();
    console.log('Los siguientes documentos han sido actualizados:');
    console.log(updatedDocuments);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

updateClients();*/

//ELIMAR CON EL DELETEONE

/*const { MongoClient, ObjectId } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function deleteClientById() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const filter = {
      _id: new ObjectId("6466f111d80279c601a1b63d")
    };

    const result = await collection.deleteOne(filter);
    console.log(`Se ha eliminado: ${result.deletedCount} documento`);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

deleteClientById();*/

//ELIMINAR CON EL DELETEMANY

/*const { MongoClient, ObjectId } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function deleteClients() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const filter = {
      _id: {
        $in: [
          new ObjectId("6466f111d80279c601a1b63c"),
          new ObjectId("6466f111d80279c601a1b63b"),
          new ObjectId("6466f111d80279c601a1b63a"),
          new ObjectId("6466f111d80279c601a1b639")
        ]
      }
    };

    const result = await collection.deleteMany(filter);
    console.log(`Se han eliminado: ${result.deletedCount} documentos`);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

deleteClients();*/


//DROP COLLECTION PARA ELIMINAR LA COLECCION COMPLETA

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function dropClientsCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    await db.dropCollection('personas');
    console.log("La colección 'personas' ha sido eliminada correctamente.");

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

dropClientsCollection();*/

//DROPDATABASE PARA ELIMINAR LA BASE DE DATOS COMPLETA 

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function dropDatabase() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('nueva');

    const collections = await db.listCollections().toArray();
    for (const collection of collections) {
      await db.collection(collection.name).drop();
    }

    console.log("La base de datos 'nueva' ha sido eliminada correctamente.");

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

dropDatabase();*/


//$LOOKUP PARA HACER RELACION DE UNA COLECCION CON OTRA EN ESTE CASO CLIENTES CON MASCOTAS

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function performLookup() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    const clientesCollection = db.collection('clientes');

    const pipeline = [
      {
        $lookup: {
          from: 'mascotas',
          localField: '_id',
          foreignField: 'clienteId',
          as: 'mascotas',
        },
      },
    ];

    const result = await clientesCollection.aggregate(pipeline).toArray();

    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
performLookup();*/

//USO DE PIPELINES

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function queryClientsCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const pipeline = [
      {
        $project: {
          _id: 0,
          nombre: 1,
          apellido: 1,
          telefono: 1,
          direccion: 1,
          correo: 1,
        },
      },
      // Agrega más etapas de pipeline si es necesario
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

queryClientsCollection();*/


//USO DE LIMIT

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function queryClientsCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const pipeline = [
      {
        $limit: 10 // Agrega aquí el número de documentos que deseas limitar
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

queryClientsCollection();*/


//USO DE SORT

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function queryClientsCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const pipeline = [
      {
        $sort: { nombre: 1 } // Agrega aquí los campos de ordenamiento y su dirección (1 para ascendente, -1 para descendente)
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

queryClientsCollection();*/


//USO DEL UNWIND

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function queryClientsCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('clientes');

    const pipeline = [
      {
        $unwind: "$arrayField" // Agrega aquí el nombre del campo de tipo array que deseas desenrollar
      }
    ];

    const result = await collection.aggregate(pipeline).toArray();
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
queryClientsCollection();*/


//USO DEL $LOOKUP

/*const { MongoClient } = require('mongodb');
const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function performLookup() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    const pipeline = [
      {
        $lookup: {
          from: 'clientes', // Nombre de la colección de clientes
          localField: 'Idcliente', // Campo en la colección de mascotas
          foreignField: 'Id', // Campo en la colección de clientes
          as: 'clienteInfo' // Nombre del campo para almacenar los datos del cliente
        }
      },
      {
        $limit: 5 // Limitar el resultado a 5 documentos para ejemplificar
      }
    ];

    const result = await db.collection('mascotas').aggregate(pipeline).toArray();

    console.log('Resultados del lookup:');
    console.log(result);
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

performLookup();*/
