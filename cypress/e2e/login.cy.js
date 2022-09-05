const { config } = require("cypress/types/bluebird");

describe(" inach backend testing", () => {
  
  
    let login_url =
      "user/login";
  
    it("fetches Todo items - GET", () => {
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
            console.log(todos.body.token);
        });
     
    });
  });
  