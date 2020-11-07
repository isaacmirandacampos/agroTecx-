/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import produce from 'immer';

export const Types = {
  OPENSNACKBAR: '@snackBar/OPEN_SNACKBAR',
  CLOSESNACKBAR: '@snackBar/CLOSE_SNACKBAR',
};

const SNACKBAR = {
  open: false,
  text: '',
  severity: '',
};

export default function reducer(state = SNACKBAR, action) {
  return produce(state, draft => {
    switch (action.type) {
      case Types.OPENSNACKBAR:
        draft.open = true;
        draft.text = action.text;
        draft.severity = action.severity;
        break;
      case Types.CLOSESNACKBAR:
        draft.open = false;
        draft.text = '';
        draft.severity = '';
        break;
      default:
        return state;
    }
  });
}

export function openSnackbar({ text, severity }) {
  return { type: Types.OPENSNACKBAR, text, severity };
}

export function closeSnackbar() {
  return {
    type: Types.CLOSESNACKBAR,
  };
}
