/**
 * @typedef {Object} Chat
 * @property {Number} id
 * @property {Object} attributes
 * @property {String} attributes.Name
 * @property {String} attributes.Platform
 * @property {String} attributes.Type
 * @property {String} attributes.Chat_ID
 */

/**
 * @typedef {Object} Command
 * @property {Number} id
 * @property {Object} attributes
 * @property {String} attributes.Name
 */

/**
 * @typedef {Object} DiscordConfig
 * @property {Number} id
 * @property {Object} attributes
 */

/**
 * @typedef {Object} Listening
 * @property {Number} id
 * @property {Object} attributes
 * @property {String} attributes.Label
 * @property {String} attributes.Text
 * @property {Object} [attributes.Messages]
 * @property {Message[]} [attributes.Messages.data]
 */

/**
 * @typedef {Object} Message
 * @property {Number} id
 * @property {Object} attributes
 * @property {String} attributes.Label
 * @property {String} attributes.Text
 */

/**
 * @typedef {Object} SlackConfig
 * @property {Number} id
 * @property {Object} attributes
 */

/**
 * @typedef {Object} TelegramConfig
 * @property {Number} id
 * @property {Object} attributes
 * @property {Boolean} attributes.Active
 * @property {String} attributes.Token
 * @property {String} attributes.Username
 * @property {Boolean} attributes.Private_chats
 * @property {Boolean} attributes.Group_chats
 */

export default {}
