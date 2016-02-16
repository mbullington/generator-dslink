import 'babel-polyfill';

import { SimpleNode, LinkProvider } from 'dslink';
import { defaultNodes } from './structure';

// .class is not an ES6 convention, it's just part of the SDK for now.
// you'll be able to drop it later when using ES6 classes
class Increment extends SimpleNode.class {
  onInvoke(columns) {
    // get current value of the link
    var previous = link.val('/counter');

    // set new value by adding an amount to the previous amount
    link.val('/counter', previous + parseInt(columns.amount));
  }
}

// Process the arguments and initializes the default nodes.
var link = new LinkProvider(process.argv.slice(2), '<%= linkName %>-', {
  defaultNodes,
  // register our custom node here as a profile
  // when we use $is with increment, it
  // creates our Increment node
  profiles: {
    increment(path) {
      return new Increment(path);
    }
  }
});

// Connect to the broker.
// link.connect() returns a Promise.
link.connect();
