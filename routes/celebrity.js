const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

router.get("/celebrities", async (req, res) => {
    const celebrities = await Celebrity.find();
    console.log(celebrities);
    res.render("celebrities/celebrities-list", {celebrities});
});

router.get("/celebrities/:id", async (req, res) => {
    const celebrity = await Celebrity.findById(req.params.id);
    console.log(celebrity);
    res.render("celebrities/celebrity-details", celebrity);
});

router.get("/new-celebrity", async (req, res) => {
    res.render("celebrities/celebrity-new");
});

router.post("/new-celebrity", async (req, res) => {
    const {name, occupation, catchPhrase} = req.body;
    await Celebrity.create({name, occupation, catchPhrase});
    res.redirect("celebrities");
});

router.post("/celebrities/:id/delete", async (req, res) => {
    await Celebrity.findByIdAndDelete(req.params.id);
    res.redirect("/celebrities");
});

module.exports = router;