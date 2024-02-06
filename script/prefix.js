module.exports = {
    config: {
        name: "prefix",
        version: "1.0",
        author: "kshitiz",
        countDown: 1,
        role: 0,
        category: "know system prfix",
    },
    run: async function ({ api, event, message }) {
        const triggerPhrases = ["prefix", "bot"];
        if (event.body && triggerPhrases.includes(event.body.toLowerCase())) {
            return () => {
                return api.sendMessage("🌐 System prefix: ${prefix}\n🛸 Your box chat prefix: ${prefix}", event.threadID, event.messageID);
            }
        }
    }
};
