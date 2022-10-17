const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  elementArr: [],
    
  getLength: function() {
      return this.elementArr.length;
  },

  addLink: function(value) {
    if (value === undefined) {
        this.elementArr.push(`( )`);
      } else {
        this.elementArr.push(`( ${value} )`);
      }
      return this;

  },
  
  removeLink: function(position) {
      if(!Number.isInteger(position) || position < 1 || position > this.elementArr.length) {
          this.elementArr = [];
          throw new Error("You can't remove incorrect link!");
      } else {
          this.elementArr.splice((position - 1), 1)
      }
      return this;
  },

  reverseChain: function() {
      this.elementArr.reverse();
      return this;
  },
  
  finishChain: function() {
      let resultChain = this.elementArr.join('~~');
      this.elementArr = [];
      return resultChain;
  }
};

module.exports = {
  chainMaker
};
