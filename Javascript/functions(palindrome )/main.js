function palindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    // Check if the string reads the same backward and forward
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) {
        return false;
      }
    }
  
    return true;

  }
  console.log(palindrome("racecar"));