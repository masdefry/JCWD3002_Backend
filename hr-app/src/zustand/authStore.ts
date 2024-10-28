import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = create(persist((set) => ({
    // Global State
        token: '',
        firstName: '',
        role: '',

        setAuth: ({token, firstName, role}: any) => set({token: token, firstName: firstName, role: role}),
        setKeepAuth: ({firstName, role}: any) => set({firstName, role}),
        setAuthLogout: () => set({firstName: '', role: '', token: ''})
    }),
    // Persist LocalStorage
    {
        name: 'authToken',
        partialize: (state: any) => ({token: state.token})
    }
))

export default authStore;