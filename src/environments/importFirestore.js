const admin = require("firebase-admin");
const fs = require("fs");

// Service config
const serviceAccount = require("./serviceAccountKey.json"); // Tu clave privada
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

// load JSON
const data = JSON.parse(fs.readFileSync("data.json", "utf8"));

// function import data 
async function importData() {
  for (const [key, value] of Object.entries(data)) {
    const collectionRef = db.collection(key);
    for (const [docKey, docValue] of Object.entries(value)) {
      const docRef = collectionRef.doc(docKey);
      await docRef.set(docValue);
      console.log(`Documento ${docKey} importado en ${key}`);
    }
  }
}

importData().then(() => {
  console.log("Importación completada.");
  process.exit(0);
});
