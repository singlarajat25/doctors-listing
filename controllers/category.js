const Model = require('../model/category')
const { CATEGORY_ADDED, SERVER_NOT_FOUND } = require('../config/constant');

exports.insertNewCategory = ({ body }, res) => {
  const { startTime, endTime } = body;
  body.timeslots = timeSlotsGenrater(startTime, endTime);
  new Model(body).save()
    .then(data => {
      res.send({
        status: true,
        code: 200,
        message: CATEGORY_ADDED,
        data
      });
    })
    .catch(err => {
      res
        .status(false)
        .code(500)
        .send({
          message: err.message || SERVER_NOT_FOUND
        });
    });
};

function timeSlotsGenrater(starttime, endtime) {
  function parseTime(s) {
    let c = s.split(":");
    return parseInt(c[0]) * 60 + parseInt(c[1]);
  }
  function convertHours(mins) {
    let hour = Math.floor(mins / 60);
    let mins = mins % 60;
    let converted = pad(hour, 2) + ":" + pad(mins, 2);
    return converted;
  }

  function pad(str, max) {
    str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
  }

  function calculate_time_slot(start_time, end_time, interval = "30") {
    let i, formatted_time;
    let time_slots = new Array();

    for (let i = start_time; i <= end_time; i = i + interval) {
      formatted_time = convertHours(i);
      time_slots.push(formatted_time);
    }
    return time_slots;
  }

  let times_ara = calculate_time_slot(
    parseTime(starttime),
    parseTime(endtime),
    30
  );
  return times_ara;
}

exports.allCategoryList = (req, res) => {
  Model.find()
    .then(data => {
      res.send({
        message: 'SUCCESS',
        status: true,
        code: 200,
        data: data
      });
    })
    .catch(err => {
      res.send({
        status: true,
        code: 200,
        message: err.message || SERVER_NOT_FOUND
      });
    });
};
