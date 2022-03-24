class AlarmClock {
  constructor(alarmCollection = [], timerId) {
    this.alarmCollection = alarmCollection;
    this.timerId = null;
  }

  addClock (time, callback, id) {
    if(!id) {
      throw new Error('error text');
    }
    if (this.alarmCollection.id == id) {
      console.error("Звонок уже существует");
      return;
    }
    return this.alarmCollection.push({id, time, callback});
  }

  removeClock (id) {
    if (this.alarmCollection.filter(word => word.id == id)) {
      const index = this.alarmCollection.findIndex(book => book.id === id);
      let a = this.alarmCollection.splice(index, 1);
      return true;
    } else {
      return false;
    }

  }

  getCurrentFormattedTime () {
    return new Date().getHours() + ":" + new Date().getMinutes();
  }

  start () {
    const checkIdAlarm = (checkClock) => {
      if (checkClock.time == getCurrentFormattedTime()) {
        checkClock.callback();
      }
      if (!this.timerId) {
        const allAlarm = () => this.alarmCollection.every((numb, i) => checkClock(numb))
        this.timerId = setInterval(allAlarm, 1000);
      }
    };
    checkClock(this.alarmCollection[0]);
  }

}
