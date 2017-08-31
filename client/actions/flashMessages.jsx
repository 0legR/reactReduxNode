import {ADD_FLASH_MESSAGE} from './types';

export function addFlashMessages(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
}
