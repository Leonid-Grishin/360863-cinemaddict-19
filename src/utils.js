import {userGrade} from './const';

function truncateString(string, size) {
  if(string.length > size) {
    return `${string.substring(0, size)}...`;
  }

  return string;
}

function getUserGrade(watchedMoviesCount) {
  switch (true) {
    case(0 < watchedMoviesCount <= 10) : return userGrade.NOVICE;
    case(11 < watchedMoviesCount <= 20) : return userGrade.FUN;
    case(watchedMoviesCount > 20): return userGrade.BUFF;
    default : return '';
  }
}

export {truncateString, getUserGrade};
