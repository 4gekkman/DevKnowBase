var ladder = {
    step: 0,
    up: function() {  // вверх по лестнице
        this.step++;
        return this;
    },
    down: function() {  // вниз по лестнице
        this.step--;
        return this;
    },
    showStep: function() { // вывести текущую ступеньку
        alert(this.step);
        return this;
    }
};

ladder.up().up().up().down().showStep();