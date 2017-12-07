// edit the scenario , vp to give test specific actions?
module.exports = function (engine, scenario, vp) {
  // This script runs before your app loads. Edit here to log-in, load cookies or set other states required for your test.
    // Example: setting cookies
  casper.echo("Setting cookies");
  casper.then(function(){
    casper.page.addCookie({name: 'cookieName', value: 'cookieValue'});
  });
  console.log('onBefore.js has run for ' + vp.label + '.');
};
