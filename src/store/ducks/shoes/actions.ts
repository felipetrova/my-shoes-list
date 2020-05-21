import { action } from 'typesafe-actions';
import { ShoesTypes, Shoe } from './types'

export const loadRequest = () => action(ShoesTypes.LOAD_REQUEST);

export const loadSuccess = (data: Shoe[]) => action(ShoesTypes.LOAD_SUCCCES, { data });

export const loadFailure = () => action(ShoesTypes.LOAD_FAILURE);
