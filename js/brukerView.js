function surveySelect() {
  let html = "";
  let activeSurveys = model.data.activeSurveys;
  for (let i = 0; i < activeSurveys.length; i++) {
    const survey = getSurveyById(activeSurveys[i].surveyId);
    html += /*HTML*/ `
        <div class="survey" onclick="brukerView(${survey.id})">
          <p>${survey.title}</p>
        </div>
      `;
  }
  app.innerHTML = html;
}

function brukerView(selected) {
  let app = document.getElementById("app");
  const surveys = model.data.surveys;
  if (surveys[selected].surveyStatus == "active") {
    let html = `
    <div>
        <h1>${surveys[selected].title}</h1><hr>
        <h3>${surveys[selected].questions[surveys[selected].activeQuestion].question}</h3><br>`;
    for (let index = 0; index < surveys[selected].questions[surveys[selected].activeQuestion].alternatives.length; index++) {
      html += `<div>${surveys[selected].questions[surveys[selected].activeQuestion].alternatives[index].answer}</div>`;
    }
    if (surveys[selected].questions[surveys[selected].activeQuestion].ownAnswer == true) {
      html += `<input type="text" placehodler="Skriv inn eget svar"></input>`;
    }
    html += `

          <div>Neste spørsmål</div>
          </div>
        `;
    app.innerHTML = html;
  } else if (surveys[selected].surveyStatus == "unanswered") {
    let app = document.getElementById("app");
    html = `
          <div>
              <div>Ikke alle spørsmål er besvart, ønsker du å gå tilbake?</div>
              <div>Gå tilbake</div>
              <div>Avslutt alikevel</div>
          </div>
          `;
    app.innerHTML = html;
  } else if (surveys[selected].surveyStatus == "concluded") {
    let app = document.getElementById("app");
    html = `
            <div>
                <div>Undersøkelsen er nå avsluttet, takk for svar.</div>
                <div>Avslutt</div>
            </div>
            `;
    app.innerHTML = html;
  }
}
