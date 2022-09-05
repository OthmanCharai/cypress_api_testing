describe(" inach backend testing", () => {
  let i;
  let flager_id = 1;
  let action_id = 1;

  let fetch_web_hook_url =
    "fetch-web-hook/" + action_id + "/flagger/" + flager_id;
  let bash_info_url = "queue/info";

  it("fetches Todo items - GET", () => {
    for (i = 0; i < 100; i++) {
      cy.request({
        method: "POST",
        url: fetch_web_hook_url,
        body: { post_id: "1" },
        headers: {
          Authorization:
            "Bearer"+Cypress.env('token'),
        },
      }).as("queueRequest");
      cy.get("@queueRequest").then((todos) => {
        expect(todos.status).to.eq(200);
        console.log(todos.body.Message);
        
      });
    }
    cy.request({
      url: bash_info_url,
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiYjVhOWVmYTg2NjZmM2Y3MWU4ZDg5OGFmZWJiZDEyMzM2Njk5NDA5YzBlZjBlMDM0M2Q0MWRjYzQ3OTE1Nzk2MTFiODJkNzc4N2Y1ZDM1NDgiLCJpYXQiOjE2NjIzNjgxNjIuNzU2MzQsIm5iZiI6MTY2MjM2ODE2Mi43NTYzNDYsImV4cCI6MTY5MzkwNDE2Mi43MzcxOTQsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.G3m5rODKe6E8ccV02utMyTpen5lMnFVUJvS2PQMwp975z6838RG6iIqRYAT9a1P8UxfbVK_5zmEhK78FdI7XEeIpewgFOQIJ_OqRCfQjMm-31t-uHHJAZHUMClUs9a5tii9XQnNUyhcunZ4bnO4_wRBdMmRSv8XApzeXY3qhuMi4oz7PyMq2yQd0ujRDNPj0z1WP37JS3xPjxy0guzveIh_VYMlcnr1I5YHFZgWYUgTnbpQqcgSRGMFX6x3LS6cBH_94w9vSWM2TidOY5-ay9WwemghwN4APFJvoMdfZJ4lDjEr6gaZMZ4E2o2WAJdZbziHnBHH2ZhMN4QVLxwK7ezK3KChAvK-VH_Spzq7i5vaUsYY4eUuYN3z_FSZP3LiuyQK-JwXw1VRZvaij5yTBuNUSsfbK0vsd3uC-kpr-V-A_f5CTiv4GsdklSxbFkSGCHa84iOBut65Q1wkuD1EW_J4GZnj8GNe1zEPfS_9bUeEpQwezfcr6_9YMKCizQrv4oMHi4SYljxSiRwQYJuEQ5Aa3LJObmRQTOTp4hyIWlHUDUnxBPDDl7S3PBEsZ7SKRf9Gou8IAs9M9IIUcj3PvN9jQJw2Fjm1ODEkxbs42x41Ckr1PtPmwtV7DgLuEFwtRJq8JyYU-N0a9xjNeDt0L3ppvfUmwvp9EAa9QYOxwOjA",
      },

    }).as("todoRequest");

    cy.get("@todoRequest").then((todos) => {
      expect(todos.status).to.eq(200);
    });
  });
});
