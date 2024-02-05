module.exports.config = {
  name: 'help',
  version: '1.0.0',
};

module.exports.run = async function ({ api, event, enableCommands, args }) {
  const input = args.join(' ');

  try {
    const eventCommands = enableCommands[1].handleEvent;
    const commands = enableCommands[0].commands;

    let helpMessage = '╔═══════════╗\n     𝗞𝘀𝗵𝗶𝘁𝗶𝘇 𝗔𝘂💐\n╚═══════════╝\n';

  
    helpMessage += '╭─╮\n│『 𝗜𝗡𝗙𝗢 』\n';
    helpMessage += '│☪︎define  ☪︎history\n│☪︎time ☪︎stalk\n│☪︎nn\n╰───────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗔𝗡𝗜𝗠𝗘 』\n';
    helpMessage += '│ あanistatus あanigif\n│ あanipic あanime\n╰─────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 』\n';
    helpMessage += '│⊙alldl(commingsoon)\n╰─────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗧𝗢𝗢𝗟𝗦 』\n';
    helpMessage += '│☭pin ☭shell\n│☭v2a ☭stalk\n│☭uptime ☭clean\n│☭getlink ☭rembg\n╰─────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗘𝗡𝗧𝗘𝗥𝗧𝗔𝗜𝗡𝗠𝗘𝗡𝗧 』\n';
    helpMessage += '│♡fun ♡sciencememe\n│♡say ♡sad\n│♡lyricalvideo ♡fun2\n│♡tik ♡tiktok\n│♡insta ♡reels\n╰──────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗥𝗔𝗡𝗞 』\n';
    helpMessage += '│✯rank ✯rankup\n╰───────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗖𝗨𝗦𝗧𝗢𝗠 』\n';
    helpMessage += '│✰setleave ✰setwelcome\n│✰shortcut \n│✰customrankcard\n╰─────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 』\n';
    helpMessage += '│※page\n│※group\n╰────────ꔪ\n';

    helpMessage += '╭─╮\n│『 𝗠𝗨𝗦𝗜𝗖 』\n';
    helpMessage += '│♪sing ♪spotify\n│♪video ♪tribalrain\n│♪axix ♪mvdo\n│♪edge ♪lv\n╰──────────ꔪ\n';

    helpMessage += '╭─────────╮\n│『  𝗔𝗜 』\n';
    helpMessage += '│❃gpt\n│❃bard\n│❃anigen\n╰─────────╯\n';

    helpMessage += '╭─╮\n│『 𝗖.𝗔𝗜 』\n';
    helpMessage += '│⁜gojo\n│⁜zoro\n│⁜randi\n│⁜carolina\n│⁜luffy\n│⁜kshitiz\n╰────────ꔪ\n';

    helpMessage += '╔═══════════╗\n        𝗚𝗼𝗮𝘁𝗕𝗼𝘁🤍🪽\n╚═══════════╝\n';
    helpMessage += '├───────────⭓\n';

   
    api.sendMessage(helpMessage, event.threadID, event.messageID);
  } catch (error) {
    console.log(error);
  }
};
