//export { default as LIST } from './src/Action/List.action';

module.exports.LIST = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: [
        {
          id: 1,
          name: 'Red'
        },
        {
          id: 2,
          name: 'Blue'
        },
        {
          id: 3,
          name: 'Green'
        },
      ]
    }, null, 2),
  };
};
