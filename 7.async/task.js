class AlarmClock {
  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = timerId;
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
      return this.alarmCollection.splice(index, 1);
    } else {
      return arr;
    }

  }

  getCurrentFormattedTime () {
    let a = String(this.alarmCollection.time);
    return a;
  }

  start (checkClock) {
    if (String(checkClock) === String(this.alarmCollection.time)) {
    let b = this.alarmCollection.callback();
    return b;
    }
  }

}


//let now = new Date().toLocaleTimeString().slice(0,-3); // 11:02
