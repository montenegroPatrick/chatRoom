const getNewId = (stateChat) => {
  if (stateChat.length < 1) {
    return 1;
  }
  const ids = stateChat.map((item) => item.id);
  const maxId = Math.max(...ids);
  return maxId + 1;
};

export default getNewId;
