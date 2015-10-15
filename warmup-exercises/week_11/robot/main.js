var robot;

$(document).ready(function() {
  function createRobot() {
    var x = 0,
        y = 0,
        dir;

    var bender = document.createElement('div');
    bender.className = 'robot';
    document.body.appendChild(bender);

    var moveBender = function() {
      bender.style.top = (window.innerHeight / 2 + y * 40 - 20) + 'px';
      bender.style.left = (window.innerWidth / 2 + x * 40 - 20) + 'px';
      bender.innerHTML = ("x:" + x + " y:" + -y);
    };

    moveBender();

    var turn = function( direction ) {
      dir = direction;
    };

    var advance = function( step ) {
      step = step || 1;

      if (dir === "up") {
        y = y - step;
      } else if (dir === "down") {
        y = y + step;
      } else if (dir === "left") {
        x = x - step;
      } else if (dir === "right") {
        x = x + step;
      }

      moveBender();
    };

    return {
      turn: turn,
      advance: advance,
      up: function() {
        turn("up");
        advance();
      },
      down: function() {
        turn("down");
        advance();
      },
      left: function() {
        turn("left");
        advance();
      },
      right: function() {
        turn("right");
        advance();
      }
    };
  }

  robot = createRobot();

  Mousetrap.bind(['up', 'w'], robot.up);
  Mousetrap.bind(['down', 's'], robot.down);
  Mousetrap.bind(['left', 'a'], robot.left);
  Mousetrap.bind(['right', 'd'], robot.right);

});