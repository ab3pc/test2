export const getActiveTasks = (list) => {
	return list.filter(item => item.active);
}


//ParseDates//
export const parseDates = (content) => {
	let strDates = "";
  let searchValue = /(\d{1,2}\/\d{1,2}\/\d{4})/g;
  let dates = content.match(searchValue);
  switch (true) {
    case dates === null: {
      break;
    }
    case dates.length === 1: {
      strDates = dates[0];
      break;
    }
    case dates.length > 1: {
      strDates = dates.join(", ");
      break;
    }

    default:
      break;
  }
  
  return strDates;
};
