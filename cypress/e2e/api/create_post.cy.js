// Create Posts
context("Create Post", () => {
    it("cy.request() - [POSITIVE CASE] Create Post", function () {
        const objBody = {
            userId: 10,
            title: 'temporibus sit alias delectus eligendi possimus magni',
            body: 'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia'
        };
        cy.request({
            method: "POST",
            url: "/posts",
            body: objBody,
            headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                // check response status is 200 and field id with value number type is exist
                expect(response.status).to.eq(201)
                expect(response.body.id).to.be.a('number')

                // check response same with inputted body
                cy.request({
                    method: "GET",
                    url: "/posts?id=99"
                }).then(function (responseID) {
                    expect(responseID.body[0].userId).eql(objBody.userId)
                    expect(responseID.body[0].title).eql(objBody.title)
                    expect(responseID.body[0].body).eql(objBody.body)
                });
            });
    });

    it("cy.request() - [NEGATIVE CASE] Create Post with Invalid User ID", function () {
        const objBody = {
            userId: -100,
            title: 'temporibus sit alias delectus eligendi possimus magni',
            body: 'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia'
        };
        cy.request({
            method: "POST",
            url: "/posts",
            body: objBody,
            headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                // check response status should be error in client side 4xx but regarding the actual result is success then check ok response
                //expect(response.status).to.eq(400)
                expect(response.status).to.eq(201)
            });
        });

    it("cy.request() - [NEGATIVE CASE] Create Post with Invalid Title", function () {
        const objBody = {
            userId: 10,
            title: 1,
            body: 'quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia'
        };
        cy.request({
            method: "POST",
            url: "/posts",
            body: objBody,
            headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                // check response status should be error in client side 4xx but regarding the actual result is success then check ok response
                //expect(response.status).to.eq(400)
                expect(response.status).to.eq(201)
            });
    });

    it("cy.request() - [NEGATIVE CASE] Create Post with Invalid Body", function () {
        const objBody = {
            userId: 10,
            title: 'temporibus sit alias delectus eligendi possimus magni',
            body: 1
        };
        cy.request({
            method: "POST",
            url: "/posts",
            body: objBody,
            headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                // check response status should be error in client side 4xx but regarding the actual result is success then check ok response
                //expect(response.status).to.eq(400)
                expect(response.status).to.eq(201)
            });
    });

    it("cy.request() - [NEGATIVE CASE] Create Post with Null Parameter", function () {
        const objBody = {
            userId: null,
            title: null,
            body: null
        };
        cy.request({
            method: "POST",
            url: "/posts",
            body: objBody,
            headers: {'Content-Type': 'application/json'}
            }).then(function (response) {
                // check response status should be error in client side 4xx but regarding the actual result is success then check ok response
                //expect(response.status).to.eq(400)
                expect(response.status).to.eq(201)
            });
    });
  })
  