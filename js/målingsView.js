const surveyView = (i) => {
  model.app.currentPage = "surveyPanel";
  let survey = model.data.surveys;
  document.getElementById("app").innerHTML = /*HTML*/ `
        ${createSurveyMenu(i)}
        <div style="border: 2px solid white;margin-top: 10px;">
            <div style="margin-left:10px;">Statistikk</div>
            <div class="surveyView">
                ${listQuestions(i)}
            </div>
        </div>
        <button onclick="model.app.currentPage='adminPanel', updateView()">Tilbake</button>
    `;
};

const createSurveyMenu = (i) => {
  return /*HTML*/ `
    <div>${model.data.surveys[i].title}</div>
    <div class="surveyMenu">
        <div>Start Dato: ${model.data.surveys[i].startDate}</div>
        <div>Slutt Dato: ${model.data.surveys[i].endDate}</div>
        <div>Kopier Lenke</div>
        <div>Eksporter Resultat</div>
        <div>Avslutt Måling</div>
    </div>
    `;
};

const listQuestions = (i) => {
  const questions = model.data.surveys[i].questions;
  questionList = "";
  for (let q = 0; q < questions.length; q++) {
    questionList += /*HTML*/ `
        
        <div class="questionList">
            ${questions[q].question} - Antall svar: ${listAlternatives(i, q)}
        </div>
            
        `;
  }
  return questionList;
};

const listAlternatives = (i, q) => {
  const alternatives = model.data.surveys[i].questions[q].alternatives;
  alternativesList = "";
  for (let qa = 0; qa < alternatives.length; qa++) {
    alternativesList += /*HTML*/ `
        <div style="margin-left:10px;">
            ${alternatives[qa].answer} = 
            ${alternatives[qa].totalAnswers}
        </div>
        
        `;
  }
  return alternativesList;
};

//Kopier, Eksporter og Avslutt måling skal være onclicks, l8er.
