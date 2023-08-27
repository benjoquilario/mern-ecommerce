import data from "../data"
import Product from "../models/product"
import User from "../models/user"

/**
 * Insert the fake data to the database
 * @routes GET /api/seed
 * @access Private
 */
export const seeder = () => {
  Product.insertMany(data.products)
  User.insertMany(data.users)
}
