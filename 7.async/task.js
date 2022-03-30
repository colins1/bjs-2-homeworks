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
    this.alarmCollection.forEach(element => console.log(`Айди ${element.id}!`));
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}
