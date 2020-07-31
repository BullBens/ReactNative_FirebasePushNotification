export const INITIAL_REDUCER: (data?: any) => TReturn = (data = {}) => ({
  name: data.name || '',
  secondName: data.secondName || '',
});

type TReturn = {
  name: string;
  secondName: string;
};
