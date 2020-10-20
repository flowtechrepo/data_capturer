const express = require('express')
const router = express.Router()
const Model = require('../model.js')
const UA = require('ua-device');
const geoip = require('geoip-country');


const getUAInfo = function(req) {
    const userAgent = req.headers['user-agent']
    const output = new UA(userAgent)
    const browserName = output.browser.name
    const browserVersion = output.browser.version.original
    const osName = output.os.name
    const osVersion = output.os.version.original
    const deviceType = output.device.type
    const manufacturer = output.device.manufacturer
    const model = output.device.model

    return {
        browserName, 
        browserVersion, 
        osName, 
        osVersion, 
        deviceType, 
        manufacturer, 
        model,
        userAgent,
        userAgentResult: output
    }
}

router.get('/list', async function (req, res) {
    const list = await Model.Url.findAll({
        order: [
            ['id', 'DESC'],
        ],
		limit:20
    })
    
    res.json({
        list
    })
})

router.get('/list/result', async function (req, res) {
    const list = await Model.UrlResult.findAll({
        order: [
            ['id', 'DESC'],
        ],
		limit:20
    })
    
    res.json({
        list
    })
})

router.get('/getByShortId', async function (req, res) {
    const shortPath = req.query.shortPath
    const item = await Model.Url.findOne({
        where: {
            shortPath
        }
    })
    
    res.json({
        item
    })
})

router.post('/updateStartTime', async function (req, res) {
    const { shortPath } = req.body
    console.log(req.ipInfo)
    let r_ip = 'Could not find ip'
    let r_address = 'Could not find address'
    if (req.ipInfo) {
        r_ip = req.ipInfo.ip
        try {
            var geo = geoip.lookup(r_ip);
            r_address = geo.country
        } catch (e) {
            console.log(e)
        }
    }
    const uainfo = getUAInfo(req)


    const newrow = await Model.UrlResult.create({
        r_ip,
        r_address,
        shortPath,
        r_start_time: new Date(),
        r_user_agent: uainfo.userAgent,
        r_user_agent_result: JSON.stringify(uainfo.userAgentResult, null, 4),
        r_browser_name: uainfo.browserName,
        r_browser_version: uainfo.browserVersion,
        r_os_name: uainfo.osName,
        r_os_version: uainfo.osVersion,
        r_device_type: uainfo.deviceType,
        r_manufacturer: uainfo.manufacturer,
        r_model: uainfo.model
    })
    res.json({
        result: {
            id: newrow.id
        }
    })
})

router.post('/updateEndTime', async function (req, res) {
    const { id } = req.body
    
    await Model.UrlResult.update({
        r_end_time: new Date()
    }, {
        where: {
            id
        }
    })
    
    res.json({
        result: 1
    })
})

router.post('/add', async function (req, res) {
    const { pagePath, params, fullPath, shortPath, id_owner, id_deal, id_client, client_name, phone_no, language, id_channel } = req.body
    
    await Model.Url.create({
        id: null,
        pagePath,
        params,
        fullPath,
        shortPath,
        id_owner,
        id_deal,
        id_client,
        client_name,
        phone_no,
        language,
        id_channel
    })
    
    res.json({
        result: 1
    })
})

router.post('/batchAdd', async function (req, res) {
    console.log('batch add', req.body)
    const list = req.body.list

    await Model.Url.bulkCreate(list)
    
    res.json({
        result: 1
    })
})
module.exports = router
