# AmazHAck API

## Tasks:

- Models
  - Review model
  - Update user and product models with virtual fields
    - User detail should return his products too
    - Product detail should return its reviews
- Seeds
  - Update seeds to generate Reviews
- Endpoints
  - Products:
    - List products as buyer
      - This shouldn't return your own products if you have them
    - List the products a user is selling
    - Search for products
  - Reviews:
    - Add a review
      - Note that you can't leave reviews for your own product
    - Delete a review you wrote
    - Edit a review you wrote
