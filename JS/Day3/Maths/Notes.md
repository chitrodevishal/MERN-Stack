# Math in JavaScript (Beginner Notes)

---

# What is Math in JavaScript?

`Math` is a built-in JavaScript object that provides mathematical constants and functions.

Think of it as a calculator already available inside JavaScript.

```js
Math
```

It contains:

* Mathematical Constants
* Rounding Methods
* Random Number Methods
* Power & Root Methods
* Trigonometry Methods
* Logarithmic Methods

---

# Why Do We Need Math?

Without Math, many calculations become difficult.

Examples:

* Round prices
* Generate OTPs
* Create random game values
* Calculate percentages
* Build pagination
* Find maximum marks
* Find minimum prices

---

# Important Rule

❌ Wrong

```js
new Math()
```

✅ Correct

```js
Math.round(5.7)
```

Math is a static object, so we use methods directly.

---

# Math Constants

Constants are fixed values.

---

## Math.PI

Represents π (Pi)

```js
console.log(Math.PI)
```

Output:

```js
3.141592653589793
```

### Use Cases

* Area of Circle
* Circumference of Circle
* Canvas Drawing
* Games

Example:

```js
let radius = 5

let area = Math.PI * radius * radius

console.log(area)
```

---

## Math.E

Euler's Number

```js
console.log(Math.E)
```

Output:

```js
2.718281828459045
```

Used in:

* Statistics
* Finance
* Machine Learning

---

# Rounding Methods

---

## Math.round()

Rounds to nearest integer.

```js
Math.round(4.4)
```

Output:

```js
4
```

```js
Math.round(4.5)
```

Output:

```js
5
```

### Use Cases

* Ratings
* Prices
* Percentages

Example:

```js
let rating = 4.6

console.log(Math.round(rating))
```

Output:

```js
5
```

---

## Math.ceil()

Always rounds UP.

```js
Math.ceil(4.1)
```

Output:

```js
5
```

```js
Math.ceil(4.9)
```

Output:

```js
5
```

### Use Cases

* Pagination
* Page Count
* Ticket Booking

Example:

```js
let items = 53
let perPage = 10

console.log(Math.ceil(items / perPage))
```

Output:

```js
6
```

---

## Math.floor()

Always rounds DOWN.

```js
Math.floor(4.9)
```

Output:

```js
4
```

### Use Cases

* Age Calculation
* Random Number Generation

Example:

```js
let age = 18.9

console.log(Math.floor(age))
```

Output:

```js
18
```

---

## Math.trunc()

Removes decimal part.

```js
Math.trunc(8.99)
```

Output:

```js
8
```

```js
Math.trunc(-8.99)
```

Output:

```js
-8
```

### Use Cases

* Integer Extraction
* Data Processing

---

# Maximum & Minimum

---

## Math.max()

Returns largest value.

```js
Math.max(10, 20, 30, 40)
```

Output:

```js
40
```

### Use Cases

* Highest Marks
* Highest Salary
* Most Expensive Product

Example:

```js
let highest = Math.max(78, 92, 88)

console.log(highest)
```

Output:

```js
92
```

---

## Math.min()

Returns smallest value.

```js
Math.min(10, 20, 30, 40)
```

Output:

```js
10
```

### Use Cases

* Lowest Marks
* Cheapest Product
* Minimum Price

Example:

```js
let lowest = Math.min(500, 300, 700)

console.log(lowest)
```

Output:

```js
300
```

---

# Random Numbers

---

## Math.random()

Returns a random decimal number.

```js
Math.random()
```

Example Output:

```js
0.48372
```

Range:

```text
0 <= value < 1
```

### Use Cases

* Games
* OTP Logic
* Random Quotes
* Random Colors

---

## Random Number Between 1 and 10

```js
let randomNum = Math.floor(Math.random() * 10) + 1

console.log(randomNum)
```

Output:

```js
1 to 10
```

---

## Dice Simulator

```js
let dice = Math.floor(Math.random() * 6) + 1

console.log(dice)
```

Output:

```js
1 to 6
```

---

# Power Methods

---

## Math.pow()

Raises number to a power.

```js
Math.pow(2, 3)
```

Output:

```js
8
```

Meaning:

```text
2 × 2 × 2
```

---

## Modern Alternative

```js
2 ** 3
```

Output:

```js
8
```

### Use Cases

* Geometry
* Finance
* Scientific Calculations

---

# Root Methods

---

## Math.sqrt()

Returns square root.

```js
Math.sqrt(25)
```

Output:

```js
5
```

### Use Cases

* Geometry
* Physics
* Distance Formula

---

## Math.cbrt()

Returns cube root.

```js
Math.cbrt(27)
```

Output:

```js
3
```

---

# Absolute Value

---

## Math.abs()

Removes negative sign.

```js
Math.abs(-50)
```

Output:

```js
50
```

```js
Math.abs(50)
```

Output:

```js
50
```

### Use Cases

* Difference Between Numbers
* Distance Calculations

Example:

```js
console.log(Math.abs(100 - 120))
```

Output:

```js
20
```

---

# Sign Checking

---

## Math.sign()

Checks sign of number.

```js
Math.sign(10)
```

Output:

```js
1
```

```js
Math.sign(-10)
```

Output:

```js
-1
```

```js
Math.sign(0)
```

Output:

```js
0
```

### Use Cases

* Positive/Negative Detection
* Financial Applications

---

# Trigonometry Methods

Mostly used in:

* Games
* Animation
* Physics
* Canvas API

---

## Math.sin()

```js
Math.sin(90 * Math.PI / 180)
```

Output:

```js
1
```

---

## Math.cos()

```js
Math.cos(0)
```

Output:

```js
1
```

---

## Math.tan()

```js
Math.tan(45 * Math.PI / 180)
```

Output:

```js
1
```

---

# Useful Beginner Examples

---

## Shopping Cart Price

```js
let price = 799.99

console.log(Math.round(price))
```

Output:

```js
800
```

---

## Marks Calculator

```js
let marks = [78, 90, 85, 99]

console.log(Math.max(...marks))
```

Output:

```js
99
```

---

## Cheapest Product

```js
let prices = [1000, 750, 500]

console.log(Math.min(...prices))
```

Output:

```js
500
```

---

## Random RGB Value

```js
let randomColor = Math.floor(Math.random() * 256)

console.log(randomColor)
```

Output:

```js
0 - 255
```

---

# Most Important Methods for Beginners

| Method        | Purpose                 |
| ------------- | ----------------------- |
| Math.round()  | Nearest Integer         |
| Math.ceil()   | Round Up                |
| Math.floor()  | Round Down              |
| Math.trunc()  | Remove Decimal          |
| Math.random() | Random Number           |
| Math.max()    | Largest Value           |
| Math.min()    | Smallest Value          |
| Math.pow()    | Power                   |
| Math.sqrt()   | Square Root             |
| Math.abs()    | Absolute Value          |
| Math.sign()   | Check Positive/Negative |
| Math.PI       | Pi Constant             |

---

# Most Used in Real MERN Projects

You will use these most frequently:

```js
Math.round()
Math.ceil()
Math.floor()
Math.random()
Math.max()
Math.min()
Math.abs()
Math.PI
```

Common Uses:

* E-Commerce Websites
* Pagination
* Analytics Dashboard
* Charts
* Ratings System
* Form Validation
* Random UI Features
* Games

---

# Revision Checklist

Can you explain:

* [ ] What is Math Object?
* [ ] Why Math is Static?
* [ ] Difference between round(), ceil(), floor(), trunc()?
* [ ] How Math.random() works?
* [ ] Difference between max() and min()?
* [ ] What is Math.PI?
* [ ] How to generate random numbers?
* [ ] How to find square root?
* [ ] How to remove negative sign using abs()?

If YES, then your JavaScript Math fundamentals are strong enough for beginner-level frontend and MERN development.
