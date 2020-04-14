var stringShift = function(s, shift) {
  let totalMovement = shift.reduce((acc, movement) => {
    movement[0] === 0 ? acc -= movement[1] : acc += movement[1];
    return acc;
  }, 0)
  let length = s.length;

  if(totalMovement > 0) {
    s = s.substring(s.length - totalMovement) + s.substring(0, length - totalMovement);
  } else if(totalMovement < 0) {
    s = s.substring(-totalMovement, length -1 ) + s.substring(0, -totalMovement)
  }
  return s;
};