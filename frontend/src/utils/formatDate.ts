export const formatDate = (time: number) => {
  const date = new Date(time);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  console.log(formattedDate);
  return formattedDate;
};
