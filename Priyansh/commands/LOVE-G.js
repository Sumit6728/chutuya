//@Prem-babu3608
////////////////////////////////////////////////////////
/////// WARNING => JO CREDIT NAME CHANGE KREGA USKA ID BAN KAR DIYA JAYEGA + THIS BOT IS MADE BT PREM BABU
const fs = require("fs");
module.exports.config = {
	name: "lOVE-YOU",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PREM BABU", ////////////@prem-babu3608
	description: "THIS BOT IS MR PREM SHARMA",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Love") ||
     react.includes("I love") || react.includes("lOve") || react.includes("LoVe") ||
react.includes("love") ||
react.includes("Love")) {
		var msg = {
				body: `💋LOVE YOU 2 MERI JAAN😘💋💋`,attachment: fs.createReadStream(__dirname + `/noprefix/love.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
