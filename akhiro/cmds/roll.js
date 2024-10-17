module.exports = {
  config: {
    name: "roll",
    description: "Roll a virtual six-sided die",
    usage: "roll",
    author: "Vin-cent",
    aliases: ["dice"],
  },
  onRun: ({ api, event }) => {
    const result = Math.floor(Math.random() * 6) + 1;
    api.sendMessage(
      `🎲 You rolled a ${result}!`,
      event.threadID,
      event.messageID,
    );
  },
};
