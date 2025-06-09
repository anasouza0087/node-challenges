const fileReader = require("./modules/reader");
const fileWritter = require("./modules/writer");

const processor = async () => {
  try {
    const resp = await fileReader();
    console.log(resp);
    await fileWritter(resp);
  } catch (error) {
    console.log("Erro!", error);
  }
};

processor();
