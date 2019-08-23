import React, { createContext, useReducer, useContext } from "react";
import { useAuth } from "./auth-context";
import { useUser } from "./user-context";
import * as listItemClient from "../utils/list-items-client";

const ListItemStateContext = createContext();
const ListItemDispatchContext = createContext();

const listReducer = (listItems, action) => {
  switch (action.type) {
    case "add": {
      return [...listItems, action.listItem];
    }
    case "remove": {
      return listItems.filter(li => li.id !== action.id);
    }
    case "update": {
      return listItems.map(li => {
        if (li.id === action.listItem.id) {
          return {
            ...li,
            ...action.listItem,
          };
        }
        return li;
      });
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const ListItemProvider = ({ children }) => {
  const { data } = useAuth();
  const [state, dispatch] = useReducer(listReducer, data.listItems);
  return (
    <ListItemStateContext.Provider value={state}>
      <ListItemDispatchContext.Provider value={dispatch}>
        {children}
      </ListItemDispatchContext.Provider>
    </ListItemStateContext.Provider>
  );
};

const removeListItem = (dispatch, id) => {
  return listItemClient.remove(id).then(data => {
    dispatch({ type: "remove", id });
    return data;
  });
};

const addListItem = (dispatch, listItemData) => {
  return listItemClient.create(listItemData).then(data => {
    dispatch({ type: "add", listItem: data.listItem });
    return data;
  });
};

const updateListItem = (dispatch, listItemId, updates) => {
  return listItemClient.update(listItemId, updates).then(data => {
    dispatch({ type: "update", listItem: data.listItem });
    return data;
  });
};

const useListItemDispatch = () => {
  const context = useContext(ListItemDispatchContext);
  if (context === undefined) {
    throw new Error(
      `useListItemDispatch must be used within a ListItemProvider`
    );
  }
  return context;
};

const useListItemState = () => {
  const context = useContext(ListItemStateContext);
  if (context === undefined) {
    throw new Error(`useListItemState must be used within a ListItemProvider`);
  }
  return context;
};

const useSingleListItemState = ({ bookId }) => {
  const listItems = useListItemState();
  if (!listItems) {
    throw new Error(`useListItemState must be used within a ListItemProvider`);
  }
  const user = useUser();
  const listItem = listItems.find(
    li => li.ownerId === user.id && li.bookId === bookId
  );
  return listItem;
};

export {
  ListItemProvider,
  useListItemDispatch,
  useListItemState,
  useSingleListItemState,
  removeListItem,
  addListItem,
  updateListItem,
};