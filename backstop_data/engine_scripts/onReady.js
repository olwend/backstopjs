module.exports = function (engine, scenario, vp) {
  engine.evaluate(function () {
    // Your web-app is now loaded. Edit here to simulate user interactions or other state changes in the browser window context.
     // Example: Adding script delays to allow for things like CSS transitions to complete.
  casper.echo( 'Clicking button' );
  casper.click( '.toggle' );
  casper.wait( 250 );
  });
  console.log('onReady.js has run for: ', vp.label);
};
