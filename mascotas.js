//CREACION DE LA COLECCION E INSERCION DE DATOS

/*const { MongoClient } = require('mongodb');
const {faker} = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function createMascotasCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    await db.createCollection('mascotas', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'Mascota',
          required: ['nombre', 'raza', 'especie', 'genero', 'color', 'fechaNacimiento'],
          properties: {
            nombre: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            raza: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            especie: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            genero: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
              enum: ['macho', 'hembra'],
            },
            color: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            fechaNacimiento: {
              bsonType: 'date',
              description: 'Debe ser una fecha válida',
            },
          },
        },
      },
    });

    console.log("La colección 'mascotas' ha sido creada correctamente.");

    // Generar datos de mascotas y guardarlos en la colección
    const mascotas = [];
    const especie1 = ['Perro', 'Gato', 'Ave', 'Reptil'];
    const genero1 = ['macho', 'hembra'];
    const color1 = ['negro', 'blanco', 'cafe', 'marron', 'gris', 'verde', 'rayado', 'manchado']

    for (let i = 0; i < 2000; i++) {
      const nombre = faker.person.firstName();
      const raza = faker.lorem.word();
      const especie = faker.helpers.arrayElement(especie1);
      const genero = faker.helpers.arrayElement(genero1);
      const color = faker.helpers.arrayElement(color1);
      const fechaNacimiento = faker.date.past();

    // for (let i = 0; i < 2000; i++) {
    //   const nombre = faker.person.firstName();
    //   const raza = faker.lorem.word();
    //    const especie = faker.helpers.arrayElement(especie1);
    //    const genero = faker.helpers.arrayElement(genero1);
    //   // const especie = faker.random.arrayElement(especie1);
    //   // const genero = faker.random.arrayElement(genero1);
    //   //const color = faker.internet.color();
    //   const color = faker.commerce.color();
    //   const fechaNacimiento = faker.date.past();

      const mascota = {
        nombre,
        raza,
        especie,
        genero,
        color,
        fechaNacimiento,
      };

      mascotas.push(mascota);
    }

    await db.collection('mascotas').insertMany(mascotas);
    console.log('Se han insertado los datos de mascotas.');

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

createMascotasCollection();*/

//INSERCION DE DATOS SIN CREAR NUEVAMENTE LA COLECCION

/*const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function insertMascotas() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const mascotas = [];
    const especie1 = ['Perro', 'Gato', 'Ave', 'Reptil'];
    const genero1 = ['macho', 'hembra'];
    const color1 = ['negro', 'blanco', 'cafe', 'marron', 'gris', 'verde', 'rayado', 'manchado']

    for (let i = 0; i < 2000; i++) {
      const nombre = faker.person.firstName();
      const raza = faker.lorem.word();
      const especie = faker.helpers.arrayElement(especie1);
      const genero = faker.helpers.arrayElement(genero1);
      const color = faker.herpers.arrayElement(color1);
      const fechaNacimiento = faker.date.past();

      const mascota = {
        nombre,
        raza,
        especie,
        genero,
        color,
        fechaNacimiento,
      };

      mascotas.push(mascota);
    }

    await collection.insertMany(mascotas);
    console.log('Se han insertado los datos de mascotas.');

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

insertMascotas();*/

//INSERTONE 

/*const { MongoClient } = require('mongodb');
const { faker } = require('@faker-js/faker');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function createMascotasCollection() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    // Validación y creación de la colección mascotas
    await db.createCollection('mascotas', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          title: 'Mascota',
          required: ['nombre', 'raza', 'especie', 'genero', 'color', 'fechaNacimiento'],
          properties: {
            nombre: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            raza: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            especie: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            genero: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
              enum: ['macho', 'hembra'],
            },
            color: {
              bsonType: 'string',
              description: 'Debe ser una cadena de texto',
            },
            fechaNacimiento: {
              bsonType: 'date',
              description: 'Debe ser una fecha válida',
            },
          },
        },
      },
    });

    console.log("La colección 'mascotas' ha sido creada correctamente.");

    // Generar datos de mascota y guardarlos en la colección
    const especies = ['Perro', 'Gato', 'Ave', 'Reptil'];
    const generos = ['macho', 'hembra'];
    const colores = ['negro', 'blanco', 'cafe', 'marron', 'gris', 'verde', 'rayado', 'manchado'];

    for (let i = 0; i < 2000; i++) {
      const nombre = faker.person.firstName();
      const raza = faker.lorem.word();
      const especie = faker.helpers.arrayElement(especies);
      const genero = faker.helpers.arrayElement(generos);
      const color = faker.helpers.arrayElement(colores);
      const fechaNacimiento = faker.date.past();

      const mascota = {
        nombre,
        raza,
        especie,
        genero,
        color,
        fechaNacimiento,
      };

      await db.collection('mascotas').insertOne(mascota);
    }

    console.log('Se han insertado los datos de mascotas.');
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

createMascotasCollection();*/

//FIND


/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function findMascotas() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    const mascotas = await db.collection('mascotas').find({
      genero: 'macho',
    }).toArray();

    console.log('Mascotas encontradas:', mascotas);

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

findMascotas();*/

//FINDONE

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function findOneMascotaPorNombre(nombre) {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');

    const mascota = await db.collection('mascotas').findOne({ nombre });

    console.log('Mascota encontrada:', mascota);

  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

findOneMascotaPorNombre('Mack');*/

//UPDATEONE

/*const { MongoClient, ObjectId } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function updateMascotaById() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const filtro = { _id: new ObjectId("6468481066c793fd92967c3e") }; // Filtro para seleccionar el registro por su ID

    const updateDoc = {
      $set: {
        nombre: 'tobby', // Cambiar el campo 'nombre' con el nuevo valor
        raza: 'labrador', // Cambiar el campo 'raza' con el nuevo valor
        especie: 'perro', // Cambiar el campo 'especie' con el nuevo valor
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

updateMascotaById();*/

//UPDATEMANY

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function updateMascotasPorNombre() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const filtro = { nombre: 'Mack' }; // Filtro para seleccionar los registros a actualizar

    const updateDoc = {
      $set: {
        raza: 'criolla', // Cambiar el campo 'raza' con el nuevo valor
        especie: 'perro', // Cambiar el campo 'especie' con el nuevo valor
      },
    };

    const options = {
      multi: true, // Actualizar varios documentos que coincidan con el filtro
    };

    const result = await collection.updateMany(filtro, updateDoc, options);

    console.log(`${result.modifiedCount} documentos actualizados.`);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

updateMascotasPorNombre();*/

//DELETEONE

/*const { MongoClient, ObjectId } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function deleteMascotaById() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const filtro = { _id: new ObjectId("6468481066c793fd92967c3e") }; // Filtro para seleccionar el registro por su ID

    const result = await collection.deleteOne(filtro);

    if (result.deletedCount === 1) {
      console.log('El registro ha sido eliminado correctamente.');
    } else {
      console.log('No se encontró ningún registro con el ID proporcionado.');
    }
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

deleteMascotaById();*/



//DELETEMANY PERO EN ESTE CASO A DIFERENCAI AL QUE SE HIZO EN CLIENTE EN ESTA SE ELIMINAN TODOS LOS REGISTROS DENTRO DE ESA COLECCION

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function deleteAllMascotas() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const result = await collection.deleteMany({});

    console.log(`${result.deletedCount} documentos eliminados de la colección 'mascotas'.`);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
}

deleteAllMascotas();*/

//DROPCOLLECTION

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

//DROPDATABASE

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

//LIMIT

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function limitarDocumentos() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const limite = 5; // Número máximo de documentos a recuperar

    const result = await collection.find().limit(limite).toArray();

    console.log(`Se han recuperado ${result.length} documentos:`);
    console.log(result);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

limitarDocumentos();*/


//SORT

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function ordenarDocumentos() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const sortField = 'nombre'; // Campo por el cual se ordenarán los documentos
    const sortOrder = 1; // 1 para orden ascendente, -1 para orden descendente

    const result = await collection.find().sort({ [sortField]: sortOrder }).toArray();

    console.log(`Se han recuperado ${result.length} documentos ordenados por '${sortField}':`);
    console.log(result);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}
  
ordenarDocumentos();*/

//UNWIND

/*const { MongoClient } = require('mongodb');

const URI = 'mongodb+srv://admin:admin@cluster0.edwr0gq.mongodb.net/?retryWrites=true&w=majority';

async function desenrollarArray() {
  const client = new MongoClient(URI);

  try {
    await client.connect();
    const db = client.db('entre_especies');
    const collection = db.collection('mascotas');

    const result = await collection.aggregate([
      { $unwind: '$etiquetas' } // Desenrollar el campo 'etiquetas' que es un array
    ]).toArray();

    console.log(`Se han recuperado ${result.length} documentos desenrollados por el campo 'etiquetas':`);
    console.log(result);

  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

desenrollarArray();*/