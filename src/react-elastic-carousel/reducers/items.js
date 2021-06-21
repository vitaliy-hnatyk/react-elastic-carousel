import { NEXT_ITEM, PREV_ITEM } from "../actions/consts";

export const activeIndexReducer = (state, action) => {
  const { limit, itemsToScroll, type } = action;
  switch (type) {
    case NEXT_ITEM: {
      let optimisticNextItem = state + itemsToScroll;
      return limit >= optimisticNextItem ? optimisticNextItem : limit;
    }

    case PREV_ITEM: {
      let optimisticPrevItem = state - itemsToScroll;
      return optimisticPrevItem >= limit ? optimisticPrevItem : limit;
    }

    default:
      return state;
  }
};
