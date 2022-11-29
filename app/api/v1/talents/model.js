const mongoose = require('mongoose');
const { model, Schema } = mongoose;

let talentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Nama harus diisi'],
    },
    role: {
      type: String,
      default: '-',
    },
    image: {
      type: mongoose.Types.ObjectId,
      ref: 'Images',
      required: true,
    },
    organizer: {
      type: mongoose.Types.ObjectId,
      ref: 'Organizer',
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model('Talent', talentSchema);
