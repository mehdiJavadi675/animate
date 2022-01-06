new Vue({
  el: "#app",
  data: {
    buttons: [
      { icon: "comment", bgColor: "#DE9B00", color: "#EDB205" },
      { icon: "user", bgColor: "#3EAF6F", color: "#4BD389" },
      { icon: "map-marker", bgColor: "#BE0031", color: "#E61753" },
      { icon: "cog", bgColor: "#8E00AC", color: "#B32DD2" },
    ],
    selectedBgColor: "#DE9B00",
    selectedId: 0,
  },
  mounted() {
    // initialize widget
    this.selectButton(0);
  },
  methods: {
    selectButton(id) {
      const previousButton = this.$refs[`button_${this.selectedId}`];
      const nextButton = this.$refs[`button_${id}`];

      this.selectedId = id;
      this.animateBgColor();

      this.animateOut(previousButton);
      this.animateIn(nextButton);
    },
    animateBgColor() {
      TweenMax.to(this, 0.2, {
        selectedBgColor: this.selectedButton.bgColor,
      });
    },
    animateIn(btn) {
      // animate icon color
      TweenMax.to(btn, 0.3, {
        backgroundColor: this.selectedButton.color,
        color: "white",
      });

      // animate button width
      TweenMax.to(btn, 0.7, {
        width: 100,
        ease: Elastic.easeOut.config(1, 0.5),
      });
    },
    animateOut(btn) {
      // animate icon color
      TweenMax.to(btn, 0.3, {
        backgroundColor: "white",
        color: "gray",
      });

      // animate button width
      TweenMax.to(btn, 0.7, {
        width: 50,
        ease: Elastic.easeOut.config(1, 0.5),
      });
    },
  },
  computed: {
    selectedButton() {
      return this.buttons[this.selectedId];
    },
  },
});
