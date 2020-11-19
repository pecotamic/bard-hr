<template>
  <div class="inline-block relative">
    <button
      class="bard-toolbar-button"
      v-html="button.html"
      v-tooltip="button.text"
      @click="addHR()"
    />
  </div>
</template>
<script>
export default {
  mixins: [BardToolbarButton],
  data() {
    return {
      getMarkAttrs: this.editor.getMarkAttrs.bind(this.editor),
    };
  },
  methods: {
    addHR() {
      this.editor.commands.hr();
    },
  },
};
</script>
