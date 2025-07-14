const { I } = inject();

module.exports = {
  async ask(prompt) {
    const aiHelper = codeceptjs.container.helpers('AIHelper');
    return await aiHelper.ask(prompt);
  }
};
