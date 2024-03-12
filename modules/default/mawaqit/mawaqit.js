Module.register("mawaqit", {




  	// Default module config.
	defaults: {
		text: "Hello Worlddddd!"
	},

	getDom: function () {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	  },

	/* getTemplate () {
		return "mawaqit.njk";
	},

	getTemplateData () {
		return this.config;
	} */
});