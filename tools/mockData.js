const testObj = [
    {
        id: 1,
        question: "There isn't ....... sugar in this coffee!",
        answers: [
            { id: 0, text: "over", check: 0 },
            { id: 1, text: "no", check: 0 },
            { id: 2, text: "any", check: 1 },
            { id: 3, text: "some", check: 0 }
        ]
    },
    {
        id: 2,
        question: ".......... I don't see you before, have a nice holiday.",
        answers: [
            { id: 0, text: "In case", check: 1 },
            { id: 1, text: "Unless", check: 0 },
            { id: 2, text: "Even", check: 0 },
            { id: 3, text: "Although", check: 0 }
        ]
    },
    {
        id: 3,
        question: "He went to the Stadium .....",
        answers: [
            { id: 0, text: "with taxi", check: 0 },
            { id: 1, text: "by taxi", check: 1 },
            { id: 2, text: "on taxi", check: 0 },
            { id: 3, text: "in taxi", check: 0 }
        ]
    },
    {
        id: 4,
        question: "How long have you been living in London?",
        answers: [
            { id: 0, text: "for 7 years", check: 1 },
            { id: 1, text: "at least 7 years", check: 0 },
            { id: 2, text: "since 7 years", check: 0 },
            { id: 3, text: "7 years ago", check: 0 }
        ]
    },
    {
        id: 5,
        question: " Jane ..... fly to San Francisco tomorrow.",
        answers: [
            { id: 0, text: "to going", check: 0 },
            { id: 1, text: "goes to", check: 0 },
            { id: 2, text: "is going to", check: 1 },
            { id: 3, text: "go to", check: 0 }
        ]
    },
    {
        id: 6,
        question: "He plays soccer .....",
        answers: [
            { id: 0, text: "in Wednesdays", check: 0 },
            { id: 1, text: "on Wednesdays", check: 1 },
            { id: 2, text: "at Wednesdays", check: 0 },
            { id: 3, text: "by Wednesdays", check: 0 }
        ]
    },
    {
        id: 7,
        question: " .... some more coffee?",
        answers: [
            { id: 0, text: "Do you?", check: 0 },
            { id: 1, text: "Do you like?", check: 0 },
            { id: 2, text: "You'd like", check: 0 },
            { id: 3, text: "Would you like?", check: 1 }
        ]
    },
    {
        id: 8,
        question: " The house was empty. There ..... there.",
        answers: [
            { id: 0, text: "wasn't nobody", check: 0 },
            { id: 1, text: "was anybody", check: 0 },
            { id: 2, text: "was somebody", check: 0 },
            { id: 3, text: "was nobody", check: 1 }
        ]
    },
    {
        id: 9,
        question: "If I were rich, I ..... buy a house on the beach.",
        answers: [
            { id: 0, text: "will", check: 0 },
            { id: 1, text: "would", check: 1 },
            { id: 2, text: "should", check: 0 },
            { id: 3, text: "wish", check: 0 }
        ]
    },
    {
        id: 10,
        question: " When she arrived, he .....",
        answers: [
            { id: 0, text: "already left", check: 0 },
            { id: 1, text: "has already left", check: 0 },
            { id: 2, text: "had already left", check: 1 },
            { id: 3, text: "left", check: 0 }
        ]
    },
    {
        id: 11,
        question: "I forgot ..... the lights before I left.",
        answers: [
            { id: 0, text: "to turn off", check: 1 },
            { id: 1, text: "put off", check: 0 },
            { id: 2, text: "turning off", check: 0 },
            { id: 3, text: "shot", check: 0 }
        ]
    },
    {
        id: 12,
        question: "The room can't be dirty she .....",
        answers: [
            { id: 0, text: "is just clean it.", check: 0 },
            { id: 1, text: "have just cleaned it.", check: 0 },
            { id: 2, text: "just clean it.", check: 0 },
            { id: 3, text: "has just cleaned it.", check: 1 }
        ]
    },
    {
        id: 13,
        question: "Has Mrs. Smith arrived ..... ?",
        answers: [
            { id: 0, text: "yet", check: 1 },
            { id: 1, text: "still", check: 0 },
            { id: 2, text: "now", check: 0 },
            { id: 3, text: "already", check: 0 }
        ]
    },
    {
        id: 14,
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
        id: 15,
        question: "It's no use ..... to him. He doesn't listen.",
        answers: [
            { id: 0, text: "speaking", check: 1 },
            { id: 1, text: "to speak", check: 0 },
            { id: 2, text: "have spoken", check: 0 },
            { id: 3, text: "spoke", check: 0 }
        ]
    },
    {
        id: 16,
        question: "..... is your house from here?",
        answers: [
            { id: 0, text: "How much", check: 0 },
            { id: 1, text: "How far", check: 1 },
            { id: 2, text: "How long", check: 0 },
            { id: 3, text: "How many", check: 0 }
        ]
    },
    {
        id: 17,
        question: "You can watch TV ..... you like.",
        answers: [
            { id: 0, text: "whenever", check: 1 },
            { id: 1, text: "soon", check: 0 },
            { id: 2, text: "whatever", check: 0 },
            { id: 3, text: "always", check: 0 }
        ]
    },
    {
        id: 18,
        question: "This house is quite old. It ..... in 1910.",
        answers: [
            { id: 0, text: "built", check: 0 },
            { id: 1, text: "had built", check: 0 },
            { id: 2, text: "has built", check: 0 },
            { id: 3, text: "was built", check: 1 }
        ]
    },
    {
        id: 19,
        question: "Don't ..... me. I'll be back late.",
        answers: [
            { id: 0, text: "waiting for", check: 0 },
            { id: 1, text: "wait for", check: 1 },
            { id: 2, text: "wait to", check: 0 },
            { id: 3, text: "hope for", check: 0 }
        ]
    },
    {
        id: 20,
        question: "That's the ..... of my worries, it'll never happen.",
        answers: [
            { id: 0, text: "last", check: 0 },
            { id: 1, text: "less", check: 0 },
            { id: 2, text: "least", check: 1 },
            { id: 3, text: "fewer", check: 0 }
        ]
    }
];

module.exports = {
    testObj
};
