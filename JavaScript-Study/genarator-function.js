function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = generatorFunction(); // Create a generator object
  
  console.log(generator.next()); // { value: 1, done: false }
  console.log(generator.next()); // { value: 2, done: false }
  console.log(generator.next()); // { value: 3, done: false }
  console.log(generator.next()); // { value: undefined, done: true }
  


  function* idGenerator() {
    let id = 1;
    while (true) {
      yield id++;
    }
  }
  
  const generator1 = idGenerator();
  
  console.log(generator1.next().value); // 1
  console.log(generator1.next().value); // 2
  // Continue generating IDs as needed...




  // infinity value printing
  function* infiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}


const numberGenerator = infiniteNumbers();
for (let i = 0; i < 10; i++) {
    console.log(numberGenerator.next().value);
}

  