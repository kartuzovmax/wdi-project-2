function galleriesIndex(req, res) {
  return res.render('statics/gallery');
}

module.exports = {
  index: galleriesIndex
}
