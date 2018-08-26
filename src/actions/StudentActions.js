export const LOAD_APP = 'LOAD_APP';

export const sendAppData = (data) => ({
  type: LOAD_APP,
  payload: data,
});