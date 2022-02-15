// import { DateTime } from "luxon";
import { DateTime } from '../../../node_modules/luxon/build/es6/luxon';


const now = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
export default now;


