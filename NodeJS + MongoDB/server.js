const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware per il parsing del corpo della richiesta
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connessione a MongoDB
mongoose.connect("mongodb+srv://reginearchico:regine@cluster0.uoqsnx5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connesso a MongoDB"))
    .catch((err) => console.log("Errore nella connessione a MongoDB", err));

// Schema per l'utente
const User = mongoose.model('User', new mongoose.Schema({
    name: String,
    age: Number
}));

// Rotta GET per il form
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="it">
            <head>
                <title>Inserisci Dati</title>
                <style>
                    body { font-family: Arial; text-align: center; margin-top: 30px; }
                    input, button { padding: 10px; margin: 5px; border-radius: 8px; border: none}
                </style>
            </head>
            <body>
                <h1>Inserisci Dati</h1>
                <form action="/submit" method="POST">
                    <input type="text" name="name" placeholder="Nome" required />
                    <input type="number" name="age" placeholder="Età" required />
                    <button type="submit">Salva</button>
                </form>
            </body>
        </html>
    `);
});

// Rotta POST per salvare i dati dell'utente
app.post('/submit', async (req, res) => {
    const { name, age } = req.body;
    try {
        const newUser = new User({ name, age });
        await newUser.save();
        res.send(`<h1>Utente ${name} inserito correttamente!</h1>`);
    } catch (err) {
        console.error(err);
        res.send('<h1>Errore nel salvataggio dei dati!</h1>');
    }
});

// Avvio del server sulla porta 5001
const port = 5001;
app.listen(port, () => {
    console.log(`Server attivo sulla porta ${port}...`);
});

// Gestione della chiusura del server
process.on('SIGINT', async () => {
    console.log("Server in arresto...");
    await mongoose.disconnect();
    console.log("Connessione a MongoDB chiusa.");
    process.exit(0);  
});
