export const arrToMap = (arr) =>
  arr.reduce((acc, item) => ({...acc, [item._id]: item}), {})


