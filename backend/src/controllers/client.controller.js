const Product = require('../models/product.model');
const ProductsStat = require('../models/productStats.model');
const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');
const getCountryIso3 = require('country-iso-2-to-3');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        const productsWithStats = await Promise.all(
            products.map(async (product) => {
                const stat = await ProductsStat.find({
                    productId: product._id
                })
                return {
                    ...product._doc,
                    stat
                }
            })
        )
        res.status(200).json(productsWithStats);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
const getCustomers = async (req, res) => {
    try {
        const customers = await User.find({ role: 'user' }).select('-password')
        res.status(200).json(customers)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getTransaction = async (req, res) => {
    try {
        const { page = 1, pageSize = 20, search = "", sort = null } = req.query;

        const generateSort = () => {
            const sortParsed = JSON.parse(sort);
            const sortFormatted = {
                [sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1
            }
            return sortFormatted
        }

        const sortFormatted = Boolean(sort) ? generateSort() : {};

        const transactions = await Transaction.find({
            $or: [
                { cost: { $regex: new RegExp(search, "i") } },
                { userId: { $regex: new RegExp(search, "i") } },

            ]
        }).sort(sortFormatted).skip(page * pageSize).limit(pageSize);

        const total = await Transaction.countDocuments({
            name: { $regex: search, $options: "i" }
        })

        res.status(200).json({ transactions, total })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getGeography = async (req, res) => {
    try {
        const users = await User.find();

        const mappedLocations = users.reduce((acc, { country }) => {
            const countryISO3 = getCountryIso3(country);
            if (!acc[countryISO3]) {
                acc[countryISO3] = 0;
            }
            acc[countryISO3]++;
            return acc;
        }, {});

        const formattedLocations = Object.entries(mappedLocations).map(
            ([country, count]) => {
                return { id: country, value: count };
            }
        );

        res.status(200).json(formattedLocations);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
module.exports = { getProducts, getCustomers, getTransaction, getGeography }