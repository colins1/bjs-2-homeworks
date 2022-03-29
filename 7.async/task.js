class AlarmClock {
  constructor(alarmCollection , timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock (time, callback, id) {
    if(!id) {
      throw new Error('error text');
    }
    if (this.alarmCollection.includes(id)) {
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
     (checkClock) => {
      allAlarm.forEach(element => console.log(element));
        if (alarm.time == this.getCurrentFormattedTime()) {
          alarm.callback();
        }
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
    this.alarmCollection.forEach(element => console.log(`Айди ${element.id}!`));
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}
