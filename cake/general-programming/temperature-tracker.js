// You decide to test if your oddly-mathematical heating company is fulfilling its All-Time Max, Min, Mean and Mode Temperature Guarantee™.

// Write a class TempTracker with these methods:

// insert()—records a new temperature
// getMax()—returns the highest temp we've seen so far
// getMin()—returns the lowest temp we've seen so far
// getMean()—returns the mean ↴ of all temps we've seen so far
// getMode()—returns a mode ↴ of all temps we've seen so far
// Optimize for space and time. Favor speeding up the getter methods getMax(), getMin(), getMean(), and getMode() over speeding up the insert() method.

// Temperatures will all be inserted as integers. We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0...110.

// If there is more than one mode, return any of the modes.

class TempTracker {
    constructor() {
        this.occurrences = new Array(111).fill(0);
        this.maxOccurrences = 0;
        this.mode = null;
        this.numTempCounts = 0;
        this.tempCountsTotal = 0;
        this.mean = null;
        this.min = null;
        this.max = null;
    }

    insert(value) {
        this.occurrences[value]++;
        if(this.occurrences[value] > this.maxOccurrences) {
            this.maxOccurrences = this.occurrences[value];
            this.mode = value;
        }

        this.numTempCounts++;
        this.tempCountsTotal += value;
        this.mean = this.tempCountsTotal / this.numTempCounts;

        if(this.min === null || this.min > value) {
            this.min = value;
        }

        if(this.max === null || this.max < value) {
            this.max = value;
        }
    }

    getMax() {
        return this.max;
    }

    getMin() {
        return this.min;
    }

    getMean() {
        return this.mean;
    }

    getMode() {
        return this.mode;
    }
}