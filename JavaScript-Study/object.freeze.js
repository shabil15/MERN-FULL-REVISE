// Create an object
const obj = {
    prop1: 'value1',
    prop2: 'value2'
  };
  
  // Freeze the object
  // Object.freeze(obj);
  // Object.seal(obj)
  
  // Attempt to modify the frozen object
  obj.prop1 = 'new value'; // This modification will be ignored
  obj.prop3 = 'value3';    // This addition will be ignored
  delete obj.prop2;        // This deletion will be ignored
  
  console.log(obj); // Output: { prop1: 'value1', prop2: 'value2' }
  
  