import { ActionReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';

function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['books'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers = [localStorageSyncReducer];
