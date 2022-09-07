describe(" inach backend testing", () => {
  let i;
  let action_id = 101;
  let token_api='';
  let fetch_web_hook_url ='';
  let login_url =
  "user/login";
  let bash_info_url = "queue/info";
  before(() => {
    cy.request({
      method: "POST",
      url: login_url,
      body: { 
        'email':Cypress.env('email'),
        'password':Cypress.env('password')
       },
       headers: {
        Accept:
          " application/json",
          Content :' application/json'
      }, 
    }).as("queueRequest");
    cy.get("@queueRequest").then((todos) => {
      token_api=todos.body.token;
    });
  })
  
  
  it("fetches Todo items - GET", () => {
    for (i = 1; i <= 100; i++) {
      cy.wait(1000) // wait for 2 seconds
      fetch_web_hook_url =
      "fetch-web-hook/" + action_id + "/flagger/" + i;
      //alert(token_api)
      cy.request({
        method: "POST",
        url: fetch_web_hook_url,
        body: { post_id: "1" },
        headers: {
          Authorization: "Bearer " + token_api,
        },
      }).as("queueRequest");
      cy.get("@queueRequest").then((todos) => {
        expect(todos.status).to.eq(200);
        console.log(todos.body.Message);
      });
    }
    cy.wait(6000) // wait for 2 seconds
    
    cy.request({
      url: bash_info_url,
      headers: {
        Authorization: "Bearer " + token_api,
      },
    }).as("todoRequest");

    cy.get("@todoRequest").then((todos) => {
      expect(todos.status).to.eq(200);
    });
    
  });
});
