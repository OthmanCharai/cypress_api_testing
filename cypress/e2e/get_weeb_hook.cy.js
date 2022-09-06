describe(" inach backend testing", () => {
 
    let bash_info_url = "queue/info";
  
    it("fetches Todo items - GET", () => {
    
      cy.wait(2000) // wait for 2 seconds
      
      cy.request({
        url: bash_info_url,
        headers: {
          Authorization: "Bearer" + Cypress.env("token"),
        },
      }).as("todoRequest");
  
      cy.get("@todoRequest").then((todos) => {
        expect(todos.status).to.eq(200);
      });
      
    });
  });
  