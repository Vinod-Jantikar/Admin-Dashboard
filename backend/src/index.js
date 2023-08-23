const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv')
const helmet = require('helmet');
const morgan = require('morgan');
const generalRoutes = require('./routes/general.routes');
const clientRoutes = require('./routes/client.routes');
const salesRoutes = require('./routes/sales.routes');
const managementRoutes = require('./routes/management.routes');


// Data imports

const User = require('./models/user.model');
const Products = require('./models/product.model');
const ProductsStat = require('./models/productStats.model');
const Transaction = require('./models/transaction.model')
const OverAllStat = require('./models/overAllStat.model');
const {dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat} = require("./data/index.js")

// CONFIGURATION
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: 'cross-origin'}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

// ROUTES
app.use('/client', clientRoutes);
app.use('/general', generalRoutes);
app.use('/management', managementRoutes);
app.use('/sales', salesRoutes);

// MONGOOSE SETUP 

const PORT = process.env.PORT || 6333;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(PORT, () => console.log(`Server running on ${PORT}`));
    // ADD ONLY ONCE
    // User.insertMany(dataUser);
    // Products.insertMany(dataProduct);
    // ProductsStat.insertMany(dataProductStat)
    // Transaction.insertMany(dataTransaction)
    // OverAllStat.insertMany(dataOverallStat)
}).catch((error) => console.log(`${error} did not connect`))