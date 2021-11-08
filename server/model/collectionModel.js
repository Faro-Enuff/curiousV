// Import Mongoose
import mongoose from 'mongoose';

// Destructure Schema form mongoose
const { Schema } = mongoose;

const collectionsSchema = new Schema(
  {
    artist: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    summons: [{ type: Schema.Types.ObjectId, ref: 'summon' }],
  },
  { timestamps: true }
);

// Export Module

export default mongoose.model('collection', collectionsSchema);
