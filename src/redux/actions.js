import { nanoid } from 'nanoid';
export const addContact = text => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
};
export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};
// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };
export const setFilter = value => {
  return {
    type: 'filters/setFilter',
    payload: value,
  };
};
