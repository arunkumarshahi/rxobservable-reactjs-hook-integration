import { ajax } from 'rxjs/ajax';
import { mergeMap, delay, map, pipe, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export const fetchPing = () => ({ type: 'PING' });

export const pingEpic = (action$) =>
  action$.pipe(
    ofType('PING'),
    delay(1000), // Asynchronously wait 1000ms then continue
    mapTo({ type: 'PONG' })
  );
