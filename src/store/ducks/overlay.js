/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import produce from 'immer';

export const Types = {
  OVERLAY: '@overlay/HANDLE_TOGGLE',
};

const OVERLAY = { open: false };

export default function reducer(state = OVERLAY, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.OVERLAY:
        draft.open = action.overlay;
        break;
      default:
        return state;
    }
  });
}

export function handleOverlay(overlay) {
  return { type: Types.OVERLAY, overlay };
}
