export const defaultNodes = {
  // counter is a value node, it holds the value of our counter
  counter: {
    $type: 'int',
    '?value': 0
  },
  // increment is an action node, it will increment /counter
  // by the specified amount
  increment: {
    // references the increment profile, which makes this node an instance of
    // our Increment class
    $is: 'increment',
    $invokable: 'write',
    // $params is the parameters that are passed to onInvoke
    $params: [
      {
        name: 'amount',
        type: 'int',
        default: 1
      }
    ]
  };
