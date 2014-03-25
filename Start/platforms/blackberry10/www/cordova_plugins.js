cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.blackberry.sensors/www/client.js",
        "id": "com.blackberry.sensors.client",
        "clobbers": [
            "blackberry.sensors"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.blackberry.sensors": "1.0.0",
    "com.blackberry.utils": "1.0.0"
}
// BOTTOM OF METADATA
});