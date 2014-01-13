// activity entity
exports.Garage = function (description, startDate,endDate, latitude, longitude, address) {
    this.description = description;
    this.end_date = endDate;
    this.start_date = startDate;
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
}