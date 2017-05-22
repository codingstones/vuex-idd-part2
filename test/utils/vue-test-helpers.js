import { store } from '../../src/vuex/store';
export const shared = require('mocha-shared');
export const EMPTY_HTML = '<!---->';
export const VUEX_COMPONENT = 'vuex component';

shared.behavior(VUEX_COMPONENT, (component) => {
  it('declares valid computed getters', () => {
    checkValid(component, 'computed', 'mappedGetter', 'getters');
  });
  it('declares valid computed actions', () => {
    checkValid(component, 'methods', 'mappedAction', '_actions');
  });
  it('declares valid computed mutations', () => {
    checkValid(component, 'methods', 'mappedMutation', '_mutations');
  });
});

function checkValid(component, componentEntry, mappedName, storeAttribute) {
  if (!component[componentEntry]) return;
  for (const method of Object.entries(component[componentEntry])) {
    if (method[1].name === mappedName) {
      expect(Object.keys(store[storeAttribute]).includes(method[0])).eql(true);
    }
  }
}
