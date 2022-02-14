const { DateTime } = require('luxon');

const dt = DateTime.now();
const now = dt.toLocaleString(DateTime.DATETIME_MED);
export default now;
