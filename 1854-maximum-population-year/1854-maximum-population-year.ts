function maximumPopulation(logs: number[][]): number {
  let maxPeople = 0;
  let answerYear = 1950;

  for (let year = 1950; year <= 2050; year++) {
    let count = 0;

    for (const [birth, death] of logs) {
      if (birth <= year && year < death) {
        count++;
      }
    }

    if (count > maxPeople) {
      maxPeople = count;
      answerYear = year;
    }
  }

  return answerYear;
}
