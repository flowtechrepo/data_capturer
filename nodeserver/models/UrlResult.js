const Sequelize = require('sequelize')

const attributes = {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    shortPath: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    r_ip: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    r_address: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    r_start_time: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    r_end_time: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    r_user_agent: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_user_agent_result: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_browser_name: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_browser_version: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_os_name: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_os_version: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_device_type: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_manufacturer: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    r_model: {
        type: Sequelize.TEXT,
        allowNull: true
    }
}

const options = {
  freezeTableName: true
}

module.exports.attributes = attributes
module.exports.options = options
