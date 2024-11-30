import mongoose, { Schema, Document } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description: string;
  url: string;
  createdBy: mongoose.Types.ObjectId;
}

const videoSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  url: { type: String, required: true },
  // createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const Video = mongoose.model<IVideo>('Video', videoSchema);

export default Video;
