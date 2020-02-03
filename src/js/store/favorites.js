class Favorites {
  constructor() {
    this.store = [];
  }

  addTicket(ticket) {
    let isHas = false;
    this.store.forEach(element => {
      if (JSON.stringify(element) === JSON.stringify(ticket)) {
        isHas = true;
      }
    });
    if (!isHas) this.store.push(ticket);
  }

  removeTicket(ticket) {
    this.store = this.store.filter(currentTicket => {
      return JSON.stringify(currentTicket) !== JSON.stringify(ticket);
    });

  }
}

const favorites = new Favorites();

export default favorites;