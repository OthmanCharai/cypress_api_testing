const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4000/api/",
  },
  env:{
    token:' eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYzM3ODcyOTIxZmNhMDFjNmJiNDA0OTJjZGJhMWQwZDllNWY2NzI0ZWI5MzQ0YjE2NWM5MzUyYzgzMzkzMzdlYTQxNmRlMTA1MzIyNGFlYWIiLCJpYXQiOjE2NjI0NjAxMTkuNDU0MDYsIm5iZiI6MTY2MjQ2MDExOS40NTQwNjIsImV4cCI6MTY5Mzk5NjExOS40NDM4OTcsInN1YiI6IjIiLCJzY29wZXMiOltdfQ.WiV08vFBXdlUTnPPqdVaf-hlVovZvFvtBePDl63nGuwpNGMum3NMyPMLioLeYm9-g7svllEBRjxL0mcV2RZ0UpqQz4sX3oYM3sHns5as_JAQuZz26Fc8iDRj9HAwr_Sp34WIgpqWZuMwWG-ORtwA9gtBx18moE7eWg2jZkRLa4qAEy-5datgkl6HqhaR9Bjin_D_y0AeNgbIaW-bScYwcJ_RVt3V_8aOLV-RnYe1eIezOF3WKGhWi5dhzlrxswJLdNsGUNORHW_jrSt-Ewu7PiveB_bx0RkVf-ycnQE2JlAxA7dbsCkFZT-NrfRd1iJURE1QccpQpNN6uOEnxQXWCN9ZuxbqOaPNyXS9NG9grGwJKnEquSp5S0zQXor0WsSfjVW0pUSLzcTKzcz8vtntgtLae7HQEJBojbHpskwXV9P1UkRWLHOX53q8hRREUiQTBZg8V-7DyDMXtxfd_pTtuRYdUdCxEJpn0H20oV_x4pXzGMKpa-91yRr7Hj3ZnAYbykix9d0aKv4bdkUjUtYG_ORyBmvbsIEPB4fRzBdWjsiDSJUhGdZC13uLy3rmLVejTP3ZHVEhH_3Zp0Xg5aXhQLJCq4_Pyun00U8HD6Guhlo3CKSGoX-rmC7gB_31YgjQ-9RN8VunMLqfVOJ21ED8volNzFRpGzHAzyHI_yDYqqw',
    email:'test@gmail.com',
    password:'password'
  }
});
