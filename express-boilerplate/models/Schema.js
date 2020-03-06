var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NewSchema = new Schema(
    {
        first_name: {
            type: String,
            required: true,
            max: 100,
        }, family_name: {
            type: String,
            required: true,
            max: 100,
        }, date_of_birth: {
            type: Date
        }
    }
);

NewSchema.virtual('url').get(function() {
    return '/newSchema/' + this._id;
});

module.exports = mongoose.model('New', NewSchema);