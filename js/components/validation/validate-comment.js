import { MAX_COMMENT_LENGTH } from '../../data.js';

const isValidComment = (value) => value.length <= MAX_COMMENT_LENGTH;

export { isValidComment };
