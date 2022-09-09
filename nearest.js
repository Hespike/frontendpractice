/* Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.   */

function nearest(num1, num2) {
  if (Math.abs(100 - num1) < Math.abs(100 - num2)) {
      return num1;
    } else if (Math.abs(100 - num2) < Math.abs(100 - num1)) {
        return num2;
      } else if (Math.abs(100 - num2) == Math.abs(100 - num1)) {
        return "Ugyanakkora a távolságuk."
      }
    }

    console.log(nearest(50, 150)); console.log(nearest(100, 80)); console.log(nearest(0));
