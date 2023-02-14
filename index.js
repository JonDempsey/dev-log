(function(window, _) {
    window.myLibraryName = window.devlog || {
      numz: {},
      phyz: {

        getDistance(pointA, pointB) {
          const
            distanceX = pointB.x - pointA.x,
            distanceY = pointB.y - pointA.y,
            distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          return distance;
        },

        makeBody: function(type, {
          velocityX = 0,
          velocityY = 0,
          rotationalVelocity = 0,
          integrity = 1,
          density = 1,
          volatility = 0
        } = {}) {
          if (type === undefined) throw new Error('You must provide a valid String for the type parameter!');
          return {
            type: type,
            velocityX: velocityX,
            velocityY: velocityY,
            rotationalVelocity: rotationalVelocity,
            integrity: integrity,
            density: density,
            volatility: volatility,

            handleCollision(impact, body) {
              // template method //
            },

            update(event) {
              // template method //
            },
          };
        },
      },
    };
  }(window, window._))