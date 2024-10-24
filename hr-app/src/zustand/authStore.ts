import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = create(persist((set) => ({
        token: '',
        firstName: '',

        setAuth: ({token, firstName}: any) => set({token: token, firstName: firstName})
    }),
    {
        name: 'authToken',
        partialize: (state) => ({token: state.token})
    }
))

export default authStore;