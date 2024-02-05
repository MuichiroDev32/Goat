const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  config: {
    name: "gpt",
    version: 2.0,
    author: "OtinXSandip",
    longDescription: "chatgpt",
    category: "𝗙𝗨𝗡",
    guide: {
      en: "{p}{n} questions",
    },
  },
  async makeApiRequest(encodedPrompt, uid, a) {
    try {
      const response = await axios.get(`https://sandipapi.onrender.com/gpt2?prompt=${encodedPrompt}&uid=${uid}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  async downloadFile(url, dest) {
    const writer = fs.createWriteStream(dest);

    const response = await axios({
      url,
      method: 'GET',
      responseType: 'stream',
    });

    response.data.pipe(writer);

    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  },
  async run({ message, event, args, api }) {
    try {
      const uid = event.senderID;
      const encodedPrompt = encodeURIComponent(args.join(" "));
      const a = "repl";

      if (!encodedPrompt) {
        return message.reply("Please provide questions");
      }

      if (args[0] === 'draw') {
        const [promptText, model] = args.slice(1).join(' ').split('|').map((text) => text.trim());
        const puti = model || "2";
        const baseURL = `https://sandipapi.onrender.com/sdxl?prompt=${promptText}&model=${puti}`;

        const audioPath = path.resolve(__dirname, 'cache', `${uid}_draw_response.mp3`);

        await this.downloadFile(baseURL, audioPath);

        const att = fs.createReadStream(audioPath);

        message.reply({
          body: `${args.join(" ")}`,
          attachment: att,
        });

        fs.unlinkSync(audioPath); // Delete the downloaded file after sending
      } else {
        const result = await this.makeApiRequest(encodedPrompt, uid, a);

        message.reply({
          body: `${result}`,
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  },
};
