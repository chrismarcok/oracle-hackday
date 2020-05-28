var dateFormat = require('dateformat');

export const formatDate = (date:number) => {
    return dateFormat(date, "fullDate");
}