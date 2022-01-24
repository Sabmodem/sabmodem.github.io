/* global Vue, base*/
var app = new Vue({
  el: '#workspace',
  data: function () {
    return {
      node: this.getRoot()
    };
  },

  methods: {
    getRoot() {
      return base.filter(obj => obj.parent_id == null)[0];
    },

    getNodeById(id) {
      return base.filter(obj => obj.id == id)[0];
    },

    mountRoot() {
      this.node = this.getRoot();
    },

    mountNodeById(id) {
      this.node = this.getNodeById(id);
    },

    makeImg(id) {
      return `<img src="img/${id}"/>`;
    }
  }
});
