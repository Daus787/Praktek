Object.defineProperty(String.prototype, "toJadenCase", {
  value: function () {
    return this.split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },
});


const quote = "how can mirrors be real if our eyes aren't real";
console.log(quote.toJadenCase());

