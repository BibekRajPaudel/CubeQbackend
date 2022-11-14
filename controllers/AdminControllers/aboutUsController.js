const AboutUs = require('../../models/admin/aboutUs');
const catchAsync = require('../../utils/asyncHandler');

const updateAboutUs = catchAsync(async (req, res) => {
  const file = req.file;

  const a = await AboutUs.find();

  if (a) {
    const abt = await AboutUs.findByIdAndUpdate(
      a[0]._id,
      {
        ...req.body,
        image: file.path ? file.path : a[0].image,
      },
      {
        runValidators: true,
        new: true,
      }
    );

    if (abt) {
      res.status(200).json({
        abt,
      });
    }
  } else {
    if (!file) return res.status(400).send('No image in the request');

    console.log(file.path);

    const aboutUs = await AboutUs.create({
      ...req.body,
      image: file.path,
    });

    if (aboutUs) {
      res.status(200).json({
        success: true,
        msg: 'Content of About Us Page has been updated',
      });
    } else {
      res.status(200).json({
        success: false,
        msg: 'Failed to update',
      });
    }
  }
});

const getAboutUs = catchAsync(async (req, res) => {
  const a = await AboutUs.find();

  if (a) {
    console.log(a);
    res.status(200).json({
      data: a[0],
    });
  }
});

module.exports = {
  updateAboutUs,
  getAboutUs,
};
