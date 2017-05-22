import Vuex from 'vuex';
import avoriaz from 'avoriaz';
import { mount } from 'avoriaz';
import { store } from '../../src/vuex/store';
import { EMPTY_HTML, shared, VUEX_COMPONENT } from '../../test/utils/vue-test-helpers';
import Spinner from './Spinner';

avoriaz.use(Vuex);

describe.only('Spinner.vue', () => {

  shared.behavior(VUEX_COMPONENT, Spinner);

  it('does not show loading state', () => {
    store.state.loading = false;

    const wrapper = mount(Spinner, { store });

    expect(wrapper.html()).to.equal(EMPTY_HTML);
  });

  it('shows loading state', () => {
    store.state.loading = true;

    const wrapper = mount(Spinner, { store });

    expect(wrapper.hasClass('animated')).to.be.true;
  });
});
