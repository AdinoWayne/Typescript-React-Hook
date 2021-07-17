# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## observable.ref

Like the observable annotation, but only reassignments will be tracked. The assigned values themselves won't be made observable automatically. For example, use this if you intend to store immutable data in an observable field.

observable.ref will only track reference changes to the object, which means that you will need to change the whole object in order to trigger the reaction. So if you, for example, have an observable array that is tracked by reference, the contents of the array will not be tracked. Also if you add items to the array that change will also not be tracked.

```

test.reference[0] = { id: 2 }; // this will not trigger the reactions
test.reference.push({ id: 3 }); // this will not trigger the reactions
test.reference.pop(); // this will not trigger the reactions

test.reference = []; // this will trigger both reactions

```