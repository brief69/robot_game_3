```javascript
import * as tf from '@tensorflow/tfjs';

class MachineLearningModel {
  constructor() {
    this.model = null;
  }

  // Initialize the model
  async init() {
    // Load or create a new model
    this.model = tf.sequential({
      layers: [
        tf.layers.dense({inputShape: [20], units: 64, activation: 'relu'}),
        tf.layers.dense({units: 64, activation: 'relu'}),
        tf.layers.dense({units: 4, activation: 'softmax'}),
      ],
    });

    // Compile the model with an optimizer, loss function, and metrics
    this.model.compile({
      optimizer: 'adam',
      loss: 'categoricalCrossentropy',
      metrics: ['accuracy'],
    });
  }

  // Train the model with provided data
  async train(xTrain, yTrain) {
    const history = await this.model.fit(xTrain, yTrain, {
      batchSize: 32,
      epochs: 10,
      shuffle: true,
      validationSplit: 0.2,
    });

    return history;
  }

  // Predict the output for a given input
  async predict(xInput) {
    const prediction = await this.model.predict(xInput).argMax(-1).data();
    return prediction;
  }

  // Save the model
  async saveModel() {
    await this.model.save('localstorage://my-model');
  }

  // Load the model
  async loadModel() {
    this.model = await tf.loadLayersModel('localstorage://my-model');
  }
}

export default MachineLearningModel;
```
