const router = require("express").Router();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const urlMiddleware = require("../middleware/urlMiddleware");
const bodyparser = require("body-parser");
const res = require("express/lib/response");
//Generate Random 16 character url
const genUrl = () => {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 16; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};

const connectionUri =
  "mongodb+srv://toasterpwn:MApf8UK3zIe9DFUc@urlshortener.3j1hb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(connectionUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const db = mongoose.connection;

//create url db schema
const urlSchema = new mongoose.Schema({
  original_url: String,
  short_url: String,
});

//quick create url with random string and put in database
const quickCreateUrl = (original_url) => {
  const newUrl = new urlModel({
    original_url: original_url,
    short_url: genUrl(),
  });

  newUrl.save();
  console.log("new url");
  console.log(newUrl);
  return newUrl;
};
//check if url is in database, if not create it
const checkQuickUrl = async (original) => {
  const url = await urlModel.findOne({ original_url: original });
  if (url) {
    return { message: "url already exists" };
  }
  newurl = quickCreateUrl(original);
  return newurl;
};

const createCustomUrl = (original_url, short_url) => {
  const newUrl = new urlModel({
    original_url: original_url,
    short_url: short_url,
  });
  newUrl.save();
  return newUrl;
};

const checkCustomUrl = async (original, short) => {
  const url = await urlModel.findOne({ original_url: original });
  if (url) {
    return { message: "url already exists" };
  }
  newurl = createCustomUrl(original, short);
  return newurl;
};

const redirectUrl = async (short) => {
  const url = await urlModel.findOne({ short_url: short });
  if (url) {
    return url.original_url;
  } else {
    return "url not found";
  }
};

const getUrlList = async () => {
  const url = await urlModel.find();
  return url;
};

const urlModel = mongoose.model("url", urlSchema);

//connect to db
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

router.post("/quick", async (req, res) => {
  const original = req.body.original_url;
  urlMiddleware.validateUrl(req, res, async () => {
    const url = await checkQuickUrl(original);
    console.log(url);
    res.json(url);
  });
});

router.post("/custom", (req, res) => {
  const original_url = req.body.original_url;
  const short_url = req.body.short_url;
  urlMiddleware.validateUrl(req, res, async () => {
    const url = await checkCustomUrl(original_url, short_url);
    console.log(url);
    res.json(url);
  });
});

router.get("/url/:short_url", async (req, res) => {
  const short_url = req.params.short_url;
  const url = await redirectUrl(short_url);
  console.log(url);
  if (url == "url not found") {
    res.status(404).json({ message: "url not found" });
  } else {
    res.redirect(url);
  }
});

router.get("/list", async (req, res) => {
  console.log(req.body);
  const url = await getUrlList();
  console.log("List");
  res.json(url);
});

module.exports = router;
