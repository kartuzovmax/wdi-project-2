const Static = require('../models/static');

function staticHome(req, res) {
  Static
    .find()
    .exec()
    .then(statics => {
      return res.render('statics/home', { statics });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function staticGallery(req, res) {
  Static
    .find()
    .exec()
    .then(statics => {
      return res.render('statics/gallery', { statics });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function staticAbout(req, res) {
  Static
    .find()
    .exec()
    .then(statics => {
      return res.render('statics/about', { statics });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

function staticUser(req, res) {
  Static
    .find()
    .exec()
    .then(statics => {
      return res.render('statics/user', { statics });
    })
    .catch(err => {
      return res.render('error', { error: err });
    });
}

//
// function videosShow(req, res) {
//   Video
//     .findById(req.params.id)
//     .exec()
//     .then(video => {
//       if (!video) {
//         return res.render('error', { error: 'No park found.' });
//       }
//       return res.render('videos/show', { video });
//     })
//     .catch(err => {
//       return res.render('error', { error: err });
//     });
// }
//
// function videosNew(req, res) {
//   return res.render('videos/new');
// }
//
// function videosCreate(req, res) {
//   Video
//     .create(req.body)
//     .then(video => {
//       console.log(`body is ${req.body}`);
//       if (!video) return res.render('error', { error: 'No video was created!' });
//       return res.redirect('/videos');
//     })
//     .catch(err => {
//       return res.render('error', { error: err });
//     });
// }
//
// function videosEdit(req, res) {
//   Video
//    .findById(req.params.id)
//    .exec()
//    .then(video => {
//      console.log(video);
//      if (!video) {
//        return res.render('error', { error: 'No video found.' });
//      }
//      return res.render('videos/edit', { video });
//    })
//    .catch(err => {
//      return res.render('error', { error: err });
//    });
// }
//
// function videosUpdate(req, res) {
//   Video
//     .findById(req.params.id)
//     .exec()
//     .then(video => {
//       if (!video) {
//         return res.render('error', { error: 'No video found.' });
//       }
//       for (const field in req.body) {
//         video[field] = req.body[field];
//       }
//       return video.save();
//     })
//     .then(video => {
//       if (!video) {
//         return res.render('error', { error: 'Something went wrong during the update.' });
//       }
//       return res.render('videos/show', { video });
//     })
//     .catch(err => {
//       return res.render('error', { error: err });
//     });
// }
//
// function videosDelete(req, res) {
//   Video
//     .findByIdAndRemove(req.params.id)
//     .exec()
//     .then(() => {
//       return res.redirect('/videos');
//     })
//     .catch(err => {
//       return res.render('error', { error: err });
//     });
// }

module.exports = {
  static: staticHome,
  gallery: staticGallery,
  about: staticAbout,
  user: staticUser
};
