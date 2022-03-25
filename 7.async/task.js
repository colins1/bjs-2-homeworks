class AlarmClock {
  constructor(alarmCollection = [], timerId) {
    this.alarmCollection = alarmCollection;
    this.timerId = null;
  }

  addClock (time, callback, id) {
    if(!id) {
      throw new Error('error text');
    }
    if (this.timerId == id) {
      console.error("Звонок уже существует");
      return;
    }
    this.timerId = id;
    return this.alarmCollection.push({id, time, callback});
  }


  removeClock (id) {
    if (this.alarmCollection.filter(word => word.id == id)) {
      const index = this.alarmCollection.findIndex(book => book.id === id);
      this.alarmCollection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime () {
    return new Date().getHours() + ":" + new Date().getMinutes();
  }

  start () {
    const checkClock = (checkIdAlarm) => {
      if (checkIdAlarm.time == this.getCurrentFormattedTime()) {
        checkIdAlarm.callback();
      }
      if (!this.timerId) {
        const allAlarm = this.alarmCollection.filter(function(number) {
          checkClock(number);
        });
        let a = setInterval(allAlarm, 1000);
        return a;
      }
    };
  }

  stop () {
    if (this.timerId) {
      clearInterval(this.start());
    }
  }

  printAlarms () {
    this.alarmCollection.forEach(element => console.log(`Айди ${element.id}!`));
  }

  clearAlarms() {
    stop();
    for (;;) {
        this.removeClock(this.alarmCollection[0].id);
        if(!this.alarmCollection[0]) {
          break;
        }
    }
  }
}



//let now = new Date().toLocaleTimeString().slice(0,-3); // 11:02
