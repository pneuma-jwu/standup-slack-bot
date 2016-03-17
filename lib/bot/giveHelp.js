'use strict';

var helpMessage = 'To log your standup, DM me with the following format '+
  '```#channel-name\ny: what I did yesterday\nT: what I\'m doing today\n'+
  'b: what\'s in my way\ng: what main thing I hope to accomplish```';

function attachListener(controller) {
  controller.hears(['^(help|usage)'],['direct_mention','direct_message'], function(bot, message) {
    bot.reply(message, helpMessage);
  });
}

module.exports = attachListener;