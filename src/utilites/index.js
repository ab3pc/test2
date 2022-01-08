
export const getActiveTasks = (list) => {
	return list.filter(item => item.active);
}
export const getArchiveTask = (list) => {
	return list.filter(item => !item.active);
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

//Added icon to object for correctly display icons

export const addIconName = (name) => {
  let iconName = {
    task:  {
      name: "Task",
      icon: "fas fa-shopping-cart",
    },
    random:{
      name: "Random",
      icon: "fas fa-brain",
    },
    quote:{
      name: "Quote",
      icon: "fas fa-quote-right",
    },
    idea: {
      name: "Idea",
      icon: "far fa-lightbulb",
    }
  };
  return iconName[`${name}`]
}

