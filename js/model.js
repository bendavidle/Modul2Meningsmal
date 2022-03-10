const model = {
  app: {
    currentPage: "adminPanel", //adminPanel, userPanel, surveyPanel
    currentUser: "Admin", //Admin eller User
  },

  inputs: {
    adminPanel: {
      question: "",
      questionAlt: [""],
      ownAnswer: false,
      startDate: "",
      endDate: "",
      export: {
        pdf: false,
        word: false,
        png: false,
        jpeg: false,
        cakeDiagram: false,
        column: false,
        percent: false,
      },
      filename: "",
      endSurvey: false,
    },
    userPanel: {
      answer: [""],
      ownAnswer: [""],
      amountAnswered: 0,
      isAllAnswered: false,
    },
  },

  data: {
    activeSurveys: [{ surveyId: 0 }, { surveyId: 1 }, { surveyId: 2 }],

    surveys: [
      {
        id: 0,
        //Tittel skal også bli pushet fra adminpanel, men vi så at vi ikke hadde lagt opp dette i screenshots
        title: "Eksempelmåling 1",
        link: "link.com/ABCDEF123",
        startDate: "01.01.2022",
        endDate: "01.02.2022",
        users: 0,
        surveyStatus: "active",
        activeQuestion: 0,
        isActive: true,
        questions: [
          {
            question: "Spørsmål 1",
            questionId: 0,
            ownAnswer: false,
            isAnswered: false,
            alternatives: [
              {
                answer: "A",
                totalAnswers: 1,
              },
              {
                answer: "B",
                totalAnswers: 20,
              },
              {
                answer: "C",
                totalAnswers: 40,
              },
            ],
          },
          {
            question: "Spørsmål 2",
            questionId: 1,
            ownAnswer: true,
            isAnswered: false,
            alternatives: [
              {
                answer: "A",
                totalAnswers: 4,
              },
              {
                answer: "B",
                totalAnswers: 1,
              },
              {
                answer: "C",
                totalAnswers: 23,
              },
              /*{
                Eget Alternativ
                answer: ["", "", ""],
                totalAnswers: 343,
              },*/
            ],
          },
          //...
        ],
      },
      {
        id: 1,
        title: "Eksempelmåling 2",
        link: "link.com/ABCDEF456",
        startDate: "01.06.2022",
        endDate: "24.12.2022",
        users: 0,
        surveyStatus: "active",
        activeQuestion: 0,
        isActive: true,
        questions: [
          {
            question: "Spørsmål 1",
            questionId: 0,
            ownAnswer: true,
            isAnswered: false,
            alternatives: [
              {
                answer: "A",
                totalAnswers: 0,
              },
              {
                answer: "B",
                totalAnswers: 0,
              },
              {
                answer: "C",
                totalAnswers: 0,
              },
            ],
          },
          {
            question: "Spørsmål 2",
            questionId: 1,
            ownAnswer: true,
            isAnswered: false,
            alternatives: [
              {
                answer: "A",
                totalAnswers: 0,
              },
              {
                answer: "B",
                totalAnswers: 0,
              },
              {
                answer: "C",
                totalAnswers: 0,
              },
              /*{
                //Eget Alternativ
                answer: ["", "", ""],
                totalAnswers: 3,
              },*/
            ],
          },
          //...
        ],
      },
      {
        id: 2,
        title: "Eksempelmåling 3",
        link: "link.com/ABCDEF789",
        startDate: "31.02.2024",
        endDate: "01.05.2024",
        users: 0,
        surveyStatus: "active",
        activeQuestion: 0,
        isActive: true,
        questions: [
          {
            question: "Spørsmål 1",
            questionId: 0,
            ownAnswer: false,
            isAnswered: false,
            alternatives: [
              {
                answer: "ggg",
                totalAnswers: 0,
              },
              {
                answer: "hhh",
                totalAnswers: 0,
              },
              {
                answer: "iii",
                totalAnswers: 0,
              },
            ],
          },
          {
            question: "Spørsmål 2",
            questionId: 1,
            ownAnswer: true,
            isAnswered: false,
            alternatives: [
              {
                answer: "Ddd",
                totalAnswers: 0,
              },
              {
                answer: "Eee",
                totalAnswers: 0,
              },
              {
                answer: "Fff",
                totalAnswers: 0,
              },
              {
                //Eget Alternativ
                answer: ["", "", ""],
                totalAnswers: 3,
              },
            ],
          },
          //...
        ],
      },
    ],
  },
};
