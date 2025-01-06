# Learning YDF (Yggdrasil Decision Forests)

Just one of the things I'm learning. <https://github.com/hchiam/learning>

<https://www.youtube.com/watch?v=xLtUgGkLTOs&list=PLNYkxOF6rcIAEVKJ98bDkQRkwvO4grhnt&index=18>

With YDF in the browser, decision forests can do training in seconds (to customize), and inferencing in milliseconds, on CSV tabular data (or Objects), in the browser for security and performance, using CPU (without needing GPU/NPU). Decision forests already provide sometimes better interpretability than neural networks.

<https://www.npmjs.com/package/ydf-training> - includes code for loading, training, predicting, and saving model.

<https://www.npmjs.com/package/ydf-inference>

<https://github.com/google/yggdrasil-decision-forests>

<https://ydf.readthedocs.io/en/stable/>

<https://ydf.readthedocs.io/en/latest/javascript/>

```sh
npm i ydf-training
```

```js
const ydf = await YDFTraining();
const data = fs.readFileSync('data.csv');
const model = new ydf.GradientBoostedTreesLearner('Label', 'REGRESSION').train(data);
model.predict(data);
```

And if you don't need training and just want inference, there's also ydf-inference:

```sh
npm i ydf-inference
```

```js
const ydf = await YDFInference();
// don't need const data = fs.readFileSync('data.csv');
const model = await loadModelFromZipBlob(fs.readFileSync('model.zip'));
// instead of new ydf.GradientBoostedTreesLearner('Label', 'REGRESSION').train(data);
model.predict({
  age: [39, 40, 42],
  gender: ['m', 'w', 'm'],
});
model.unload();
```

Things to try (or to get inspiration from Simple ML for Sheets):

- predict missing values
- spot abnormal values
- forecast future values

<https://simplemlforsheets.com/>
