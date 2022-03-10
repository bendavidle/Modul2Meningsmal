function getSurveyById(surveyId) {
  const surveys = model.data.surveys;
  for (let i = 0; i < surveys.length; i++) {
    const survey = surveys[i];
    if (survey.id === surveyId) {
      return survey;
    }
  }
}
