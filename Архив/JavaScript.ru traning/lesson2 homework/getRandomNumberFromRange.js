

/*
 * Generate random whole number from included start to included end
 *
 * @author 4gekkman@gmail.com
 * @param number start number
 * @param number end number
 * @return number random whole number, if start or end
 * is not a whole number, returns -1;
 */
function getRandomNumberFromRange(start,end) {
    var result = start - 0.5 + Math.random()*(end-start+1);
    result = Math.round(result);
    return result;
}


/*
 * Generate random whole number from included start to included end
 * For work need:
 *  - isNumberWhole()
 *  - getRandomNumberByPos()
 * @author 4gekkman@gmail.com
 * @param number start number
 * @param number end number
 * @return number random whole number, if start or end
 * is not a whole number, returns -1;
 */
function getRandomNumberFromRange2(start,end) {
    if(!isNumberWhole(start) || !isNumberWhole(end)) {
        return -1;
    }

    var startDigitCount = start.toString().length,
        endDigitCount = end.toString().length,
        multiplier = 0,
        result = 0,
        switchOk = 0;

    if (startDigitCount > endDigitCount)  // поменяем местами
    {
        var temp = endDigitCount;
        endDigitCount = startDigitCount;
        startDigitCount = temp;
    }

    if(startDigitCount === endDigitCount) {
        for(var j = 0; j < 1; j++) {
            result = getRandomNumberByPos(startDigitCount);
            if(result >= start && result <= end) {
                return result;
            } else {
                j = -1;
                continue;
            }
        }
    }

    if(startDigitCount < endDigitCount) {
        for(var i = startDigitCount; i<= endDigitCount; i++) {
            if(i === endDigitCount) {  // если это последняя итерация берем то, что есть
                result =  getRandomNumberByPos(i);
                if(result >= start && result <= end) {
                    return result;
                } else {
                    i = startDigitCount - 1;
                    continue;
                }
            }
            if(getRandomNumberByPos(1) < 5) {
                result = getRandomNumberByPos(i);
                if(result >= start && result <= end) {
                    return result;
                } else {
                    i = startDigitCount - 1;
                    continue;
                }
            } else {
                continue;
            }

        }
    }
}
