function addAlternative() {
  model.inputs.adminPanel.questionAlt.push("");
  updateView();
}

function submitSurvey() {
  let survey = {
    id: model.data.surveys.length,
    title: model.inputs.adminPanel.question,
    link: "link.com/ABCDEF456",
    startDate: model.inputs.adminPanel.startDate,
    endDate: model.inputs.adminPanel.endDate,
    users: 0,
    surveyStatus: "active",
    activeQuestion: 0,
    isActive: true,
    questions: [
      //ville vært en for loop som legger til flere questions her men er ikke mulighet til det enda
      {
        question: model.inputs.adminPanel.question,
        questionId: 0,
        ownAnswer: false,
        isAnswered: false,
        alternatives: [],
      },
    ],
  };

  for (let i = 0; i < model.inputs.adminPanel.questionAlt.length; i++) {
    const alternative = model.inputs.adminPanel.questionAlt[i];
    survey.questions[0].alternatives.push({
      answer: alternative,
      totalAnswers: 0,
    });
  }

  model.data.activeSurveys.push({
    surveyId: model.data.surveys.length,
  });
  model.data.surveys.push(survey);
  updateView();
}
