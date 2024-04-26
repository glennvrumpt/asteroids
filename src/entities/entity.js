class Entity {
  constructor() {
    this.id = Entity.generateId();
    this.components = {};
  }

  addComponent(component) {
    this.components[component.constructor.name] = component;
  }

  getComponent(componentName) {
    return this.components[componentName];
  }

  static generateId() {
    if (!this.currentId) this.currentId = 0;
    return this.currentId++;
  }
}

export default Entity;
