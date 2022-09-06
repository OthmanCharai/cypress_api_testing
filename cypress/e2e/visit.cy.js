describe(" inach backend testing", () => {
  let i;
  let flager_id = 1;
  let action_id = 202;

  let fetch_web_hook_url =
    "fetch-web-hook/" + action_id + "/flagger/" + flager_id;
  let bash_info_url = "queue/info";

  it("fetches Todo items - GET", () => {
    for (i = 0; i < 100; i++) {
     cy.wait(1000) // wait for 2 seconds

      cy.request({
        method: "POST",
        url: fetch_web_hook_url,
        body: { post_id: "1" },
        headers: {
          Authorization: "Bearer" + Cypress.env("token"),
        },
      }).as("queueRequest");
      cy.get("@queueRequest").then((todos) => {
        expect(todos.status).to.eq(200);
        console.log(todos.body.Message);
      });
    }
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
