describe(" inach backend testing", () => {
  let i;
  let flager_id=1;
  let action_id=1;
  
  let fetch_web_hook_url="fetch-web-hook/"+action_id+"/flagger/"+flager_id
  let bash_info_url="queue/info";

  it("fetches Todo items - GET", () => {
    for (i = 0; i <100; i++) {
      cy.request('POST',fetch_web_hook_url,{post_id:'1'}).as("queueRequest");
      cy.get("@queueRequest").then((todos) => {
        expect(todos.status).to.eq(200);
        assert.isArray(todos.body, "Response it's 200");
      });
      
    }
    cy.request('GET',bash_info_url).as("todoRequest");
    cy.get("@todoRequest").then((todos) => {
      expect(todos.status).to.eq(200);
      assert.isArray(todos.body, "Response it's 200");
    });
    })
});
