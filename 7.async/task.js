class AlarmClock {
  constructor(alarmCollection , timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (time, callback, id) {
    if(!id) {
      throw new Error('error text');
    }
    const chekId = (element) => element.id == id;
    if (this.alarmCollection.some(chekId)) {
      console.error("Звонок уже существует");
      return;
    }
    return this.alarmCollection.push({id, time, callback});
  }


  removeClock (id) {
    if (this.alarmCollection.some(checkDell => checkDell.id == id)) {
      const index = this.alarmCollection.findIndex(book => book.id === id);
      this.alarmCollection.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime () {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start () {
    let checkClock = () => {
      this.alarmCollection.forEach(alarmTime => {
        if (alarmTime.time == this.getCurrentFormattedTime()) {
          alarmTime.callback();
        }
      });
    }
    if (!this.timerId) {
      this.timerId = setInterval(checkClock, 1000);
    }
  }

  stop () {
      clearInterval(this.timerId);
      this.timerId = null;
  }

  printAlarms () {
    this.alarmCollection.forEach(alarms => console.log(`Будильник № ${alarms.id} заведен на ${alarms.time}`));
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}

let phoneAlarm = new AlarmClock();

phoneAlarm.addClock("21:49", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("21:50", () => { console.log("Давай вставай уже!"); phoneAlarm.removeClock(2)} , 2);
try {
phoneAlarm.addClock("21:50", () => console.log("Иди умывайся"));
}
catch (e1) {
  console.log(e1);
}
phoneAlarm.addClock("21:51", () => {
  console.log("Вставай, ато проспишь");
  phoneAlarm.clearAlarms();
  phoneAlarm.printAlarms();
}, 3);
phoneAlarm.addClock("21:52", () => console.log("Вставай, ато проспишь"), 1);
phoneAlarm.printAlarms();
phoneAlarm.start();
