const testObj = [
    {
        id: 0,
        content: [
            {
                id: 0,
                question: "There isn't ....... sugar in this coffee!",
                answers: [
                    { id: 0, text: "over", check: 0 },
                    { id: 1, text: "no", check: 0 },
                    { id: 2, text: "any", check: 1 },
                    { id: 3, text: "some", check: 0 }
                ]
            },
            {
                id: 1,
                question:
                    ".......... I don't see you before, have a nice holiday.",
                answers: [
                    { id: 0, text: "In case", check: 1 },
                    { id: 1, text: "Unless", check: 0 },
                    { id: 2, text: "Even", check: 0 },
                    { id: 3, text: "Although", check: 0 }
                ]
            },
            {
                id: 2,
                question: "He went to the Stadium .....",
                answers: [
                    { id: 0, text: "with taxi", check: 0 },
                    { id: 1, text: "by taxi", check: 1 },
                    { id: 2, text: "on taxi", check: 0 },
                    { id: 3, text: "in taxi", check: 0 }
                ]
            },
            {
                id: 3,
                question: "How long have you been living in London?",
                answers: [
                    { id: 0, text: "for 7 years", check: 1 },
                    { id: 1, text: "at least 7 years", check: 0 },
                    { id: 2, text: "since 7 years", check: 0 },
                    { id: 3, text: "7 years ago", check: 0 }
                ]
            },
            {
                id: 4,
                question: " Jane ..... fly to San Francisco tomorrow.",
                answers: [
                    { id: 0, text: "to going", check: 0 },
                    { id: 1, text: "goes to", check: 0 },
                    { id: 2, text: "is going to", check: 1 },
                    { id: 3, text: "go to", check: 0 }
                ]
            },
            {
                id: 5,
                question: "He plays soccer .....",
                answers: [
                    { id: 0, text: "in Wednesdays", check: 0 },
                    { id: 1, text: "on Wednesdays", check: 1 },
                    { id: 2, text: "at Wednesdays", check: 0 },
                    { id: 3, text: "by Wednesdays", check: 0 }
                ]
            },
            {
                id: 6,
                question: " .... some more coffee?",
                answers: [
                    { id: 0, text: "Do you?", check: 0 },
                    { id: 1, text: "Do you like?", check: 0 },
                    { id: 2, text: "You'd like", check: 0 },
                    { id: 3, text: "Would you like?", check: 1 }
                ]
            },
            {
                id: 7,
                question: " The house was empty. There ..... there.",
                answers: [
                    { id: 0, text: "wasn't nobody", check: 0 },
                    { id: 1, text: "was anybody", check: 0 },
                    { id: 2, text: "was somebody", check: 0 },
                    { id: 3, text: "was nobody", check: 1 }
                ]
            },
            {
                id: 8,
                question: "If I were rich, I ..... buy a house on the beach.",
                answers: [
                    { id: 0, text: "will", check: 0 },
                    { id: 1, text: "would", check: 1 },
                    { id: 2, text: "should", check: 0 },
                    { id: 3, text: "wish", check: 0 }
                ]
            },
            {
                id: 9,
                question: " When she arrived, he .....",
                answers: [
                    { id: 0, text: "already left", check: 0 },
                    { id: 1, text: "has already left", check: 0 },
                    { id: 2, text: "had already left", check: 1 },
                    { id: 3, text: "left", check: 0 }
                ]
            },
            {
                id: 10,
                question: "I forgot ..... the lights before I left.",
                answers: [
                    { id: 0, text: "to turn off", check: 1 },
                    { id: 1, text: "put off", check: 0 },
                    { id: 2, text: "turning off", check: 0 },
                    { id: 3, text: "shot", check: 0 }
                ]
            },
            {
                id: 11,
                question: "The room can't be dirty she .....",
                answers: [
                    { id: 0, text: "is just clean it.", check: 0 },
                    { id: 1, text: "have just cleaned it.", check: 0 },
                    { id: 2, text: "just clean it.", check: 0 },
                    { id: 3, text: "has just cleaned it.", check: 1 }
                ]
            },
            {
                id: 12,
                question: "Has Mrs. Smith arrived ..... ?",
                answers: [
                    { id: 0, text: "yet", check: 1 },
                    { id: 1, text: "still", check: 0 },
                    { id: 2, text: "now", check: 0 },
                    { id: 3, text: "already", check: 0 }
                ]
            },
            {
                id: 13,
                question:
                    "Have you sent that letter to Mr. Taylor? Yes, I've ..... done that.",
                answers: [
                    { id: 0, text: "still", check: 0 },
                    { id: 1, text: "yet", check: 0 },
                    { id: 2, text: "already", check: 1 },
                    { id: 3, text: "now", check: 0 }
                ]
            },
            {
                id: 14,
                question: "It's no use ..... to him. He doesn't listen.",
                answers: [
                    { id: 0, text: "speaking", check: 1 },
                    { id: 1, text: "to speak", check: 0 },
                    { id: 2, text: "have spoken", check: 0 },
                    { id: 3, text: "spoke", check: 0 }
                ]
            },
            {
                id: 15,
                question: "..... is your house from here?",
                answers: [
                    { id: 0, text: "How much", check: 0 },
                    { id: 1, text: "How far", check: 1 },
                    { id: 2, text: "How long", check: 0 },
                    { id: 3, text: "How many", check: 0 }
                ]
            },
            {
                id: 16,
                question: "You can watch TV ..... you like.",
                answers: [
                    { id: 0, text: "whenever", check: 1 },
                    { id: 1, text: "soon", check: 0 },
                    { id: 2, text: "whatever", check: 0 },
                    { id: 3, text: "always", check: 0 }
                ]
            },
            {
                id: 17,
                question: "This house is quite old. It ..... in 1910.",
                answers: [
                    { id: 0, text: "built", check: 0 },
                    { id: 1, text: "had built", check: 0 },
                    { id: 2, text: "has built", check: 0 },
                    { id: 3, text: "was built", check: 1 }
                ]
            },
            {
                id: 18,
                question: "Don't ..... me. I'll be back late.",
                answers: [
                    { id: 0, text: "waiting for", check: 0 },
                    { id: 1, text: "wait for", check: 1 },
                    { id: 2, text: "wait to", check: 0 },
                    { id: 3, text: "hope for", check: 0 }
                ]
            },
            {
                id: 19,
                question: "That's the ..... of my worries, it'll never happen.",
                answers: [
                    { id: 0, text: "last", check: 0 },
                    { id: 1, text: "less", check: 0 },
                    { id: 2, text: "least", check: 1 },
                    { id: 3, text: "fewer", check: 0 }
                ]
            }
        ]
    },

    {
        id: 1,
        content: [
            {
                id: 0,
                question: "La gente de esta ciudad ........ muy simpática.",
                answers: [
                    { id: 0, text: "siente", check: 0 },
                    { id: 1, text: "es", check: 1 },
                    { id: 2, text: "dice", check: 0 },
                    { id: 3, text: "vive", check: 0 }
                ]
            },
            {
                id: 1,
                question: "Yo soy enfermera, y tú ¿a qué ........?",
                answers: [
                    { id: 0, text: "estás", check: 0 },
                    { id: 1, text: "trabajas", check: 0 },
                    { id: 2, text: "te dedicas", check: 1 },
                    { id: 3, text: "haces", check: 0 }
                ]
            },
            {
                id: 2,
                question:
                    "¿Qué haces los fines de semana? – Normalmente yo ..... al cine, ..... al fútbol con mis amigos,…",
                answers: [
                    { id: 0, text: "voy / jugo", check: 0 },
                    { id: 1, text: "ando / juego", check: 0 },
                    { id: 2, text: " ir / jugar", check: 0 },
                    { id: 3, text: " voy / juego", check: 1 }
                ]
            },
            {
                id: 3,
                question: "Me ........ las gafas que te has comprado.",
                answers: [
                    { id: 0, text: "gusto", check: 0 },
                    { id: 1, text: "gustas", check: 0 },
                    { id: 2, text: "gustan", check: 1 },
                    { id: 3, text: "gusta", check: 0 }
                ]
            },
            {
                id: 4,
                question: "En Barcelona ........ muchos taxis.",
                answers: [
                    { id: 0, text: "están", check: 0 },
                    { id: 1, text: "tiene", check: 0 },
                    { id: 2, text: "hay", check: 1 },
                    { id: 3, text: "son", check: 0 }
                ]
            },
            {
                id: 5,
                question: "¿Cuántos años ........ tú? - ........ 25",
                answers: [
                    { id: 0, text: "tenes / tengo", check: 0 },
                    { id: 1, text: "as / soy", check: 0 },
                    { id: 2, text: "tienes / tengo", check: 1 },
                    { id: 3, text: "tener / teno", check: 0 }
                ]
            },
            {
                id: 6,
                question:
                    "¿A qué hora ........ normalmente en España? – Sobre las doce y media.",
                answers: [
                    { id: 0, text: "te acostarte", check: 0 },
                    { id: 1, text: "te acuestas", check: 1 },
                    { id: 2, text: "te acostas", check: 0 },
                    { id: 3, text: "acuestas", check: 0 }
                ]
            },
            {
                id: 7,
                question: "Lina siempre llega temprano pero hoy ....... tarde.",
                answers: [
                    { id: 0, text: "está", check: 0 },
                    { id: 1, text: "ha llegado", check: 1 },
                    { id: 2, text: "llegaba", check: 0 },
                    { id: 3, text: "he venido", check: 0 }
                ]
            },
            {
                id: 8,
                question: "Cuando ........ por la calle, me encontré con Pedro",
                answers: [
                    { id: 0, text: "fui", check: 0 },
                    { id: 1, text: "he ido", check: 0 },
                    { id: 2, text: "había ido", check: 0 },
                    { id: 3, text: "iba", check: 1 }
                ]
            },
            {
                id: 9,
                question: "El verano que viene .......... al Caribe",
                answers: [
                    { id: 0, text: "fuimos", check: 0 },
                    { id: 1, text: "estamos", check: 0 },
                    { id: 2, text: "iremos", check: 1 },
                    { id: 3, text: "seremos", check: 0 }
                ]
            },
            {
                id: 10,
                question:
                    "El año pasado ........ en Brasil, pero este año ........ a Chile",
                answers: [
                    { id: 0, text: "estuvimos / vamos", check: 1 },
                    { id: 1, text: "estábamos / vamos", check: 0 },
                    { id: 2, text: "fuimos / vamos", check: 0 },
                    { id: 3, text: "estuvimos / estamos", check: 0 }
                ]
            },
            {
                id: 11,
                question:
                    "Cuando ........ pequeña, siempre ........ en casa de mis abuelos",
                answers: [
                    { id: 0, text: "estaba / comía", check: 0 },
                    { id: 1, text: " era / comía", check: 1 },
                    { id: 2, text: "estuve / comaba", check: 0 },
                    { id: 3, text: "fui / comía", check: 0 }
                ]
            },
            {
                id: 12,
                question:
                    "Antes, en España la gente no ......... tantas libertades",
                answers: [
                    { id: 0, text: "tendrían", check: 0 },
                    { id: 1, text: "tuvo", check: 0 },
                    { id: 2, text: "tenía", check: 1 },
                    { id: 3, text: " ha tenido", check: 0 }
                ]
            },
            {
                id: 13,
                question:
                    "Maradona ......... el mejor jugador de fútbol de la historia",
                answers: [
                    { id: 0, text: "está", check: 0 },
                    { id: 1, text: "eres", check: 0 },
                    { id: 2, text: "estuvo", check: 0 },
                    { id: 3, text: "es", check: 1 }
                ]
            },
            {
                id: 14,
                question: "¿Dónde ....... la fiesta? - En casa de Pedro",
                answers: [
                    { id: 0, text: "está", check: 0 },
                    { id: 1, text: "hay", check: 0 },
                    { id: 2, text: "es", check: 1 },
                    { id: 3, text: "pasa", check: 0 }
                ]
            },
            {
                id: 15,
                question:
                    "Estoy muy estresado, ¿qué harías tú en mi lugar?- Yo que tú, ........ deporte.",
                answers: [
                    { id: 0, text: "haría", check: 1 },
                    { id: 1, text: "hice", check: 0 },
                    { id: 2, text: "hacería", check: 0 },
                    { id: 3, text: "haz", check: 0 }
                ]
            },
            {
                id: 16,
                question:
                    "Si me ........ una moto, te prometo que ........ mucho",
                answers: [
                    { id: 0, text: "compras / estudiaré", check: 1 },
                    { id: 1, text: "compro / he estudiado", check: 0 },
                    { id: 2, text: "compraré / estudiaré", check: 0 },
                    { id: 3, text: "compraré / estudio", check: 0 }
                ]
            },
            {
                id: 17,
                question:
                    "Si quieres ver esa película, ........ al cine esta noche",
                answers: [
                    { id: 0, text: "viene", check: 0 },
                    { id: 1, text: "vas", check: 0 },
                    { id: 2, text: "ve", check: 1 },
                    { id: 3, text: "es", check: 0 }
                ]
            },
            {
                id: 18,
                question:
                    "No te ........... sin que el profesor te dé los deberes para mañana",
                answers: [
                    { id: 0, text: "vayas", check: 1 },
                    { id: 1, text: "vas", check: 0 },
                    { id: 2, text: "ir", check: 0 },
                    { id: 3, text: "vete", check: 0 }
                ]
            },
            {
                id: 19,
                question: "Ojalá ......... Elena esta noche a la fiesta",
                answers: [
                    { id: 0, text: "vendrá", check: 0 },
                    { id: 1, text: "viene", check: 0 },
                    { id: 2, text: "venga", check: 1 },
                    { id: 3, text: "vendría", check: 0 }
                ]
            }
        ]
    },
    {
        id: 2,
        content: [
            {
                id: 0,
                question: "Woher kommt Peter? ",
                answers: [
                    { id: 0, text: "Sie kommen aus Graz.", check: 0 },
                    { id: 1, text: "Er wohnt hier.", check: 0 },
                    { id: 2, text: "Sie lebt in Österreich.", check: 0 },
                    { id: 3, text: "Er kommt aus Wien.", check: 1 }
                ]
            },
            {
                id: 1,
                question: "Was machen Sie in Ihrer Freizeit? ",
                answers: [
                    { id: 0, text: "Ich bin Programmiererin.", check: 0 },
                    { id: 1, text: "Sie sind Studenten.", check: 0 },
                    { id: 2, text: "Ich reise gerne.", check: 1 },
                    { id: 3, text: "Ich arbeite als Klavierlehrer", check: 0 }
                ]
            },
            {
                id: 2,
                question: "Welcher Satz ist richtig ?",
                answers: [
                    { id: 0, text: "Der Zug fährt ab um 10.00 Uhr.", check: 0 },
                    { id: 1, text: "Der Zug abfährt um 10.00 Uhr.", check: 0 },
                    { id: 2, text: "Der Zug fährt um 10.00 Uhr ab.", check: 1 },
                    { id: 3, text: "Fährt der Zug um 10.00 Uhr ab.", check: 0 }
                ]
            },
            {
                id: 3,
                question: "Was .......  Frau Maier von Beruf ?",
                answers: [
                    { id: 0, text: "machst", check: 0 },
                    { id: 1, text: "arbeitet", check: 0 },
                    { id: 2, text: "ist", check: 1 },
                    { id: 3, text: "verdient", check: 0 }
                ]
            },
            {
                id: 4,
                question: "Frau Müller hat gestern bis 23.00 Uhr .......",
                answers: [
                    { id: 0, text: "arbeiten", check: 0 },
                    { id: 1, text: "arbeitet", check: 0 },
                    { id: 2, text: "gearbeiten", check: 0 },
                    { id: 3, text: "gearbeitet", check: 1 }
                ]
            },
            {
                id: 5,
                question: "Möchtest du mit mir heute Abend ........",
                answers: [
                    { id: 0, text: "das Kaffee trinken?", check: 0 },
                    { id: 1, text: "eine Kaffee trinken?", check: 0 },
                    { id: 2, text: "einen Kaffee trinken?", check: 1 },
                    { id: 3, text: "dem Kaffee trinken?", check: 0 }
                ]
            },
            {
                id: 6,
                question: " Welches Wort ist falsch ?",
                answers: [
                    { id: 0, text: "schön", check: 0 },
                    { id: 1, text: "nett", check: 0 },
                    { id: 2, text: "stühle", check: 1 },
                    { id: 3, text: "verheiratet", check: 0 }
                ]
            },
            {
                id: 7,
                question:
                    " Ich kann ........  Stift nicht finden. Hast du ihn gesehen ?",
                answers: [
                    { id: 0, text: "mein", check: 0 },
                    { id: 1, text: "meinem", check: 0 },
                    { id: 2, text: "meinen", check: 1 },
                    { id: 3, text: "meine", check: 0 }
                ]
            },
            {
                id: 8,
                question:
                    "Gefällt dir mein neuer Pullover? – Ja, ich finde ...... sehr schön!",
                answers: [
                    { id: 0, text: "ihn", check: 1 },
                    { id: 1, text: "es", check: 0 },
                    { id: 2, text: "der", check: 0 },
                    { id: 3, text: "dem", check: 0 }
                ]
            },
            {
                id: 9,
                question: " Können Sie ...... sagen, wie spät es ist?",
                answers: [
                    { id: 0, text: "ich", check: 0 },
                    { id: 1, text: "mich", check: 0 },
                    { id: 2, text: "mein", check: 0 },
                    { id: 3, text: "mir", check: 1 }
                ]
            },
            {
                id: 10,
                question:
                    "Das Buch, ........ du mir geschenkt hast, ist sehr spannend.",
                answers: [
                    { id: 0, text: "der", check: 0 },
                    { id: 1, text: "das", check: 1 },
                    { id: 2, text: "es", check: 0 },
                    { id: 3, text: "was", check: 0 }
                ]
            },
            {
                id: 11,
                question:
                    "Petra geht in die Disko, ........ sie laute Musik nicht mag.",
                answers: [
                    { id: 0, text: "trotz", check: 0 },
                    { id: 1, text: " obwohl", check: 1 },
                    { id: 2, text: "weil", check: 0 },
                    { id: 3, text: "warum", check: 0 }
                ]
            },
            {
                id: 12,
                question: "Gestern bin ich im Kino .........",
                answers: [
                    { id: 0, text: "gewesen", check: 1 },
                    { id: 1, text: "gewaren", check: 0 },
                    { id: 2, text: "gegangt", check: 0 },
                    { id: 3, text: "gegangen", check: 0 }
                ]
            },
            {
                id: 13,
                question:
                    "Studenten in Deutschland wohnen .......... in einer Wohngemeinschaft.",
                answers: [
                    { id: 0, text: "meistens", check: 1 },
                    { id: 1, text: "alles", check: 0 },
                    { id: 2, text: "often", check: 0 },
                    { id: 3, text: "jede", check: 0 }
                ]
            },
            {
                id: 14,
                question: "Da bist du ja! ......... hat für dich angerufen.",
                answers: [
                    { id: 0, text: "Ein Person", check: 0 },
                    { id: 1, text: "Jemand", check: 1 },
                    { id: 2, text: "Ein Mensch", check: 0 },
                    { id: 3, text: "Nirgendwer", check: 0 }
                ]
            },
            {
                id: 15,
                question: "Marions Uhr war kaputt. Also ...... sie sie ......",
                answers: [
                    { id: 0, text: "hat , reparieren lassen", check: 1 },
                    { id: 1, text: "reparieren lassen , hat", check: 0 },
                    { id: 2, text: "hat , reparieren gelassen", check: 0 },
                    { id: 3, text: "wurde , repariert", check: 0 }
                ]
            },
            {
                id: 16,
                question: "Peter ....... das Buch zurück ins Regal .......",
                answers: [
                    { id: 0, text: "hat, gelegt", check: 1 },
                    { id: 1, text: "ist, gelegen", check: 0 },
                    { id: 2, text: "ist, gelegt", check: 0 },
                    { id: 3, text: "hat, gelegen", check: 0 }
                ]
            },
            {
                id: 17,
                question:
                    "Nachdem er ........, fing er an den Tisch zu decken.",
                answers: [
                    { id: 0, text: "gekocht wäre", check: 0 },
                    { id: 1, text: "gekocht hat", check: 0 },
                    { id: 2, text: "gekocht hatte", check: 1 },
                    { id: 3, text: "gekocht hätte", check: 0 }
                ]
            },
            {
                id: 18,
                question:
                    "......... musste der Präsident seinen Besuch absagen.",
                answers: [
                    { id: 0, text: "Wegen seine Krankheit", check: 0 },
                    { id: 1, text: "Trotz seine Krankheit", check: 0 },
                    { id: 2, text: "Wegen seiner Krankheit", check: 1 },
                    { id: 3, text: "Trotz seiner Krankheit", check: 0 }
                ]
            },
            {
                id: 19,
                question: "Sie bleibt lieber zuhause anstat .........",
                answers: [
                    { id: 0, text: "wegfahren", check: 0 },
                    { id: 1, text: "zu wegfahren", check: 0 },
                    { id: 2, text: "wegzufahren", check: 1 },
                    { id: 3, text: "fahren weg", check: 0 }
                ]
            }
        ]
    }
];

module.exports = {
    testObj
};
