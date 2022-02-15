/* eslint no-use-before-define: 0 */ // --> OFF
import { DateTime } from 'luxon';

const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
export default now;
