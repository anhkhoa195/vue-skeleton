import moment from "moment";

/**
 * Format date time with "YYYY/MM/DD HH:mm"
 * @param {String} date The value of date
 */
export const formatDateTime = value => {
  if (value) {
    const regex = /^\d{4}[./-]\d{2}[./-]\d{2}.*/g;
    if (regex.test(value)) {
      return moment(String(value)).format("YYYY/MM/DD HH:mm");
    }
  }
  return value;
};
