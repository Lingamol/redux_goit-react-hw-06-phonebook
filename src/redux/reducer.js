// import { statusFilters } from './constants';
import { combineReducers } from 'redux';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return [...state, action.payload];
    case 'contacts/deleteContact':
      return state.filter(contact => contact.id !== action.payload);
    // case 'contacts/toggleCompleted':
    //   return state.map(task => {
    //     if (task.id !== action.payload) {
    //       return task;
    //     }
    //     return { ...task, completed: !task.completed };
    //   });
    default:
      return state;
  }
};
const filtersInitialState = {
  filter: '',
};
// Отвечает только за обновление свойства filters
// Теперь значением параметра state будет объект фильтров
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setFilter':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

// Код редюсеров tasksReducer и filtersReducer
export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});
