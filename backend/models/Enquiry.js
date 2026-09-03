import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        number: {
            type: Number,
            required: true
        },

        city: {
            type: String,
            required: true
        },

        state: {
            type: String,
            required: true
        },

        institute: {
            type: String,
            enum: [
                "Technology",
                "Pharmacy",
                "Science & Commerce",
                "Law",
                "Nursing"
            ],
            required: true
        },

        question: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Enquiry = mongoose.model('Enquiry', EnquirySchema)