import 'react-native';
import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree.children.length).toBe(1);
  });

  it('renders correctly', () => {
    renderer.create(<App />);
  });

  it('navigation container exists', () => {
    const instance = renderer.create(<App />).root;
    expect(instance.findAllByProps({testID: "navigation-container"}).length).toBe(1);
  });

  it('initial route is Home', () => {
    const instance = renderer.create(<App />).root;
    const navigationContainer = instance.findByProps({testID: "navigation-container"});
    expect(navigationContainer.props.initialRouteName).toBe("Home");
  });

  it('contains HomeScreen, RobotTrainingScreen, and ObservationScreen', () => {
    const instance = renderer.create(<App />).root;
    expect(instance.findAllByType(HomeScreen).length).toBe(1);
    expect(instance.findAllByType(RobotTrainingScreen).length).toBe(1);
    expect(instance.findAllByType(ObservationScreen).length).toBe(1);
  });
});
