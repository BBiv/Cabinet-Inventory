import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    name: {
        type: String,
        required: true,
        trim: true,
    },
    measurement: {
        type: String,       // Will need to change to fit the lb/kg/can/etc type for conversions OR use validate(value) for high-fidelity product
        required: true,
        trim: true,
    },
    amt: {
        type: Number,
        required: true,
        trim: true,
    },
    img: {                  // Optional for MVP; will need to change for high-fidelity product
        type: String,
        required: false,
        trim: true,
    },
  },
  { collection: "items_list" }
);

export default mongoose.model("Item", ItemSchema);