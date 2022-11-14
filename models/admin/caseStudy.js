const mongoose = require('mongoose');

const CaseStudySchema = mongoose.Schema({
  caseStudyTitle: {
    type: String,
    trim: true,
  },
  caseStudySubtitle: {
    type: String,
    trim: true,
  },
  caseStudyDocument: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('CaseStudy', CaseStudySchema);
