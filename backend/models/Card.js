const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    final_price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

const DestinationSchema = new mongoose.Schema({
    package_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
    },
    name: {
        type: String,
        required: true
    },
    stay_duration: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ItinerarySchema = new mongoose.Schema({
    package_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
    },
    destination_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Destination",
        required: true
    },
    day_number: {
        type: Number,
        required: true
    },
    activities: {
        type: String,
        required: true
    },
    meal_plan: {
        type: String,
        required: true
    },
    stay_details: {
        type: String,
        required: true
    }
}, { timestamps: true });

const BookingSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    package_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Package",
        required: true
    },
    total_price: {
        type: Number,
        required: true
    },
    booking_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Cancelled'],
        default: 'Pending'
    }
}, { timestamps: true });

module.exports = { 
    Package: mongoose.model("Package", PackageSchema),
    Destination: mongoose.model("Destination", DestinationSchema),
    Itinerary: mongoose.model("Itinerary", ItinerarySchema),
    Booking: mongoose.model("Booking", BookingSchema)
};