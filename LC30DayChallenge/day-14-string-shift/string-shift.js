var stringShift = function(s, shift) {
  let totalMovement = shift.reduce((acc, movement) => {
    movement[0] === 0 ? acc -= movement[1] : acc += movement[1];
    return acc;
  }, 0)

  if(Math.abs(totalMovement) > s.length) {
    let moveRight = totalMovement >= 0;
    totalMovement = Math.abs(totalMovement);
    while(totalMovement > s.length) {
       totalMovement = totalMovement - s.length
    }
    totalMovement = moveRight ? totalMovement : -totalMovement;
  }

  if(totalMovement > 0) {
    s = s.substring(s.length - totalMovement) + s.substring(0, s.length - totalMovement);
  } else if(totalMovement < 0) {
    s = s.substring(-totalMovement, s.length) + s.substring(0, -totalMovement)
  }
  return s;
};