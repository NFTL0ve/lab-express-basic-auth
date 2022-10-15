const router = require("express").Router();
const { Movie } = require("/models/Movie.model")

router.get("/:movieId", async (req, res)=> {
    console.log(req.params.movieId);
    const displayMovie = await Movie.findbyId(req.params.movieId);
 console.log(displayMovie);
 res.render("movie", { movie: displayMovie });
})

module.exports = router;