// Get Posts
context("Get list of Posts", () => {
    it("cy.request() - [POSITIVE CASE] Get List of Posts", function () {
      cy.request({
         method: "GET",
         url: "/posts",
         }).then(function (response) {
            // check response status is 200
            expect(response.status).to.eq(200)

            for (let i = 0; i < 3; i++) {
                // check userId is integer
                expect(response.body[i].userId).to.be.a('number')
                expect(response.body[i].userId % 1).to.equal(0)

                // check id is integer
                expect(response.body[i].id).to.be.a('number')
                expect(response.body[i].id % 1).to.equal(0)

                // check title and body is string
                expect(response.body[i].title).to.be.a('string')
                expect(response.body[i].body).to.be.a('string')
            }
            
         });
      });
  })
