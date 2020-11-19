import { createAction, props } from '@ngrx/store';
import { ActionTypes } from 'src/app/shared/modules/addToFavorites/store/actionTypes';
import { ArticleInputInterface } from 'src/app/shared/types/articleInput.interface';

export const addToFavoritesAction = createAction(
  ActionTypes.ADD_TO_FAVORITES,
  props<{ isFavorited: boolean; slug: string }>()
);

export const addToFavoritesSuccessAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_SUCCESS,
  props<{ article: ArticleInputInterface }>()
);

export const addToFavoritesFailureAction = createAction(
  ActionTypes.ADD_TO_FAVORITES_FAILURE
);
