// A crack team of love scientists from OkEros (a hot new dating site) have devised a way to represent dating profiles as rectangles on a two-dimensional plane.

// They need help writing an algorithm to find the intersection of two users' love rectangles. They suspect finding that intersection is the key to a matching algorithm so powerful it will cause an immediate acquisition by Google or Facebook or Obama or something.

// Two rectangles overlapping a little. It must be love.
// Write a function to find the rectangular intersection of two given love rectangles.

// As with the example above, love rectangles are always "straight" and never "diagonal." More rigorously: each side is parallel with either the x-axis or the y-axis.

// They are defined as objects ↴ like this:

  const myRectangle = {

  // Coordinates of bottom-left corner
  leftX: 1,
  bottomY: 1,

  // Width and height
  width: 6,
  height: 3,
};

// JavaScript
// Your output rectangle should use this format as well.

// function findRectangularOverlap(rect1, rect2) {

//     let overlap = { leftX: null, bottomY: null, width: null, height: null };

//     // Calculate the overlap between the two rectangles
//     let findXOverlap = (rect1, rect2) => {
//         if(rect1.leftX <= rect2.leftX) {
//             if((rect1.leftX + rect1.width) >= rect2.leftX) {
//                 overlap.leftX = rect2.leftX;
//                 overlap.width = Math.min((rect1.leftX + rect1.width - overlap.leftX), (rect2.leftX + rect2.width - overlap.leftX));
//             }
//         } else if(rect2.leftX < rect1.leftX) {
//             if((rect2.leftX + rect2.width) > rect1.leftX) {
//                 overlap.leftX = rect1.leftX;
//                 overlap.width = Math.min((rect1.leftX + rect1.width - overlap.leftX), (rect2.leftX + rect2.width - overlap.leftX));
//             }
//         }
//     }

//     let findYOverlap = (rect1, rect2) => {
//         if(rect1.bottomY <= rect2.bottomY) {
//             if((rect1.bottomY + rect1.height) >= rect2.bottomY) {
//                 overlap.bottomY = rect2.bottomY;
//                 overlap.height = Math.min((rect1.bottomY + rect1.height - overlap.bottomY), (rect2.bottomY + rect2.height - overlap.bottomY));
//             }
//         } else if(rect2.bottomY < rect1.bottomY) {
//             if((rect2.bottomY + rect2.height) > rect1.bottomY) {
//                 overlap.bottomY = rect1.bottomY;
//                 overlap.height = Math.min((rect1.bottomY + rect1.height - overlap.bottomY), (rect2.bottomY + rect2.height - overlap.bottomY));
//             }
//         }
//     }

//     findXOverlap(rect1, rect2);
//     findYOverlap(rect1, rect2);
  
//     return overlap;
//   }


  let rectangle1 = {
    leftX: 1,
    bottomY: 1,
    width: 6, 
    height: 3
  }

  let rectangle2 = {
    leftX: 5,
    bottomY: 2,
    width: 3,
    height: 6
  }

  findRectangularOverlap(rectangle1, rectangle2)


// scenario 1: touch:
__________
          __________


// scenario 2: don't overlap:
________
            ________


// scenario 3: partially overlap:
_______________
     _______________


// scenario 4: completely overlap:
____________________
     __________


// scenario 5: are the same:
____________________
____________________

function findRectangularOverlap (rect1, rect2) {
    const findOverlap = (point1, length1, point2, length2) => {
        const startPoint = Math.max(point1, point2);
        const endPoint = Math.min((point1 + length1), (point2 + length2));
        if(start >= end) {
            return {startPoint: null, overlapLength: null};
        }
        return {startPoint: startPoint, overlapLength: endPoint - startPoint};
    };

    let xOverlap = findOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
    let yOverlap = findOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

    if(!xOverlap.overlapLength || !yOverlap.overlapLength) {
        return {
            leftX: null,
            width: null,
            bottomY: null,
            height: null,
        };
    } else {
        return {
            leftX: xOverlap.startPoint,
            width: xOverlap.overlapLength,
            bottomY: yOverlap.startPoint,
            height: yOverlap.overlapLength,
        };
    }
};

