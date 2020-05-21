/**
 * Action types
 */
export enum ShoesTypes {
  LOAD_REQUEST = '@shoes/LOAD_REQUEST',
  LOAD_SUCCCES = '@shoes/LOAD_SUCCCES',
  LOAD_FAILURE = '@shoes/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Shoe {
  id: number
  name: string
}

/**
 * State type
 */
export interface ShoesState {
  readonly data: Shoe[]
  readonly loading: boolean
  readonly error: boolean
}
