const ydf = YDFTraining();
// const data = fs.readFileSync("data.csv");
const data = {
  age: [39, 40, 42],
  gender: ["m", "w", "m"],
};
const model = new ydf.GradientBoostedTreesLearner("Label", "REGRESSION").train(
  data
);
model.predict(data);
