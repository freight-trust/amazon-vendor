require("dotenv").config();
require("../config/db.config");
const User = require("../models/User.model");
const Product = require("../models/Product.model");
const Review = require("../models/Review.model");
const faker = require("faker");

const userIds = [];
const userN = 30;
const productN = 5;
const reviewN = 5;

Promise.all([User.deleteMany(), Product.deleteMany()])
  .then(() => {
    for (let i = 0; i < userN; i++) {
      const user = new User({
        email: faker.internet.email(),
        password: "1234567890",
        name: faker.name.findName(),
        address: faker.address.streetAddress(),
        image: faker.image.avatar(),
      });
      user
        .save()
        .then((u) => {
          console.log(u.email);
          userIds.push(u.id);
          for (let i = 0; i < productN; i++) {
            const product = new Product({
              name: faker.commerce.productName(),
              description: faker.lorem.paragraph(),
              price: faker.commerce.price(),
              image: faker.image.image(),
              user: u._id,
            });
            product
              .save()
              .then((p) => {
                console.log(p.name);
                if (userIds.length >= 2) {
                  for (let i = 0; i < reviewN; i++) {
                    const review = new Review({
                      title: faker.lorem.sentence(),
                      description: faker.lorem.paragraph(),
                      score: Math.floor(4 * Math.random() + 1),
                      product: p._id,
                      user: userIds.filter((u) => u != p.user)[
                        Math.floor(Math.random() * (userIds.length - 2))
                      ],
                    });
                    review.save().then((r) => {
                      console.log(r.title);
                    });
                  }
                }
              })
              .catch((e) => console.log(e));
          }
        })
        .catch((e) => console.log(e));
    }
  })
  .catch((e) => console.log(e));
