let target = {
    message: 'Hello'
  };
  
  let handler = {
    get: function(target, prop, receiver) {
      console.log(`Getting property "${prop}"`);
      return target[prop];
    },
    set: function(target, prop, value, receiver) {
      console.log(`Setting property "${prop}" to "${value}"`);
      target[prop] = value;
      return true;
    }
  };
  
  let proxy = new Proxy(target, handler);
  
  console.log(proxy.message); // Output: Getting property "message", Hello
  proxy.message = 'World'; // Output: Setting property "message" to "World"
  console.log(proxy.message); // Output: Getting property "message", World
  