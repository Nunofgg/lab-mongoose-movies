const router = require("express").Router();
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model")

router.get("/movies", async (req, res) => {
    const movies = await Movie.find();
    res.render("movies/movies-list", {movies});
});

router.get("/new-movie", async (req, res) => {
    const celebrities = await Celebrity.find();
    res.render("movies/movie-new", {celebrities});
});

router.post("/new-movie", async (req, res) => {
    const {title, genre, plot, cast} = req.body;
    await Movie.create({title, genre, plot, cast});
    res.redirect("movies");
});

router.get("/movies/:id", async (req, res) => {
    const movie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-details", movie);
});

router.get("/movies/:id/edit", async (req, res) => {
    const celebrities = await Celebrity.find();
    const movie = await Movie.findById(req.params.id).populate("cast");
    res.render("movies/movie-edit", {movie, celebrities});
});

router.post("/movies/:id/edit", async (req, res) => {
    const movieId = req.params.id;
    const {title, genre, plot, cast} = req.body;
    await Movie.findByIdAndUpdate(movieId, {
        title,
        genre,
        plot,
        cast,
    });
    res.redirect(`/movies/${movieId}`);
});

router.post("/movies/:id/delete", async (req, res) => {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/movies");
});

module.exports = router;