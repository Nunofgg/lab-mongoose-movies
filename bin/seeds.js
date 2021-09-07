require("../db");
const Celebrity = require("../models/Celebrity.model");

const celebrities = [
    {
        name: "José Saramago",
        occupation: "writer",
        catchPhrase: "Let's not hurry, but let's not waste time either.",
    },
    {
        name: "António Variações",
        occupation: "singer",
        catchPhrase: "I just want to be where I am not",
    },
    {
        name: "António Guterres",
        occupation: "secretary general of the United Union",
        catchPhrase: "A question of duty but also a question of politics.",
    },
];


Celebrity.insertMany(celebrities).then(() => {
    console.log("celebrities created");
});