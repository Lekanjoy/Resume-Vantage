import {configureStore} from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import resumeSlice from '@/features/resumeSlice';

export const store = configureStore({
  reducer: {
    resume: resumeSlice,
  },
});

// Use the ReturnType utility type to get the type of the store object
export type StoreType = typeof store

// Define a RootState type that includes the whole state tree
export type RootState = ReturnType<StoreType['getState']>

// Define an AppDispatch type that is the same as the dispatch method on the store
export type AppDispatch = StoreType['dispatch']

// Export a hook that can be reused to resolve types
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Export a typed useSelector hook
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
