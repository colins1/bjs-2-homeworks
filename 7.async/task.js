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
    let a = String(this.alarmCollection.time);
    return a;
  }

  start () {
    const checkClock = (checkIdAlarm) => {
      const now = new Date().getHours() + ":" + new Date().getMinutes();
      if (String(checkIdAlarm.time) === String(now)) {
        checkIdAlarm.callback();
      }
      if (!this.alarmCollection[0].id) {
        const allAlarm = () => console.log("Мы уже приехали?");
        this.timerId = setInterval(allAlarm, 1000);
      }
    };
    checkClock(this.alarmCollection[0]);
  }

}


//let now = new Date().toLocaleTimeString().slice(0,-3); // 11:02
