const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4000/api/",
  },
  env:{
    token:'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODA1ZjY3MzE0ZDA5ZmMxNjU4OTQwNDUwZmRkYjY2ODFlNDM2OTBkNGZlYmJiZjQzOTJiMTQ1NzdkZmEwYjdjODYzN2RhNzdkYTZhZGU4ODYiLCJpYXQiOjE2NjI0ODkxMDEuNDE1NzM0LCJuYmYiOjE2NjI0ODkxMDEuNDE1NzM2LCJleHAiOjE2OTQwMjUxMDEuNDA0Nzk0LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.ckOdmX0V2NUC1l2aH_adCmvn7uhkoQb6V2O01UaxaBa-hBOvTT0Z7o5z4BhgzmM05Mqn7pIePrrk5s9du-fgxcMFyDDfMnAm77IZ_Rr-LjCRt29GVSkPFfClkF1Ov_M3nL6NHcM3BPQcRBJkPYP9GYHGawwVjmYRh6dX5BbhuUCmsS8V-1uEJ98a1ccId_ZJ9x0bnbOEoTm4xYxCwOIwd_bDTOSp7LH5i00I-kPQbOTRLozrrs6UPg4GJRi8ZQ0HrIeN38y_ljbthUqD5Uk9uvDjL27JHReCa1ivGd_r8iru_oibbRfiWDOp6xrn-GwqBWH09TI1hcNEgmuhPpqk632ZpEe0Iogd9zeA5I8KJ8TZPL8AFEYgyvueftbIjiEimK4M3IHpcXWZU0Xr3PPkCBgA-6k2rr9BmhPmN7I8iJ3FcyULKJTql5U4kvZi38aiThSQePLGxRKn2Qhb1-GEDJ7CDOk-s7MayaPZbJ4-XGeqGkbpOoxKhxz5K7wZVbhfnQrmmTvEFfkVNFPr7QukX4-ppIaTsOYOWJXg61ymCXCXIQ2wqCpNzX_wqvzvZCyvLP6HzpcLygWS9gqEt-3FBVQ5ABa06NfX3o-7uwjxgL_Z_-FAHcnSbqaUEIq1p97SXPuABZ8TtWRXHFqrqi57J246m3QW2RTmMG-WQ4SgBzc',
    email:'test@gmail.com',
    password:'password'
  }
});
