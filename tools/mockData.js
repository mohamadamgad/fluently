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
            { id: 2, text: "In case", check: 1 },
            { id: 0, text: "Unless", check: 0 },
            { id: 1, text: "Even", check: 0 },
            { id: 3, text: "Although", check: 0 }
        ]
    }
];

module.exports = {
    testObj
};
