const util = require('util');
const exec = util.promisify(require('child_process').exec);

module.exports = {
  config: {
    name: "shell",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 2,
    shortDescription: "Execute shell commands",
    longDescription: "",
    category: "𝗢𝗪𝗡𝗘𝗥",
    guide: {
      vi: "{p}{n} <command>",
      en: "{p}{n} <command>"
    }
  },

  run: async function ({ args, message }) {
    const command = args.join(" ");

    if (!command) {
      return message.reply("Please provide a command to execute.");
    }

    try {
      const { stdout, stderr } = await exec(command);

      if (stderr) {
        console.error(`Command execution resulted in an error: ${stderr}`);
        return message.reply(`Command execution resulted in an error: ${stderr}`);
      }

      console.log(`Command executed successfully:\n${stdout}`);
      message.reply(`Command executed successfully:\n${stdout}`);
    } catch (error) {
      console.error(`Error executing command: ${error}`);
      return message.reply(`An error occurred while executing the command: ${error.message}`);
    }
  }
};
