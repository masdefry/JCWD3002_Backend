import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = create(persist((set) => ({
        token: '',
        firstName: '',
        role: '',

        setAuth: ({token, firstName, role}: any) => set({token: token, firstName: firstName, role: role}),
        setKeepAuth: ({firstName, role}: any) => set({firstName, role})
    }),
    {
        name: 'authToken',
        partialize: (state: any) => ({token: state.token})
    }
))

export default authStore;