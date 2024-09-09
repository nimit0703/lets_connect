import { mount, shallowMount } from '@vue/test-utils';
import  Loader from '@/components/loader/Loader.vue'

describe('App.vue Test Suite', () => {

    it('should show loader when showLoader is true', () => {
        const wrapper = shallowMount(Loader, {
            computed: {
            showLoader() {
                return true;  // Simulate the loader being active
            },
            },
        });
        expect(wrapper.find('.div').isVisible()).toBe(true);
    })
    it('should show loader when showLoader is false', () => {
        const wrapper = shallowMount(Loader, {
            computed: {
            showLoader() {
                return false;  // Simulate the loader being inActive
            },
            },
        });
        expect(wrapper.find('.div').isVisible()).toBe(false);
    })

});
