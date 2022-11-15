const OurTeam = require('../../models/admin/ourTeam');
const catchAsync = require('../../utils/asyncHandler');

const addTeamMember = catchAsync(async (req, res) => {
  const file = req.file;

  if (!file) return res.status(400).send('No image in the request');

  const result = await OurTeam.create({
    ...req.body,
    image: file.path,
  });

  if (result) {
    res.status(200).json({
      success: true,
      msg: 'Team member successfully added',
    });
  } else {
    res.status(200).json({
      success: false,
      msg: 'Failed to add team member, Please try again later',
    });
  }
});

const updateTeamMember = catchAsync(async (req, res) => {
  const team = await OurTeam.findById(req.params.id);
  const file = req.file;

  if (team) {
    const t = await OurTeam.findByIdAndUpdate(req.params.id, {
      ...req.body,
      image: file && file.path ? file.path : team.image,
    });

    if (t) {
      res.status(200).json({
        success: true,
        msg: 'Updated',
      });
    } else {
      res.status(400).json({
        success: false,
        msg: 'Something went wrong',
      });
    }
  } else {
    res.status(400).json({
      success: false,
      msg: 'Something went wrong',
    });
  }
});

const getAllTeamMembers = catchAsync(async (req, res) => {
  const teams = await OurTeam.find();

  if (teams) {
    res.status(200).json({
      teams,
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});

const getSingleTeamMember = catchAsync(async (req, res) => {
  const teamMember = await OurTeam.findById(req.params.id);

  if (teamMember) {
    res.status(200).json({
      teamMember,
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
      msg: "Failed to get team member's info",
    });
  }
});

const deleteTeamMember = catchAsync(async (req, res) => {
  const result = await OurTeam.findByIdAndDelete(req.params.id);

  if (result) {
    res.status(200).json({
      result,
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
    });
  }
});

module.exports = {
  addTeamMember,
  updateTeamMember,
  getAllTeamMembers,
  getSingleTeamMember,
  deleteTeamMember,
};
