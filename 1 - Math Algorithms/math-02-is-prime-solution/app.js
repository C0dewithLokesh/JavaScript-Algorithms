// Determinen whether that input number is a prime number

function isPrime(number) {
    for (let i = 2; i < number; i++) { // 1
        // console.log('Running'); // n
        if (number % i === 0) {  // n
            return false; // 1
        }
    }

    return true; // 1
}

const number = 5;
// const number = 27277;

// Best Case: number = 1 OR number = 2 => O(1)
// Average Case: O(n)
// Worst Case: number = 27,277(Big Prime Number) => O(n)

console.log(number + (isPrime(number) ? ' is a prime number' : ' is not a prime number'));