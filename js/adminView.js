function adminView() {
  let app = document.getElementById("app");
  let html = /*HTML*/ `
  <h1 style="text-align:center;">Admin Panel</h1>
  <div class="adminpanel">
    <div class="activesurveys">
      <h3>Active Surveys</h3>
      ${activeSurveysPanel()}
    </div>
    ${createSurveyPanel()}
    <button class="userpanelbutton" onclick="surveySelect()">Brukerpanel</button>
  </div>
    
  `;
  app.innerHTML = html;
}

function activeSurveysPanel() {
  let html = "";
  let activeSurveys = model.data.activeSurveys;
  for (let i = 0; i < activeSurveys.length; i++) {
    const survey = getSurveyById(activeSurveys[i].surveyId);
    html += /*HTML*/ `
      <div class="survey" onclick="surveyView(${survey.id})">
        <p>${survey.title}</p>
      </div>
    `;
  }
  return html;
}

function createSurveyPanel() {
  let alternatives = model.inputs.adminPanel.questionAlt;
  let alternativesHTML = "";
  for (let i = 0; i < alternatives.length; i++) {
    alternativesHTML += /*HTML*/ `
      <input onchange="model.inputs.adminPanel.questionAlt[${i}] = this.value" value="${model.inputs.adminPanel.questionAlt[i]}" placeholder="Alternative ${i + 1}" type="text" />
    `;
  }

  let html = /*HTML*/ `
    <div class="newsurvey">
      <h3>Create new Survey</h3>
      <input placeholder="Question" value="${model.inputs.adminPanel.question}" type="text" onchange="model.inputs.adminPanel.question = this.value"/>
      ${alternativesHTML}
      <div class="surveyCheckbox">
        <input type="checkbox" name="ownAlternative" onchange="model.inputs.adminPanel.ownAnswer = this.checked"/>
        <p>Can give own alternative</p>
      </div>
      <button onclick="addAlternative()">+ Add alternative</button>
      <button onclick="showDatePopup()">Next</button>
    </div>
  `;

  return html;
}

function showDatePopup() {
  let app = document.getElementById("app");
  let html = /*HTML*/ `
    <div class="datepopup">
      <h3>When does the survey take place?</h3>
      <p>Start Date</p>
      <input type="date" onchange="model.inputs.adminPanel.startDate = this.value" />
      <p>End Date</p>
      <input type="date" onchange="model.inputs.adminPanel.endDate = this.value"/>
      <button onclick="submitSurvey()">Create Survey</button>
    </div>
  `;
  app.innerHTML += html;
}
