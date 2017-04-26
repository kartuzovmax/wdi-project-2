function staticHome(req, res) {
  return res.render('statics/home');
}

function staticAbout(req, res) {
  return res.render('statics/about');
}

module.exports = {
  static: staticHome,
  about: staticAbout
};
