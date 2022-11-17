import {AppDispatch, RootState} from '../store/store';
import {useDispatch} from 'react-redux/es/exports';
import {TypedUseSelectorHook} from 'react-redux/es/types';
import {useSelector} from 'react-redux/es/hooks/useSelector';


export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
