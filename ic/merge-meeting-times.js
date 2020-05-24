let input = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]

input = [
  { startTime: 1, endTime: 10 },
  { startTime: 2, endTime: 6 },
  { startTime: 3, endTime: 5 },
  { startTime: 7, endTime: 9 },
]



let output = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

let consolidate = (meetings) => {
  let sorted = meetings.sort((a, b) => {
    return a.startTime - b.startTime
  });

  console.log(sorted)

  let consolidated = [];
  let start = sorted[0].startTime;
  let end = sorted[0].endTime;

  for(let i = 1; i < sorted.length; i++) {
    if(sorted[i].startTime > end) {
      consolidated.push({startTime: start, endTime: end})
      start = sorted[i].startTime;
      end = sorted[i].endTime;
    }

    if(end < sorted[i].endTime) end = sorted[i].endTime;
  }

  consolidated.push({startTime: start, endTime: end})

  return consolidated

}

consolidate(input)