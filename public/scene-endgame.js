Crafty.scene('endgame', function() {
  Crafty.background(
    'white url(assets/end.png) no-repeat center center'
  ); /* image for testing purpose */

  /* GAME OVER && message depending on the stress level */
  Crafty.e('2D, DOM, Canvas, Text, Mouse')
<<<<<<< HEAD
    .attr({ x: 20, y: 70 })
    .text(function() {
      if (playerMetrics.primaryMetrics.stress >= 10) {
        return 'Chill out! It is going alright.';
      } else {
        return 'Time for some good sleep';
      }
    })
    .textColor('white')
    .textFont({ size: '30px' })
    .css({ 'font-family': 'VT323' })
    .css({ 'font-family': 'monospace' })
    .bind('KeyDown', function(e) {
      if (e.key == Crafty.keys.ENTER) {
        Crafty.enterScene('nightCats');
      }
    });
=======
  .attr({ x: 20, y: 70 })
  .text(function() {
    if (playerMetrics.primaryMetrics.stress >= 10) {
      return 'Oh dear...you panicked...'
    } else {
      return 'You made it through the day!'
    }
  })
  .textColor('white')
  .textFont({ size: '50px', weight: 'bold'})
  .bind('KeyDown', function(e) {
    if (e.key == Crafty.keys.ENTER) {
      Crafty.enterScene('nightCats')
    }
  })
>>>>>>> 95baeaa8d33295ed5701b8389ff9ba01457d01e4

  /* Press enter to proceed to the final page (Cats page) */
  Crafty.e('2D, DOM, Canvas, Text, Mouse')
    .attr({ x: 160, y: 270 })
    .text('Press enter to continue')
    .css({ 'font-family': 'VT323' })
    .css({ 'font-family': 'monospace' })
    .textFont({ size: '30px', weight: 'bold', type: 'italic' })
    .textColor('white');
});

function loadEndgame(scene, duration) {
  Crafty.e('2D, DOM, Tween, Color')
<<<<<<< HEAD
    .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
    .color('#000000')
    .tween({ alpha: 1.0 }, duration)
    .bind('TweenEnd', function() {
      Crafty.scene(scene);
      Crafty.e('2D, DOM, Tween, Color')
        .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
        .color('#000000')
        .tween({ alpha: 0.0 }, duration);
    });
}
=======
  .attr({ alpha: 0.0, x: 0, y: 0, w: 800, h: 600 })
  .color('#000000')
  .tween({ alpha: 1.0 }, duration)
  .bind('TweenEnd', function() {
    Crafty.scene(scene);
    Crafty.e('2D, DOM, Tween, Color')
    .attr({ alpha: 1.0, x: 0, y: 0, w: 800, h: 600 })
    .color('#000000')
    .tween({ alpha: 0.0 }, duration);
  });
}
>>>>>>> 95baeaa8d33295ed5701b8389ff9ba01457d01e4
