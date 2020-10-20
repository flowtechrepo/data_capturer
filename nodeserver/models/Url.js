const Sequelize = require('sequelize')

const attributes = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    pagePath: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    params: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    fullPath: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    shortPath: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    shortUrl: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    id_owner: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    id_deal: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    id_client: {
        type: Sequelize.STRING,
        allowNull: true,
    },
	client_name: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    phone_no: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    language: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    id_channel: {
        type: Sequelize.STRING,
        allowNull: true,
    }
}

const options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options
