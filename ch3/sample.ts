let Counter = function() {
  this.count = 0;

  setInterval(() => {
    console.log(this.count);
    this.count++;
  }, 1000)
};

Counter();