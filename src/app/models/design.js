import mongoose from 'mongoose';

const carSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: [true, 'client Name is necessery'],
    },
    carModel: {
      type: String,
      required: [true, 'Model is necessery'],
    },
    email: {
      type: String,
    },
    color: {
      type: String,
      required: [true],
    },
    material: {
      type: String,
      required: [true],
    },
    texture: {
      type: String,
      required: [false],
    },
    status: {
      type: String,
      enum: ['approved', 'pending', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true }
);

// carSchema.pre('save', function (next) {
//   console.log('checking clientName:', this.clientName);
//   this.email = `${this.clientName}@gmail.com`;
//   next();
// });

// carSchema.post('save', async function (next) {
//   // Check if clientName exists and is not empty
//   console.log('checking pres');
//   if (this.clientName) {
//     this.email = `${this.clientName}@gmail.com`;
//   } else {
//     this.email = 'default@gmail.com'; // Or handle the case where clientName is not provided
//   }
//   next(); // Proceed with saving the document
// });

// const cars = mongoose.model('cars', carSchema);
const cars = mongoose.models?.cars || mongoose.model('cars', carSchema);

export default cars;
