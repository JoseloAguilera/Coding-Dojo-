const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number("+595-97#-###-###");
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.name();
        this.direction = {
            street: faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        };
    }
}

app.get("/api/users/new", (req, res) => {
    newUser = new User();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    let newCompany = new Company();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    newUser = new User();
    newCompany = new Company();
    res.json({ user: newUser, company: newCompany });
});


