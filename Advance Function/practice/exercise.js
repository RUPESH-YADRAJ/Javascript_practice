  //  let buttonElement = document.querySelector('.btn-subscribe');
  //  buttonElement.addEventListener('click',event => setTimeout(doubleTheSize, 2000))

  //  function doubleTheSize() {
  //     let buttonElement = document.querySelector('.btn-subscribe');
  //     buttonElement.classList.add('size-double');
  //   }


    // let multiply = (num1, num2) => num1 * num2;
    // console.log(multiply(4,5));

    // let printGreeting = () => console.log('Namaste');
    // let runTwice = inputFunction => {
    //   inputFunction();
    //   inputFunction();
    // };

    // runTwice(printGreeting);

    let arr = [1,2,3,4,5,6];
    let sum = 0;
    arr.forEach(num => sum += num);
    console.log(sum);

    let squares = arr.map(num => num * num);
    console.log(squares);
