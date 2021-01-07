export const debounce = {
  data() {
    const wait = 10;
    const immediate = true;
    return {
      wait,
      immediate
    };
  },
  methods: {
    debounce: function(func, wait = this.wait, immediate = this.immediate) {
      let timeout;
      return function() {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        // eslint-disable-next-line prefer-rest-params
        const args = arguments;
        const later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    } //debounce
  }
};
